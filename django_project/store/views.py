from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.db.models import Q
from .models import Category, Product, Cart, CartItem, Order, OrderItem
from .forms import UserRegisterForm, CheckoutForm


def home(request):
    """1. Главная страница"""
    categories = Category.objects.all()
    featured_products = Product.objects.filter(available=True)[:8]
    discounted_products = Product.objects.filter(
        available=True, old_price__isnull=False
    ).exclude(old_price=0)[:4]
    context = {
        'categories': categories,
        'featured_products': featured_products,
        'discounted_products': discounted_products,
    }
    return render(request, 'store/home.html', context)


def product_list(request):
    """2. Список всех товаров"""
    products = Product.objects.filter(available=True)
    categories = Category.objects.all()
    
    # Фильтрация по категории
    category_slug = request.GET.get('category')
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        products = products.filter(category=category)
    
    # Сортировка
    sort_by = request.GET.get('sort', '-created_at')
    if sort_by in ['price', '-price', 'name', '-name', '-created_at']:
        products = products.order_by(sort_by)
    
    # Фильтрация по цене
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')
    if min_price:
        products = products.filter(price__gte=min_price)
    if max_price:
        products = products.filter(price__lte=max_price)
    
    context = {
        'products': products,
        'categories': categories,
        'current_sort': sort_by,
    }
    return render(request, 'store/product_list.html', context)


def product_detail(request, slug):
    """3. Детальная страница товара"""
    product = get_object_or_404(Product, slug=slug, available=True)
    related_products = Product.objects.filter(
        category=product.category, available=True
    ).exclude(id=product.id)[:4]
    context = {
        'product': product,
        'related_products': related_products,
    }
    return render(request, 'store/product_detail.html', context)


def category_detail(request, slug):
    """4. Товары категории"""
    category = get_object_or_404(Category, slug=slug)
    products = Product.objects.filter(category=category, available=True)
    context = {
        'category': category,
        'products': products,
    }
    return render(request, 'store/product_list.html', {
        'products': products,
        'categories': Category.objects.all(),
        'current_category': category,
    })


def search(request):
    """5. Поиск товаров"""
    query = request.GET.get('q', '')
    products = Product.objects.filter(available=True)
    if query:
        products = products.filter(
            Q(name__icontains=query) |
            Q(description__icontains=query) |
            Q(category__name__icontains=query)
        )
    context = {
        'products': products,
        'query': query,
    }
    return render(request, 'store/search_results.html', context)


def _get_or_create_cart(request):
    """Получить или создать корзину"""
    if request.user.is_authenticated:
        cart, created = Cart.objects.get_or_create(user=request.user)
    else:
        session_key = request.session.session_key
        if not session_key:
            request.session.create()
            session_key = request.session.session_key
        cart, created = Cart.objects.get_or_create(session_key=session_key)
    return cart


@require_POST
def add_to_cart(request):
    """6. Добавить товар в корзину (AJAX)"""
    product_id = request.POST.get('product_id')
    quantity = int(request.POST.get('quantity', 1))
    
    product = get_object_or_404(Product, id=product_id, available=True)
    cart = _get_or_create_cart(request)
    
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    if not created:
        cart_item.quantity += quantity
    else:
        cart_item.quantity = quantity
    cart_item.save()
    
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'status': 'success',
            'message': f'{product.name} добавлен в корзину',
            'cart_total': cart.get_total_items(),
            'cart_price': str(cart.get_total_price()),
        })
    return redirect('cart_detail')


@require_POST
def remove_from_cart(request):
    """7. Удалить товар из корзины (AJAX)"""
    item_id = request.POST.get('item_id')
    cart_item = get_object_or_404(CartItem, id=item_id)
    cart = cart_item.cart
    product_name = cart_item.product.name
    cart_item.delete()
    
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'status': 'success',
            'message': f'{product_name} удалён из корзины',
            'cart_total': cart.get_total_items(),
            'cart_price': str(cart.get_total_price()),
        })
    return redirect('cart_detail')


@require_POST
def update_cart_quantity(request):
    """8. Обновить количество товара (AJAX)"""
    item_id = request.POST.get('item_id')
    quantity = int(request.POST.get('quantity', 1))
    
    cart_item = get_object_or_404(CartItem, id=item_id)
    if quantity > 0:
        cart_item.quantity = quantity
        cart_item.save()
    else:
        cart_item.delete()
    
    cart = cart_item.cart
    
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse({
            'status': 'success',
            'cart_total': cart.get_total_items(),
            'cart_price': str(cart.get_total_price()),
            'item_total': str(cart_item.get_total_price()) if quantity > 0 else '0',
        })
    return redirect('cart_detail')


def cart_detail(request):
    """9. Страница корзины"""
    cart = _get_or_create_cart(request)
    items = cart.items.select_related('product').all()
    context = {
        'cart': cart,
        'items': items,
        'total_price': cart.get_total_price(),
    }
    return render(request, 'store/cart.html', context)


@login_required
def checkout(request):
    """10. Оформление заказа"""
    cart = _get_or_create_cart(request)
    if not cart.items.exists():
        messages.warning(request, 'Ваша корзина пуста')
        return redirect('cart_detail')
    
    if request.method == 'POST':
        form = CheckoutForm(request.POST)
        if form.is_valid():
            order = form.save(commit=False)
            order.user = request.user
            order.total_price = cart.get_total_price()
            order.save()
            
            for item in cart.items.all():
                OrderItem.objects.create(
                    order=order,
                    product=item.product,
                    price=item.product.price,
                    quantity=item.quantity,
                )
                # Уменьшаем остаток на складе
                product = item.product
                product.stock -= item.quantity
                if product.stock <= 0:
                    product.available = False
                product.save()
            
            cart.items.all().delete()
            messages.success(request, f'Заказ #{order.id} успешно оформлен!')
            return redirect('order_success', order_id=order.id)
    else:
        form = CheckoutForm(initial={
            'first_name': request.user.first_name,
            'last_name': request.user.last_name,
            'email': request.user.email,
        })
    
    context = {
        'form': form,
        'cart': cart,
        'items': cart.items.select_related('product').all(),
        'total_price': cart.get_total_price(),
    }
    return render(request, 'store/checkout.html', context)


def order_success(request, order_id):
    """11. Страница успешного заказа"""
    order = get_object_or_404(Order, id=order_id)
    context = {'order': order}
    return render(request, 'store/order_success.html', context)


@login_required
def order_history(request):
    """12. История заказов"""
    orders = Order.objects.filter(user=request.user)
    context = {'orders': orders}
    return render(request, 'store/order_history.html', context)


@login_required
def order_detail(request, order_id):
    """13. Детали заказа"""
    order = get_object_or_404(Order, id=order_id, user=request.user)
    items = order.items.select_related('product').all()
    context = {
        'order': order,
        'items': items,
    }
    return render(request, 'store/order_detail.html', context)


def user_register(request):
    """14. Регистрация пользователя"""
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                messages.success(request, f'Добро пожаловать, {username}!')
                return redirect('home')
    else:
        form = UserRegisterForm()
    return render(request, 'store/register.html', {'form': form})


def user_login(request):
    """15. Вход пользователя"""
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, f'Вы вошли как {username}')
            next_url = request.GET.get('next', 'home')
            return redirect(next_url)
        else:
            messages.error(request, 'Неверное имя пользователя или пароль')
    return render(request, 'store/login.html')
