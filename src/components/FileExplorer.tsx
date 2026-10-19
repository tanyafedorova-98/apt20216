import { useState } from 'react'

interface FileNode {
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
  description?: string
}

const fileTree: FileNode[] = [
  {
    name: 'django_project/',
    type: 'folder',
    children: [
      {
        name: 'config/',
        type: 'folder',
        description: 'Настройки проекта',
        children: [
          { name: '__init__.py', type: 'file', description: 'Инициализация пакета' },
          { name: 'settings.py', type: 'file', description: 'Основные настройки Django' },
          { name: 'urls.py', type: 'file', description: 'Корневой URL-маршрутизатор' },
          { name: 'wsgi.py', type: 'file', description: 'WSGI-конфигурация' },
        ]
      },
      {
        name: 'store/',
        type: 'folder',
        description: 'Основное приложение магазина',
        children: [
          { name: '__init__.py', type: 'file', description: 'Инициализация пакета' },
          { name: 'models.py', type: 'file', description: '6 моделей: Category, Product, Cart, CartItem, Order, OrderItem' },
          { name: 'views.py', type: 'file', description: '15 представлений с AJAX-поддержкой' },
          { name: 'urls.py', type: 'file', description: 'URL-маршруты приложения' },
          { name: 'admin.py', type: 'file', description: 'Настройка админ-панели' },
          { name: 'forms.py', type: 'file', description: 'Формы регистрации и оформления' },
          { name: 'context_processors.py', type: 'file', description: 'Контекст корзины для шаблонов' },
        ]
      },
      {
        name: 'templates/store/',
        type: 'folder',
        description: '8+ HTML-шаблонов',
        children: [
          { name: 'base.html', type: 'file', description: 'Базовый шаблон с навигацией' },
          { name: 'home.html', type: 'file', description: 'Главная страница' },
          { name: 'product_list.html', type: 'file', description: 'Каталог с фильтрами' },
          { name: 'product_detail.html', type: 'file', description: 'Страница товара' },
          { name: 'cart.html', type: 'file', description: 'Корзина с AJAX' },
          { name: 'checkout.html', type: 'file', description: 'Оформление заказа' },
          { name: 'order_history.html', type: 'file', description: 'История заказов' },
          { name: 'login.html', type: 'file', description: 'Страница входа' },
        ]
      },
      { name: 'manage.py', type: 'file', description: 'Утилита управления Django' },
      { name: 'populate_db.py', type: 'file', description: 'Скрипт заполнения БД (6 категорий, 20 товаров)' },
      { name: 'requirements.txt', type: 'file', description: 'Зависимости проекта' },
      { name: 'README.md', type: 'file', description: 'Документация проекта' },
    ]
  }
]

function FileTreeNode({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2)

  if (node.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center w-full text-left py-1 hover:bg-gray-700/50 rounded px-2 transition-colors"
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
        >
          <span className={`mr-2 text-xs transition-transform ${expanded ? 'rotate-90' : ''}`}>▶</span>
          <span className="text-yellow-400 mr-2">📁</span>
          <span className="text-gray-200 font-medium">{node.name}</span>
          {node.description && (
            <span className="ml-2 text-xs text-gray-500">— {node.description}</span>
          )}
        </button>
        {expanded && node.children && (
          <div>
            {node.children.map((child, i) => (
              <FileTreeNode key={i} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className="flex items-center py-1 hover:bg-gray-700/50 rounded px-2 transition-colors"
      style={{ paddingLeft: `${depth * 16 + 8}px` }}
    >
      <span className="mr-2 text-xs">  </span>
      <span className="text-blue-400 mr-2">📄</span>
      <span className="text-gray-300">{node.name}</span>
      {node.description && (
        <span className="ml-2 text-xs text-gray-500">— {node.description}</span>
      )}
    </div>
  )
}

export default function FileExplorer() {
  return (
    <section id="files" className="py-20 bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📁 Структура файлов
          </h2>
          <p className="text-lg text-gray-400">
            Полная структура проекта с описанием каждого файла
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
          <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center">
            <span className="text-yellow-400 mr-2">📂</span>
            <span className="text-gray-300 font-medium">django_project</span>
            <span className="ml-auto text-xs text-gray-500">Django 4.2 Project</span>
          </div>
          <div className="p-4 font-mono text-sm">
            {fileTree.map((node, i) => (
              <FileTreeNode key={i} node={node} />
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Python 3.10+', icon: '🐍', color: 'from-blue-600 to-blue-800' },
            { name: 'Django 4.2', icon: '🎯', color: 'from-green-600 to-green-800' },
            { name: 'Bootstrap 5.3', icon: '🅱️', color: 'from-purple-600 to-purple-800' },
            { name: 'jQuery 3.7', icon: '⚡', color: 'from-blue-500 to-indigo-700' },
          ].map((tech, i) => (
            <div key={i} className={`bg-gradient-to-br ${tech.color} rounded-xl p-4 text-white text-center`}>
              <div className="text-3xl mb-2">{tech.icon}</div>
              <div className="font-bold text-sm">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
