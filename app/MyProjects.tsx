"use client";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projectData } from './Data'

export default function MyProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="myprojects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#4E6688]"
      >
        My Projects
      </motion.h2>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#4E6688]/50 transition-all duration-300"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={project.kuva}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-[#4E6688] group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#4E6688]/20 text-[#4E6688] rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <Link
                    href={project.live}
                    target="_blank"
                    className="block w-full px-4 py-2.5 bg-[#4E6688] hover:bg-[#4E6688]/80 text-white rounded-xl text-center transition-all font-medium shadow-lg hover:shadow-xl group-hover:bg-white group-hover:text-[#4E6688]"
                  >
                    Live Demo
                  </Link>
                </div>
                <div className="flex-1">
                  <Link
                    href={project.git}
                    target="_blank"
                    className="block w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-center transition-all font-medium shadow-lg hover:shadow-xl group-hover:bg-white/30"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
