#!/usr/bin/env python
"""
Скрипт для заполнения базы данных тестовыми данными.
Запуск: python populate_db.py
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.contrib.auth.models import User
from store.models import Category, Product


def populate():
    print("Начинаем заполнение базы данных...")

    # Создание суперпользователя
    if not User.objects.filter(username='admin').exists():
        User.objects.create_superuser('admin', 'admin@orgtech.ru', 'admin123')
        print("✓ Создан суперпользователь: admin / admin123")
    else:
        print("✓ Суперпользователь уже существует")

    # Категории
    categories_data = [
        {
            'name': 'Принтеры',
            'slug': 'printery',
            'description': 'Лазерные и струйные принтеры для дома и офиса'
        },
        {
            'name': 'МФУ',
            'slug': 'mfu',
            'description': 'Многофункциональные устройства 3 в 1'
        },
        {
            'name': 'Сканеры',
            'slug': 'skanery',
            'description': 'Планшетные и протяжные сканеры'
        },
        {
            'name': 'Копиры',
            'slug': 'kopiry',
            'description': 'Копировальные аппараты для больших объёмов'
        },
        {
            'name': 'Расходные материалы',
            'slug': 'rashodnye-materialy',
            'description': 'Картриджи, тонеры, бумага и другие расходники'
        },
        {
            'name': 'Проекторы',
            'slug': 'proektory',
            'description': 'Проекторы для презентаций и домашнего кинотеатра'
        },
    ]

    categories = {}
    for cat_data in categories_data:
        category, created = Category.objects.get_or_create(
            slug=cat_data['slug'],
            defaults=cat_data
        )
        categories[cat_data['slug']] = category
        if created:
            print(f"✓ Категория создана: {category.name}")

    # Товары
    products_data = [
        # Принтеры
        {
            'name': 'HP LaserJet Pro M404dn',
            'slug': 'hp-laserjet-pro-m404dn',
            'category': 'printery',
            'description': 'Лазерный принтер формата A4, скорость печати до 38 стр/мин, двусторонняя печать, сетевой интерфейс. Идеален для малого и среднего офиса.',
            'price': 24990,
            'old_price': 29990,
            'stock': 15,
        },
        {
            'name': 'Canon i-SENSYS LBP6030B',
            'slug': 'canon-i-sensys-lbp6030b',
            'category': 'printery',
            'description': 'Компактный лазерный принтер для дома и небольшого офиса. Скорость печати 18 стр/мин, быстрый выход первой страницы.',
            'price': 12990,
            'old_price': None,
            'stock': 25,
        },
        {
            'name': 'Epson L8050',
            'slug': 'epson-l8050',
            'category': 'printery',
            'description': '6-цветный струйный фотопринтер с СНПБ. Печать фотографий формата A4 с превосходным качеством. Экономичная печать.',
            'price': 34990,
            'old_price': 39990,
            'stock': 8,
        },
        {
            'name': 'Brother HL-L2352DR',
            'slug': 'brother-hl-l2352dr',
            'category': 'printery',
            'description': 'Лазерный принтер с автоматической двусторонней печатью. Скорость 30 стр/мин, увеличенный ресурс картриджа.',
            'price': 16990,
            'old_price': None,
            'stock': 20,
        },
        # МФУ
        {
            'name': 'HP LaserJet Pro MFP M428fdw',
            'slug': 'hp-laserjet-pro-mfp-m428fdw',
            'category': 'mfu',
            'description': 'МФУ 4 в 1: печать, сканирование, копирование, факс. Wi-Fi, Ethernet, автоматическая двусторонняя печать. Скорость 38 стр/мин.',
            'price': 39990,
            'old_price': 45990,
            'stock': 10,
        },
        {
            'name': 'Canon i-SENSYS MF269dw',
            'slug': 'canon-i-sensys-mf269dw',
            'category': 'mfu',
            'description': 'Чёрно-белое лазерное МФУ с Wi-Fi. Печать, сканирование, копирование, факс. Двусторонняя печать и автоподатчик.',
            'price': 28990,
            'old_price': None,
            'stock': 12,
        },
        {
            'name': 'Epson EcoTank L3250',
            'slug': 'epson-ecotank-l3250',
            'category': 'mfu',
            'description': 'Струйное МФУ с СНПБ. Экономичная печать до 4500 страниц на одном комплекте чернил. Wi-Fi для беспроводной печати.',
            'price': 19990,
            'old_price': 22990,
            'stock': 18,
        },
        {
            'name': 'Brother DCP-L2520DR',
            'slug': 'brother-dcp-l2520dr',
            'category': 'mfu',
            'description': 'Лазерное МФУ 3 в 1 с автоматической двусторонней печатью. Скорость 26 стр/мин, увеличенный ресурс картриджа.',
            'price': 21990,
            'old_price': None,
            'stock': 14,
        },
        # Сканеры
        {
            'name': 'Fujitsu ScanSnap iX1600',
            'slug': 'fujitsu-scansnap-ix1600',
            'category': 'skanery',
            'description': 'Быстрый документ-сканер с Wi-Fi. Сенсорный экран 4.3", скорость до 40 стр/мин. Идеален для оцифровки документов.',
            'price': 42990,
            'old_price': 49990,
            'stock': 6,
        },
        {
            'name': 'Epson Perfection V39',
            'slug': 'epson-perfection-v39',
            'category': 'skanery',
            'description': 'Компактный планшетный сканер для дома и офиса. Разрешение 4800 dpi, USB-питание, сканирование за 10 секунд.',
            'price': 7990,
            'old_price': None,
            'stock': 30,
        },
        {
            'name': 'Canon CanoScan LiDE 400',
            'slug': 'canon-canoscan-lide-400',
            'category': 'skanery',
            'description': 'Тонкий планшетный сканер с высоким разрешением 4800 dpi. USB Type-C, автоматическое сканирование документов и фотографий.',
            'price': 9990,
            'old_price': 11990,
            'stock': 22,
        },
        # Копиры
        {
            'name': 'Ricoh IM C3010',
            'slug': 'ricoh-im-c3010',
            'category': 'kopiry',
            'description': 'Цветной копир формата A3. Скорость 30 стр/мин, встроенный дуплекс, сетевой интерфейс. Для больших офисов.',
            'price': 189990,
            'old_price': 219990,
            'stock': 3,
        },
        {
            'name': 'Canon imageRUNNER C3530i',
            'slug': 'canon-imagerunner-c3530i',
            'category': 'kopiry',
            'description': 'Цветной цифровой копир/МФУ формата A3. 30 стр/мин, сенсорная панель управления, расширенные функции безопасности.',
            'price': 245990,
            'old_price': None,
            'stock': 2,
        },
        # Расходные материалы
        {
            'name': 'Картридж HP 58A (CF258A)',
            'slug': 'kartridzh-hp-58a-cf258a',
            'category': 'rashodnye-materialy',
            'description': 'Оригинальный лазерный картридж HP 58A. Ресурс ~3000 страниц. Совместим с HP LaserJet Pro M404/M428.',
            'price': 8990,
            'old_price': None,
            'stock': 50,
        },
        {
            'name': 'Картридж Canon 725 (725A)',
            'slug': 'kartridzh-canon-725',
            'category': 'rashodnye-materialy',
            'description': 'Оригинальный картридж Canon 725. Ресурс ~1600 страниц. Для Canon i-SENSYS LBP6000/6030/MF210.',
            'price': 5490,
            'old_price': 6490,
            'stock': 40,
        },
        {
            'name': 'Бумага Xerox Performer A4 80г',
            'slug': 'bumaga-xerox-performer-a4-80g',
            'category': 'rashodnye-materialy',
            'description': 'Офисная бумага формата A4, плотность 80 г/м². 500 листов в пачке. Белизна 95%. Для всех типов принтеров.',
            'price': 490,
            'old_price': None,
            'stock': 200,
        },
        {
            'name': 'Набор чернил Epson 103 (6 цветов)',
            'slug': 'nabor-chernil-epson-103',
            'category': 'rashodnye-materialy',
            'description': 'Оригинальный набор чернил Epson 103 для EcoTank. 6 флаконов по 70мл. Ресурс до 7500 цветных страниц.',
            'price': 4990,
            'old_price': 5990,
            'stock': 35,
        },
        # Проекторы
        {
            'name': 'Epson EB-X51',
            'slug': 'epson-eb-x51',
            'category': 'proektory',
            'description': 'Проектор для презентаций XGA (1024x768). Яркость 3800 люмен, контрастность 15000:1. HDMI, USB, Wi-Fi опционально.',
            'price': 39990,
            'old_price': 44990,
            'stock': 7,
        },
        {
            'name': 'BenQ MH733',
            'slug': 'benq-mh733',
            'category': 'proektory',
            'description': 'Full HD проектор для бизнеса и образования. 4000 люмен, контрастность 20000:1, 2x HDMI. Вертикальный сдвиг линзы.',
            'price': 69990,
            'old_price': None,
            'stock': 5,
        },
        {
            'name': 'XGIMI Horizon Pro',
            'slug': 'xgimi-horizon-pro',
            'category': 'proektory',
            'description': '4K лазерный проектор для домашнего кинотеатра. 2200 ANSI люмен, встроенный Harman/Kardon, Android TV.',
            'price': 119990,
            'old_price': 139990,
            'stock': 4,
        },
    ]

    for prod_data in products_data:
        category = categories[prod_data.pop('category')]
        product, created = Product.objects.get_or_create(
            slug=prod_data['slug'],
            defaults={**prod_data, 'category': category}
        )
        if created:
            print(f"✓ Товар создан: {product.name} — {product.price} ₽")

    print(f"\n{'='*50}")
    print(f"База данных успешно заполнена!")
    print(f"Категорий: {Category.objects.count()}")
    print(f"Товаров: {Product.objects.count()}")
    print(f"{'='*50}")
    print(f"\nДанные для входа в админ-панель:")
    print(f"URL: http://127.0.0.1:8000/admin/")
    print(f"Логин: admin")
    print(f"Пароль: admin123")


if __name__ == '__main__':
    populate()
