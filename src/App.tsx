import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Installation from './components/Installation'
import FileExplorer from './components/FileExplorer'
import Demo from './components/Demo'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <Demo />
        <FileExplorer />
        <Installation />
      </main>
      <Footer />
    </div>
  )
}

export default App
