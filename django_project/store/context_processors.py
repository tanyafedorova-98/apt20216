from .models import Cart, CartItem


def cart_context(request):
    """Контекст-процессор для корзины (доступен во всех шаблонах)"""
    cart_total = 0
    cart_items_count = 0
    
    if request.user.is_authenticated:
        try:
            cart = Cart.objects.get(user=request.user)
            cart_total = cart.get_total_price()
            cart_items_count = cart.get_total_items()
        except Cart.DoesNotExist:
            pass
    else:
        session_key = request.session.session_key
        if session_key:
            try:
                cart = Cart.objects.get(session_key=session_key)
                cart_total = cart.get_total_price()
                cart_items_count = cart.get_total_items()
            except Cart.DoesNotExist:
                pass
    
    return {
        'cart_total': cart_total,
        'cart_items_count': cart_items_count,
    }
