import { useState } from 'react'

export default function Demo() {
  const [activeTab, setActiveTab] = useState('home')
  const [cartItems, setCartItems] = useState(2)

  const products = [
    { name: 'HP LaserJet Pro M404dn', price: '24 990 ₽', oldPrice: '29 990 ₽', discount: 17, category: 'Принтеры' },
    { name: 'Epson EcoTank L3250', price: '19 990 ₽', oldPrice: '22 990 ₽', discount: 13, category: 'МФУ' },
    { name: 'Fujitsu ScanSnap iX1600', price: '42 990 ₽', oldPrice: '49 990 ₽', discount: 14, category: 'Сканеры' },
    { name: 'Epson EB-X51', price: '39 990 ₽', oldPrice: '44 990 ₽', discount: 11, category: 'Проекторы' },
  ]

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🖥️ Демо интерфейса
          </h2>
          <p className="text-lg text-gray-600">
            Так будет выглядеть магазин после запуска
          </p>
        </div>

        {/* Browser mockup */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            {/* Browser bar */}
            <div className="bg-gray-100 border-b px-4 py-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-lg px-4 py-1.5 text-sm text-gray-500 flex items-center">
                  <span className="mr-2">🔒</span>
                  http://127.0.0.1:8000/
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b bg-gray-50">
              {[
                { id: 'home', label: '🏠 Главная' },
                { id: 'catalog', label: '📦 Каталог' },
                { id: 'cart', label: '🛒 Корзина' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-white min-h-[500px]">
              {activeTab === 'home' && (
                <div>
                  {/* Navbar */}
                  <div className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between">
                    <span className="font-bold">🖨️ ОргТехМаркет</span>
                    <div className="flex items-center space-x-4 text-sm">
                      <span>Главная</span>
                      <span>Каталог</span>
                      <span>Категории</span>
                      <div className="bg-white/20 rounded px-3 py-1">🔍 Поиск...</div>
                      <span>🛒 <span className="bg-red-500 text-xs px-1.5 rounded-full">{cartItems}</span></span>
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 px-6">
                    <h2 className="text-3xl font-bold mb-3">Оргтехника для вашего офиса</h2>
                    <p className="text-white/80 mb-6">Широкий выбор принтеров, сканеров, МФУ по лучшим ценам</p>
                    <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-bold">Перейти в каталог</button>
                  </div>
                  {/* Products */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">🔥 Специальные предложения</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {products.map((product, i) => (
                        <div key={i} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 rounded h-24 flex items-center justify-center mb-3">
                            <span className="text-3xl">🖨️</span>
                          </div>
                          <h4 className="text-xs font-medium text-gray-800 mb-1 truncate">{product.name}</h4>
                          <div className="flex items-center gap-1">
                            <span className="text-red-500 font-bold text-sm">{product.price}</span>
                            <span className="text-gray-400 text-xs line-through">{product.oldPrice}</span>
                          </div>
                          <span className="inline-block bg-red-100 text-red-700 text-xs px-1.5 py-0.5 rounded mt-1">-{product.discount}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'catalog' && (
                <div className="flex">
                  <div className="w-48 border-r bg-gray-50 p-4">
                    <h4 className="font-bold text-sm mb-3">Категории</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="text-blue-600 font-medium">Все товары</li>
                      <li className="text-gray-600">Принтеры (4)</li>
                      <li className="text-gray-600">МФУ (4)</li>
                      <li className="text-gray-600">Сканеры (3)</li>
                      <li className="text-gray-600">Копиры (2)</li>
                      <li className="text-gray-600">Расходники (4)</li>
                      <li className="text-gray-600">Проекторы (3)</li>
                    </ul>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold mb-4">Все товары <span className="text-gray-400 text-sm">(20)</span></h3>
                    <div className="grid grid-cols-3 gap-4">
                      {products.concat(products).map((product, i) => (
                        <div key={i} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                          <div className="bg-gray-100 rounded h-20 flex items-center justify-center mb-2">
                            <span className="text-2xl">🖨️</span>
                          </div>
                          <h4 className="text-xs font-medium truncate">{product.name}</h4>
                          <p className="text-blue-600 font-bold text-sm">{product.price}</p>
                          <button className="w-full mt-2 bg-blue-600 text-white text-xs py-1.5 rounded">В корзину</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cart' && (
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">🛒 Корзина</h3>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left p-2">Товар</th>
                            <th className="text-left p-2">Цена</th>
                            <th className="text-left p-2">Кол-во</th>
                            <th className="text-left p-2">Сумма</th>
                            <th className="p-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2">HP LaserJet Pro M404dn</td>
                            <td className="p-2">24 990 ₽</td>
                            <td className="p-2">
                              <div className="flex items-center border rounded">
                                <button className="px-2 py-0.5">-</button>
                                <span className="px-2">1</span>
                                <button className="px-2 py-0.5">+</button>
                              </div>
                            </td>
                            <td className="p-2 font-bold">24 990 ₽</td>
                            <td className="p-2 text-red-500 cursor-pointer">🗑️</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2">Бумага Xerox A4 80г</td>
                            <td className="p-2">490 ₽</td>
                            <td className="p-2">
                              <div className="flex items-center border rounded">
                                <button className="px-2 py-0.5">-</button>
                                <span className="px-2">5</span>
                                <button className="px-2 py-0.5">+</button>
                              </div>
                            </td>
                            <td className="p-2 font-bold">2 450 ₽</td>
                            <td className="p-2 text-red-500 cursor-pointer">🗑️</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="w-64 bg-gray-50 rounded-lg p-4 h-fit">
                      <h4 className="font-bold mb-3">Итого</h4>
                      <div className="flex justify-between mb-2 text-sm">
                        <span>Товаров:</span>
                        <span>2 шт.</span>
                      </div>
                      <div className="flex justify-between mb-4 font-bold text-lg">
                        <span>Сумма:</span>
                        <span className="text-blue-600">27 440 ₽</span>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">
                        Оформить заказ
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
