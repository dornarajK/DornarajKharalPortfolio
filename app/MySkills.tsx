"use client";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export default function MySkills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const skills = [
        { name: "React", icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
        { name: "JS", icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" /> },
        {
            name: "HTML/CSS", icon: <div className="flex gap-1">
                <FaHtml5 className="w-8 h-8 text-[#E34F26]" />
                <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />
            </div>
        },
    ]

    return (
        <motion.section ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto px-4 py-8">
            <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 }} className="text-3xl font-bold text-center text-[#4E6688] mb-8">
                My Skills
            </motion.h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                    <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-[#4E6688]/5 backdrop-blur-md rounded-lg p-3 hover:bg-[#4E6688]/10 transition-colors duration-300">
                        {skill.icon}
                        <h3 className="text-sm font-medium text-white">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}