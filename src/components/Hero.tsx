export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-green-300 mr-2">●</span>
            <span className="text-sm text-white/90">Django 4.2 + Bootstrap 5 + AJAX</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            🖨️ Интернет-магазин
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              оргтехники
            </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Полноценный веб-проект с бэкендом на Django (6 моделей, 15 представлений, админ-панель), 
            фронтендом на Bootstrap 5 (8 шаблонов, адаптивный дизайн) и AJAX-запросами для корзины
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm text-white/70">Моделей</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-white/70">Представлений</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-sm text-white/70">Шаблонов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 text-white">
              <div className="text-2xl font-bold">20</div>
              <div className="text-sm text-white/70">Товаров в БД</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="#install" className="bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
              🚀 Инструкция по запуску
            </a>
            <a href="#demo" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">
              🖥️ Демо интерфейса
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
