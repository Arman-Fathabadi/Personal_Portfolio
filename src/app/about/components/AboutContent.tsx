"use client";

import Image from "next/image";
import Badge from "@/components/Badge";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <main className="container mx-auto px-6 py-24">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[calc(100vh-200px)]">
        {/* 🖼️ Profile Picture - Moved WAY Further Left */}
        <motion.div
          className="md:col-span-3 flex justify-center md:justify-start md:ml-[-150px]" // 🔥 More Left
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-700 shadow-xl">
            <Image
              src="/images/Arman.png"
              alt="Arman Fathabadi"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* About Me Content */}
        <motion.div
          className="md:col-span-9 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            About Me
          </h1>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I&apos;m
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              {" "}
              Arman Fathabadi
            </span>
            , a passionate software developer specializing in web development
            and cloud solutions. I focus on{" "}
            <strong>building high-performance applications</strong> while
            ensuring code quality and scalability.
          </p>

          {/* 🚀 What I Do Section */}
          <h2 className="text-2xl font-semibold mt-8 text-gray-800 dark:text-white">
            What I Do
          </h2>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            I am a{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              full-stack web developer
            </span>{" "}
            who builds
            <strong> high-performance, scalable applications</strong> using
            modern frameworks like <strong>React, Next.js, and Node.js</strong>.
          </p>
          <ul className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
            <li>
              🖥️ <strong>Frontend Development</strong> – Interactive UIs with{" "}
              <strong>React, Next.js, Tailwind CSS</strong>.
            </li>
            <li>
              ⚙️ <strong>Backend Engineering</strong> – Robust APIs with{" "}
              <strong>Node.js, Express.js, PostgreSQL</strong>.
            </li>
            <li>
              ☁️ <strong>Cloud & DevOps</strong> – Deploying apps with{" "}
              <strong>Firebase</strong>, learning <strong>Docker</strong>.
            </li>
            <li>
              🚀 <strong>Performance Optimization</strong> – Debugging with{" "}
              <strong>Chrome DevTools</strong>, best practices with{" "}
              <strong>ESLint</strong>.
            </li>
          </ul>

          {/* 🚀 Hard Skills Section */}
          <h2 className="text-2xl font-semibold mt-8 text-gray-800 dark:text-white">
            Hard Skills
          </h2>
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              "JavaScript",
              "TypeScript",
              "Python",
              "C",
              "C++",
              "Java",
              "Lisp",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "Firebase",
              "Git",
              "GitHub",
              "Tailwind CSS",
              "Framer Motion",
              "Figma",
              "Chrome DevTools",
              "ESLint",
              "Ubuntu",
              "Linux",
              "Arduino",
              "Windows",
              "macOS",
              "Docker (Learning)",
              "MongoDB (Learning)",
            ].map((skill) => (
              <Badge
                key={skill}
                className="hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>

          {/* 💡 Soft Skills Section */}
          <h2 className="text-2xl font-semibold mt-8 text-gray-800 dark:text-white">
            Soft Skills
          </h2>
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              "Problem-Solving",
              "Attention to Detail",
              "Team Collaboration",
              "Adaptability & Continuous Learning",
              "Effective Communication",
              "Time Management",
            ].map((skill) => (
              <Badge
                key={skill}
                className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-gray-200 hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>

          {/* 🛠️ Tools & Technologies Used Section */}
          <h2 className="text-2xl font-semibold mt-8 text-gray-800 dark:text-white">
            Tools & Technologies Used
          </h2>
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {["VS Code", "Linux Terminal", "Visual Studio"].map((tool) => (
              <Badge
                key={tool}
                className="bg-purple-100 dark:bg-purple-700 text-purple-800 dark:text-gray-200 hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                {tool}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
