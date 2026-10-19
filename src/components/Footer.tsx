export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🖨️</span> ОргТехМаркет
            </h3>
            <p className="text-gray-400 text-sm">
              Полноценный интернет-магазин оргтехники на Django с Bootstrap 5 и AJAX. 
              Учебный проект демонстрирующий все основные аспекты веб-разработки.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Технологии</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🐍 Python 3.10+</li>
              <li>🎯 Django 4.2</li>
              <li>🅱️ Bootstrap 5.3</li>
              <li>⚡ jQuery 3.7 (AJAX)</li>
              <li>🗄️ SQLite3</li>
              <li>🎨 Font Awesome 6</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Статистика проекта</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📊 6 моделей базы данных</li>
              <li>📋 15 представлений (views)</li>
              <li>📄 8+ HTML-шаблонов</li>
              <li>🛒 AJAX-корзина</li>
              <li>👤 Система авторизации</li>
              <li>🔧 Полная админ-панель</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 ОргТехМаркет — Интернет-магазин оргтехники на Django</p>
          <p className="mt-2">Django 4.2 • Bootstrap 5 • AJAX • jQuery • SQLite3</p>
        </div>
      </div>
    </footer>
  )
}
