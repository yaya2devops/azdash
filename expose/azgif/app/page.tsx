"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Head from 'next/head'

const AzureLogoSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" className="w-15 h-15">
    <path d="M62.6 62.6H0V0h62.6v62.6z" fill="#f25022"/>
    <path d="M133.3 62.6H70.7V0h62.6v62.6z" fill="#7fba00"/>
    <path d="M62.6 133.3H0V70.7h62.6v62.6z" fill="#00a4ef"/>
    <path d="M133.3 133.3H70.7V70.7h62.6v62.6z" fill="#ffb900"/>
  </svg>
)

const AzureCloudSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" className="w-12 h-12 mb-4">
    <path d="M77.724 39.625c0-10.342-8.386-18.728-18.728-18.728-7.617 0-14.153 4.553-17.075 11.087-2.92-2.526-6.716-4.064-10.87-4.064-9.187 0-16.634 7.447-16.634 16.634 0 1.23.134 2.427.388 3.578C8.12 49.732 3 55.861 3 63.269c0 8.571 6.946 15.517 15.517 15.517h58.966C86.054 78.786 93 71.84 93 63.269c0-7.408-5.12-13.537-11.805-15.237.254-1.151.388-2.348.388-3.578" fill="#ffffff"/>
    <path d="M18.517 78.786h58.966C86.054 78.786 93 71.84 93 63.269c0-7.408-5.12-13.537-11.805-15.237.254-1.151.388-2.348.388-3.578 0-10.342-8.386-18.728-18.728-18.728-7.617 0-14.153 4.553-17.075 11.087-2.92-2.526-6.716-4.064-10.87-4.064-9.187 0-16.634 7.447-16.634 16.634 0 1.23.134 2.427.388 3.578C12.979 54.561 8.12 60.69 8.12 68.098c0 8.571 6.946 15.517 15.517 15.517" fill="#50e6ff"/>
  </svg>
)

const AzureLightningSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" className="w-12 h-12 mb-4">
    <path d="M71.44 24H49.1L37.76 48h15.92L39.2 72l28.8-36H51.52L71.44 24z" fill="#ffffff"/>
    <path d="M24 24h25.1l-11.34 24H24V24zm0 24h13.68L23.2 72 52 36H38.52L24 48v-4z" fill="#50e6ff"/>
  </svg>
)

const AzureShieldSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" className="w-12 h-12 mb-4">
    <path d="M48 16L20 28v20c0 18.54 12.88 35.89 28 40 15.12-4.11 28-21.46 28-40V28L48 16z" fill="#ffffff"/>
    <path d="M48 16v72c15.12-4.11 28-21.46 28-40V28L48 16z" fill="#50e6ff"/>
  </svg>
)

export default function Component() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      <Head>
      <link rel="icon" href="/legend.svg" />
      <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gradient-to-br from-[#0078D4] to-[#005a9e] flex flex-col items-center justify-center p-4 sm:p-8"
      >
        <div className="flex items-center justify-center mb-12 space-x-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <span className="font-extrabold" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>Yahya</span> was in
          </h1>
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" 
            alt="Microsoft Azure Logo" 
            width={50} 
            height={50}
            className="w-15 h-15 drop-shadow-[0_4px_6px_rgba(255,255,255,0.9)]"
          />
        </div>

        <main className="w-full max-w-5xl">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-white bg-opacity-10">
            <Image
              src="https://az-dash.yahya-abulhaj.dev/obj/main%E2%80%94.gif"
              alt="Azure-optimized GIF"
              layout="fill"
              objectFit="cover"
              className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => setIsLoaded(true)}
              priority
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
          </div>
        </main>

        <section className="w-full max-w-5xl mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: AzureCloudSvg, title: "Cloud-Consistent", description: "This 2022 GIF exemplifies Yahya's unwavering belief in achieving success through consistent effort as shown by the accompanying quote" },
            { icon: AzureLightningSvg, title: "Lightning Fast", description: "Yahya proves that speed on the cloud is crucial; he achieved in two to three years what many think takes decades or even. more." },
            { icon: AzureShieldSvg, title: "Secure & Reliable", description: "This highlights the power of making the right choices in life. Yahya fully trusts the cloud, believing it will save him—and it has." }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-5 p-6 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <feature.icon />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </motion.div>
          ))}
        </section>

        <div className="w-full max-w-5xl mt-12 text-center">
          <a href="https://az-dash.yahya-abulhaj.dev" target="_blank" rel="noopener noreferrer">
            <motion.button
              className="bg-[#50e6ff] text-[#003a6c] font-bold py-4 px-10 rounded-full shadow-lg hover:bg-white hover:text-[#0078D4] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Singularize the Azure asset!
            </motion.button>
          </a>
        </div>

        <footer className="w-full max-w-5xl text-center mt-12 py-4 bg-white bg-opacity-5 rounded-xl backdrop-blur-sm">
          <p className="text-sm sm:text-base text-white">© 2022 Yahya Cloud Ventures, Microsoft Azure Powered.</p>
        </footer>
      </motion.div>
    </>
  )
}