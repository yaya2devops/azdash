"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const DashPage = () => {
  const assetPrefix = "https://raw.githubusercontent.com/yaya2devops/azdash/refs/heads/main/";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0078D4] to-[#005a9e] text-white p-4 sm:p-8"
    >
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-white hover:text-[#50e6ff] transition-colors duration-300">
          <h2 className="text-2xl font-bold mb-8">← AZ ⦿ 9000</h2>
        </Link>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-center text-[#50e6ff]">
          Open Up the Power of Personalized Dashboards
        </h2>
        
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Elevate Your Azure Portal Experience</h2>
            <p className="text-lg mb-6">
              Imagine an Azure dashboard that not only welcomes you but ignites your productivity. Our personalized dashboard solution transforms your portal into a powerhouse of efficiency, providing instant access to your most crucial resources and tasks.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl mb-6">
              <Image 
                src={`${assetPrefix}obj/main—.gif`}
                alt="My Main Dash"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-lg mb-4">Key benefits of our custom dashboard:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Real-time metrics and alerts at a glance</li>
              <li>Customizable layout to match your workflow</li>
              <li>Instant access to your most-used Azure resources</li>
              <li>Embedded motivational quotes to keep you inspired</li>
            </ul>
            
            <div className="bg-[#0078D4]/30 rounded-lg p-6 mb-6 border-l-4 border-[#50e6ff]">
              <h3 className="text-xl font-semibold mb-2 text-[#50e6ff]">Featured Motivational Quote</h3>
              <blockquote className="text-lg italic mb-4">
                {`"GET YOUR WORK ON!
                When you live for a strong purpose, then hard work isn't an option. It's a necessity.
                Plus, people might not get all they work for in this world, but they must certainly work for all they get."`}
              </blockquote>
              <p className="text-sm text-right">- Comes from Yahya Experience, Deep-Down.</p>
            </div>

            <p className="text-sm italic text-center">
              Fuel your Azure journey with daily inspiration – our embedded quotes keep you motivated and focused!
            </p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Craft Your Perfect Azure Command Center</h2>
            <p className="mb-6">
              Your Azure experience should be as unique as your projects. Our dashboard creator empowers you to build a tailored interface that speaks to your needs.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl mb-6">
              <Image 
                src={`${assetPrefix}obj/gallery.PNG`}
                alt="Dashboard Gallery"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mb-4">Customize your dashboard;</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Real-time metrics and KPIs</li>
              <li>Personalized tutorial of tech videos</li>
              <li>Custom markdown notes and documentation</li>
              <li>Quick-access links to your favorite Azure services</li>
            </ul>
            <p className="text-lg">The possibilities are endless – create a dashboard that truly works for you!</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-3xl font-semibold mb-4">Streamline Your Workflow</h2>
            <p className="mb-6">
              Why settle for the default when you can have a dashboard that anticipates your needs? Learn how to set your custom dashboard as your default landing page and hit the ground running every time you log in.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl mb-6">
              <Image 
                src={`${assetPrefix}obj/dashdef.gif`}
                alt="Setting Default Dashboard"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mb-4">Benefits of setting a custom default dashboard:</p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Reduced time navigating between Azure services</li>
              <li>Immediate access to critical information upon login</li>
              <li>Increased productivity with a personalized workspace</li>
              <li>Better team alignment with shared custom dashboards</li>
            </ul>
            <p className="text-lg">Maximize your efficiency and never lose sight of what matters most in your Azure environment.</p>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <motion.a 
            href="https://az.ya-ya.tech/A-AZ900#01-motivation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#50e6ff] text-[#003a6c] font-bold py-4 px-10 rounded-full hover:bg-white hover:text-[#0078D4] transition-all duration-300 shadow-lg text-xl sm:text-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(80,230,255,0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            Date the AZ-900
          </motion.a>
          <p className="mt-6 text-lg text-[#50e6ff]">Get a certification of huge potential.</p>
          <p className="mt-2 text-sm">Limitless Innovation – Don&apos;t miss out on Reshape your growth!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DashPage;
