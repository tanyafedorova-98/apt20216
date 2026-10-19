export default function Features() {
  const features = [
    {
      icon: '🛒',
      title: 'Корзина с AJAX',
      description: 'Добавление, удаление и изменение количества товаров без перезагрузки страницы через jQuery AJAX',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      icon: '🔍',
      title: 'Поиск и фильтры',
      description: 'Полнотекстовый поиск по товарам, фильтрация по категориям, сортировка по цене и дате',
      color: 'bg-green-50 border-green-200'
    },
    {
      icon: '💳',
      title: 'Оформление заказа',
      description: 'Полноценная форма оформления с валидацией, выбором оплаты и подтверждением',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      icon: '👤',
      title: 'Авторизация',
      description: 'Регистрация, вход, история заказов, личный кабинет пользователя',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      icon: '📱',
      title: 'Адаптивный дизайн',
      description: 'Bootstrap 5 обеспечивает идеальное отображение на всех устройствах от мобильных до десктопов',
      color: 'bg-pink-50 border-pink-200'
    },
    {
      icon: '🔧',
      title: 'Админ-панель',
      description: 'Полная настройка Django Admin для управления товарами, заказами, категориями',
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      icon: '🏷️',
      title: 'Система скидок',
      description: 'Поддержка старых и новых цен, автоматический расчёт процента скидки',
      color: 'bg-red-50 border-red-200'
    },
    {
      icon: '📦',
      title: 'Управление складом',
      description: 'Учёт остатков, автоматическое снижение при заказе, отметка «нет в наличии»',
      color: 'bg-teal-50 border-teal-200'
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ✨ Возможности проекта
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полнофункциональный интернет-магазин с современным стеком технологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-2xl border p-6 ${feature.color} hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
