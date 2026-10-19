# 🖨️ ОргТехМаркет — Интернет-магазин оргтехники

Полноценный интернет-магазин оргтехники, разработанный на Django с использованием Bootstrap 5 и AJAX.

## 📋 Структура проекта

### Бэкенд (Django)
- **6 моделей**: Category, Product, Cart, CartItem, Order, OrderItem
- **15 представлений**: home, product_list, product_detail, category_detail, search, add_to_cart, remove_from_cart, update_cart_quantity, cart_detail, checkout, order_success, order_history, order_detail, user_register, user_login
- **Админ-панель**: полная настройка для всех моделей

### Фронтенд
- **8 шаблонов**: base.html, home.html, product_list.html, product_detail.html, cart.html, checkout.html, order_history.html, login.html (+ register.html, search_results.html, order_success.html, order_detail.html)
- **Bootstrap 5**: адаптивный дизайн для всех устройств
- **AJAX**: добавление/удаление товаров из корзины без перезагрузки страницы
- **jQuery**: обработка AJAX-запросов

## 🚀 Инструкция по запуску

### 1. Клонирование и переход в папку проекта
```bash
cd django_project
```

### 2. Создание виртуального окружения
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

### 3. Установка зависимостей
```bash
pip install -r requirements.txt
```

### 4. Выполнение миграций
```bash
python manage.py makemigrations
python manage.py migrate
```

### 5. Заполнение базы данных
```bash
python populate_db.py
```

### 6. Запуск сервера
```bash
python manage.py runserver
```

### 7. Открытие в браузере
- Магазин: http://127.0.0.1:8000/
- Админ-панель: http://127.0.0.1:8000/admin/
- Логин: `admin`
- Пароль: `admin123`

## 📁 Структура файлов

```
django_project/
├── config/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── store/
│   ├── __init__.py
│   ├── admin.py
│   ├── context_processors.py
│   ├── forms.py
│   ├── models.py
│   ├── urls.py
│   └── views.py
├── templates/
│   └── store/
│       ├── base.html
│       ├── home.html
│       ├── product_list.html
│       ├── product_detail.html
│       ├── cart.html
│       ├── checkout.html
│       ├── order_history.html
│       ├── order_detail.html
│       ├── order_success.html
│       ├── login.html
│       ├── register.html
│       └── search_results.html
├── manage.py
├── populate_db.py
└── requirements.txt
```

## ✨ Функциональность

- 📦 Каталог товаров с фильтрацией и сортировкой
- 🔍 Поиск по товарам
- 🛒 Корзина с AJAX-обновлением
- 💳 Оформление заказа
- 👤 Регистрация и авторизация
- 📋 История заказов
- 🏷️ Система скидок
- 📱 Адаптивный дизайн
- 🔧 Полная админ-панель

## 🛠 Технологии

- Python 3.10+
- Django 4.2
- Bootstrap 5.3
- jQuery 3.7
- Font Awesome 6
- SQLite3
