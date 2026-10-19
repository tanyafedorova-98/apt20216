export default function Architecture() {
  const models = [
    { name: 'Category', fields: 'name, slug, description, image', icon: '📂', color: 'border-blue-400 bg-blue-50' },
    { name: 'Product', fields: 'name, slug, category, price, stock, image', icon: '📦', color: 'border-green-400 bg-green-50' },
    { name: 'Cart', fields: 'user, session_key, created_at', icon: '🛒', color: 'border-purple-400 bg-purple-50' },
    { name: 'CartItem', fields: 'cart, product, quantity', icon: '🛍️', color: 'border-orange-400 bg-orange-50' },
    { name: 'Order', fields: 'user, name, email, address, status, total', icon: '📋', color: 'border-red-400 bg-red-50' },
    { name: 'OrderItem', fields: 'order, product, price, quantity', icon: '📝', color: 'border-teal-400 bg-teal-50' },
  ]

  const views = [
    { name: 'home', desc: 'Главная страница', type: 'GET' },
    { name: 'product_list', desc: 'Каталог товаров', type: 'GET' },
    { name: 'product_detail', desc: 'Страница товара', type: 'GET' },
    { name: 'category_detail', desc: 'Товары категории', type: 'GET' },
    { name: 'search', desc: 'Поиск товаров', type: 'GET' },
    { name: 'add_to_cart', desc: 'Добавить в корзину', type: 'AJAX' },
    { name: 'remove_from_cart', desc: 'Удалить из корзины', type: 'AJAX' },
    { name: 'update_cart_quantity', desc: 'Изменить количество', type: 'AJAX' },
    { name: 'cart_detail', desc: 'Страница корзины', type: 'GET' },
    { name: 'checkout', desc: 'Оформление заказа', type: 'POST' },
    { name: 'order_success', desc: 'Заказ оформлен', type: 'GET' },
    { name: 'order_history', desc: 'История заказов', type: 'GET' },
    { name: 'order_detail', desc: 'Детали заказа', type: 'GET' },
    { name: 'user_register', desc: 'Регистрация', type: 'POST' },
    { name: 'user_login', desc: 'Вход', type: 'POST' },
  ]

  return (
    <section id="architecture" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🏗️ Архитектура проекта
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            6 моделей данных и 15 представлений для полноценного интернет-магазина
          </p>
        </div>

        {/* Модели */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm mr-3">models.py</span>
            6 моделей базы данных
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model, index) => (
              <div key={index} className={`rounded-xl border-2 p-5 ${model.color}`}>
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{model.icon}</span>
                  <h4 className="font-bold text-gray-900">{model.name}</h4>
                </div>
                <p className="text-sm text-gray-600 font-mono">{model.fields}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Представления */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm mr-3">views.py</span>
            15 представлений
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">№</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Представление</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Описание</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Тип</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {views.map((view, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-sm text-gray-500">{index + 1}</td>
                      <td className="px-6 py-3">
                        <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono text-blue-700">
                          {view.name}
                        </code>
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-600">{view.desc}</td>
                      <td className="px-6 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          view.type === 'AJAX' ? 'bg-yellow-100 text-yellow-800' :
                          view.type === 'POST' ? 'bg-purple-100 text-purple-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {view.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
