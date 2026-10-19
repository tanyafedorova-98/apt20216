import { useState } from 'react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Главная', icon: '🏠' },
    { id: 'features', label: 'Возможности', icon: '✨' },
    { id: 'architecture', label: 'Архитектура', icon: '🏗️' },
    { id: 'demo', label: 'Демо', icon: '🖥️' },
    { id: 'files', label: 'Файлы', icon: '📁' },
    { id: 'install', label: 'Установка', icon: '🚀' },
  ]

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🖨️</span>
            <span className="font-bold text-xl">ОргТехМаркет</span>
            <span className="hidden sm:inline-block bg-green-500 text-xs px-2 py-0.5 rounded-full font-medium">Django</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                  activeSection === item.id ? 'bg-white/20' : ''
                }`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => { setActiveSection(item.id); setMobileOpen(false) }}
                className="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
