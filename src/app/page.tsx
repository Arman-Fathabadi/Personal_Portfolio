'use client';

import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-24">
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.h1 
          className="text-5xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi,   I&apos;m Arman Fathabadi   👋
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I develop interactive web applications using modern programming languages 
          <span className="font-semibold text-blue-500"> React, Next.js,</span> and <span className="font-semibold text-blue-500">Node.js</span>.
        </motion.p>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          My special skill is high-performance software design, encompassing attention to detail and user-friendly interfaces.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button href="/projects">Explore My Projects</Button>
        </motion.div>
      </section>
    </main>
  );
}