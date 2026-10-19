import { useState } from 'react'

export default function Installation() {
  const steps = [
    {
      step: 1,
      title: 'Создать виртуальное окружение',
      code: `# Windows
python -m venv venv
venv\\Scripts\\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate`,
      description: 'Активируйте виртуальное окружение для изоляции зависимостей проекта'
    },
    {
      step: 2,
      title: 'Установить зависимости',
      code: 'pip install -r requirements.txt',
      description: 'Установит Django 4.2, Pillow, crispy-forms и другие пакеты'
    },
    {
      step: 3,
      title: 'Выполнить миграции',
      code: `python manage.py makemigrations
python manage.py migrate`,
      description: 'Создаст таблицы базы данных для всех 6 моделей'
    },
    {
      step: 4,
      title: 'Заполнить базу данных',
      code: 'python populate_db.py',
      description: 'Создаст 6 категорий, 20 товаров и суперпользователя admin/admin123'
    },
    {
      step: 5,
      title: 'Запустить сервер',
      code: 'python manage.py runserver',
      description: 'Сервер будет доступен по адресу http://127.0.0.1:8000/'
    },
  ]

  const [copiedStep, setCopiedStep] = useState<number | null>(null)

  const copyCode = (code: string, step: number) => {
    navigator.clipboard.writeText(code)
    setCopiedStep(step)
    setTimeout(() => setCopiedStep(null), 2000)
  }

  return (
    <section id="install" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Инструкция по запуску
          </h2>
          <p className="text-lg text-gray-400">
            5 простых шагов для запуска проекта
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item) => (
            <div key={item.step} className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4 ml-11">{item.description}</p>
                <div className="relative ml-11">
                  <pre className="bg-gray-950 rounded-lg p-4 text-sm text-green-400 overflow-x-auto font-mono">
                    <code>{item.code}</code>
                  </pre>
                  <button
                    onClick={() => copyCode(item.code, item.step)}
                    className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded transition-colors"
                  >
                    {copiedStep === item.step ? '✓ Скопировано' : '📋 Копировать'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final info */}
        <div className="mt-12 bg-gradient-to-r from-green-900/50 to-blue-900/50 rounded-2xl p-8 border border-green-800">
          <h3 className="text-xl font-bold mb-4">✅ После запуска доступно:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="font-medium">Магазин</p>
                <p className="text-sm text-gray-400">http://127.0.0.1:8000/</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔧</span>
              <div>
                <p className="font-medium">Админ-панель</p>
                <p className="text-sm text-gray-400">http://127.0.0.1:8000/admin/</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">👤</span>
              <div>
                <p className="font-medium">Логин</p>
                <p className="text-sm text-gray-400 font-mono">admin</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🔑</span>
              <div>
                <p className="font-medium">Пароль</p>
                <p className="text-sm text-gray-400 font-mono">admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
