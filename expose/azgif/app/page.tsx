"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Menu, X, ChevronDown } from 'lucide-react'

const AzureCloudSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" className="w-16 h-16 mb-4 filter drop-shadow-lg">
    <motion.path 
      d="M77.724 39.625c0-10.342-8.386-18.728-18.728-18.728-7.617 0-14.153 4.553-17.075 11.087-2.92-2.526-6.716-4.064-10.87-4.064-9.187 0-16.634 7.447-16.634 16.634 0 1.23.134 2.427.388 3.578C8.12 49.732 3 55.861 3 63.269c0 8.571 6.946 15.517 15.517 15.517h58.966C86.054 78.786 93 71.84 93 63.269c0-7.408-5.12-13.537-11.805-15.237.254-1.151.388-2.348.388-3.578" 
      fill="rgba(255,255,255,0.9)"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path 
      d="M18.517 78.786h58.966C86.054 78.786 93 71.84 93 63.269c0-7.408-5.12-13.537-11.805-15.237.254-1.151.388-2.348.388-3.578 0-10.342-8.386-18.728-18.728-18.728-7.617 0-14.153 4.553-17.075 11.087-2.92-2.526-6.716-4.064-10.87-4.064-9.187 0-16.634 7.447-16.634 16.634 0 1.23.134 2.427.388 3.578C12.979 54.561 8.12 60.69 8.12 68.098c0 8.571 6.946 15.517 15.517 15.517" 
      fill="#50e6ff"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    />
  </svg>
)

const AzureLightningSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" className="w-16 h-16 mb-4">
    <motion.path 
      d="M71.44 24H49.1L37.76 48h15.92L39.2 72l28.8-36H51.52L71.44 24z" 
      fill="rgba(255,255,255,0.9)"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path 
      d="M24 24h25.1l-11.34 24H24V24zm0 24h13.68L23.2 72 52 36H38.52L24 48v-4z" 
      fill="#50e6ff"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    />
  </svg>
)

const AzureShieldSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" className="w-16 h-16 mb-4">
    <motion.path 
      d="M48 16L20 28v20c0 18.54 12.88 35.89 28 40 15.12-4.11 28-21.46 28-40V28L48 16z" 
      fill="rgba(255,255,255,0.9)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    />
    <motion.path 
      d="M48 16v72c15.12-4.11 28-21.46 28-40V28L48 16z" 
      fill="#50e6ff"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
    />
  </svg>
)

const sections = [
  { id: 'cloud', title: "Cloudstant", icon: AzureCloudSvg, description: "This 2022 GIF exemplifies Yahya's unwavering belief in achieving success through consistent effort as shown by the accompanying quote" },
  { id: 'lightning', title: "BoltOps", icon: AzureLightningSvg, description: "Yahya proves that speed on the cloud is crucial; he achieved in two to three years what many think takes decades or even more." },
  { id: 'shield', title: "Vaultify", icon: AzureShieldSvg, description: "This highlights the power of making the right choices in life. Yahya fully trusts the cloud, believing it will save him—and it has." }
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = ['intro', 'cloud', 'lightning', 'shield']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Header height + padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0078D4]/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
              alt="Azure Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-white font-bold text-lg sm:text-xl">Lucky Azuring</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => scrollTo('intro')}
              className={`text-white hover:text-blue-200 transition-colors ${activeSection === 'intro' ? 'border-b-2 border-white' : ''}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Dashing
            </motion.button>
            {sections.map(({ id, title }) => (
              <motion.button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-white hover:text-blue-200 transition-colors ${activeSection === id ? 'border-b-2 border-white' : ''}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {title}
              </motion.button>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div 
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-[#0078D4]/90 backdrop-blur-sm rounded-b-2xl"
        >
          <div className="px-4 py-2 space-y-2">
            <motion.button
              onClick={() => scrollTo('intro')}
              className="block w-full text-left text-white hover:text-blue-200 transition-colors py-2"
              whileHover={{ x: 10 }}
            >
              Intro
            </motion.button>
            {sections.map(({ id, title }) => (
              <motion.button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left text-white hover:text-blue-200 transition-colors py-2"
                whileHover={{ x: 10 }}
              >
                {title}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link')
    link.type = 'image/svg+xml'
    link.rel = 'icon'
    link.href = 'https://raw.githubusercontent.com/yaya2devops/azdash/refs/heads/main/expose/azgif/app/legend.svg'
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0078D4] via-[#0050B3] to-[#003380]">
      <Header />
      
      <section id="intro" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center sm:text-left">
            <motion.span 
              className="font-extrabold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Yahya
            </motion.span>{' '}
            was in
          </h1>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
          >
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" 
              alt="Microsoft Azure Logo" 
              width={60} 
              height={60}
              className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
            />
          </motion.div>
        </motion.div>
        
        <main className="w-full max-w-6xl mt-8">
          <motion.div 
            className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.02 }}
          >
            {/* Clickable indicator */}
            <motion.div 
              className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/90 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <ChevronDown className="w-5 h-5 text-[#0078D4] animate-bounce" />
              <span className="text-[#0078D4] font-medium">Click the GIF to explore</span>
            </motion.div>

            <a href="https://az-dash.yahya-abulhaj.dev/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="block relative w-full h-full"
               aria-label="Click to view Azure dashboard"
            >
              <Image
                src="https://az-dash.yahya-abulhaj.dev/obj/main%E2%80%94.gif"
                alt="Azure Dashboard"
                fill
                style={{ objectFit: 'cover' }}
                className={`transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'brightness-75 scale-105' : ''}`}
                onLoad={() => setIsLoaded(true)}
                priority
              />
              
              <motion.div 
                initial={false}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/40"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <motion.div 
                  className="flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-5 h-5 text-[#0078D4]" />
                  <span className="text-[#0078D4] font-bold text-sm sm:text-base">View Dashboard</span>
                </motion.div>
              </motion.div>
            </a>
          </motion.div>
        </main>

        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </section>

      {sections.map(({ id, title, icon: Icon, description }, index) => (
        <section 
          key={id}
          id={id}
          className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
        >
          <motion.div 
            className="w-full max-w-6xl bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Icon />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">{description}</p>
          </motion.div>
        </section>
      ))}

      <motion.div 
        className="w-full max-w-6xl mx-auto text-center py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <a href="dash" rel="noopener noreferrer">
          <motion.button
            className="w-full sm:w-auto bg-gradient-to-r from-[#50e6ff] to-[#00b7ff] text-[#003a6c] text-xl font-bold py-5 px-12 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Azure Assets
          </motion.button>
        </a>
      </motion.div>

      <footer className="w-full py-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="text-white">© 2022 Yahya Cloud Ventures, MSFT Azure Powered.</p>
        </div>
      </footer>
    </div>
  )
}