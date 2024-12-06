"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';

const DashPage = () => {
  const assetPrefix = "https://raw.githubusercontent.com/yaya2devops/azdash/refs/heads/main/";

  useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'https://raw.githubusercontent.com/yaya2devops/azdash/refs/heads/main/expose/azgif/app/legend.svg';
    document.head.appendChild(link);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#0078D4] via-[#0050B3] to-[#003380] text-white p-4 sm:p-8"
    >
      <div className="max-w-6xl mx-auto">
        <Link href="/">
          <motion.div 
            className="flex items-center space-x-2 text-white hover:text-[#50e6ff] transition-all duration-300 mb-8"
            whileHover={{ x: -10 }}
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-2xl font-bold">AZ ⦿ 9000</span>
          </motion.div>
        </Link>

        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-[#50e6ff] bg-clip-text text-transparent"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Open Up the Power of Personalized Dashboards
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#50e6ff]">Elevate Your Azure Portal Experience</h2>
            <p className="text-lg text-blue-100 mb-6">
              Imagine an Azure dashboard that not only welcomes you but ignites your productivity. Our personalized dashboard solution transforms your portal into a powerhouse of efficiency, providing instant access to your most crucial resources and tasks.
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
              <Image 
                src={`${assetPrefix}obj/main—.gif`}
                alt="My Main Dash"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-lg text-blue-100 mb-4">Key benefits of our custom dashboard:</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-blue-100">
              <li>Real-time metrics and alerts at a glance</li>
              <li>Customizable layout to match your workflow</li>
              <li>Instant access to your most-used Azure resources</li>
              <li>Embedded motivational quotes to keep you inspired</li>
            </ul>
            
            <motion.div 
              className="bg-[#0078D4]/30 rounded-lg p-6 mb-6 border-l-4 border-[#50e6ff]"
              whileHover={{ x: 10 }}
            >
              <h3 className="text-xl font-bold mb-2 text-[#50e6ff]">Featured Motivational Quote</h3>
              <blockquote className="text-lg italic mb-4 text-blue-100">
                &ldquo;GET YOUR WORK ON!
                When you live for a strong purpose, then hard work isn&apos;t an option. It&apos;s a necessity.
                Plus, people might not get all they work for in this world, but they must certainly work for all they get.&rdquo;
              </blockquote>
              <p className="text-sm text-blue-200 text-right">- Comes from Yahya Experience, Deep-Down.</p>
            </motion.div>

            <p className="text-sm italic text-center text-blue-200">
              Fuel your Azure journey with daily inspiration – our embedded quotes keep you motivated and focused!
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#50e6ff]">Craft Your Perfect Azure Command Center</h2>
            <p className="text-lg text-blue-100 mb-6">
              Your Azure experience should be as unique as your projects. Our dashboard creator empowers you to build a tailored interface that speaks to your needs.
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
              <Image 
                src={`${assetPrefix}obj/gallery.PNG`}
                alt="Dashboard Gallery"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-lg text-blue-100 mb-4">Customize your dashboard:</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-blue-100">
              <li>Real-time metrics and KPIs</li>
              <li>Personalized tutorial of tech videos</li>
              <li>Custom markdown notes and documentation</li>
              <li>Quick-access links to your favorite Azure services</li>
            </ul>
            <p className="text-lg text-blue-100">The possibilities are endless – create a dashboard that truly works for you!</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#50e6ff]">Streamline Your Workflow</h2>
            <p className="text-lg text-blue-100 mb-6">
              Why settle for the default when you can have a dashboard that anticipates your needs? Learn how to set your custom dashboard as your default landing page and hit the ground running every time you log in.
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
              <Image 
                src={`${assetPrefix}obj/dashdef.gif`}
                alt="Setting Default Dashboard"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="text-lg text-blue-100 mb-4">Benefits of setting a custom default dashboard:</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-blue-100">
              <li>Reduced time navigating between Azure services</li>
              <li>Immediate access to critical information upon login</li>
              <li>Increased productivity with a personalized workspace</li>
              <li>Better team alignment with shared custom dashboards</li>
            </ul>
            <p className="text-lg text-blue-100">Maximize your efficiency and never lose sight of what matters most in your Azure environment.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            href="https://az.ya-ya.tech/A-AZ900#01-motivation" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#50e6ff] to-[#00b7ff] text-[#003a6c] font-bold py-5 px-12 rounded-full shadow-lg text-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(80,230,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Date the AZ-900</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="mt-6 text-lg bg-gradient-to-r from-white to-[#50e6ff] bg-clip-text text-transparent font-bold">
              Get a certification of huge potential
            </p>
            <p className="mt-2 text-sm text-blue-200">
              Limitless Innovation – Don&apos;t miss out & Reshape your growth!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashPage;