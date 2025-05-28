"use client";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {aboutMeData} from './Data'

export default function AboutMe() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
                className="max-w-4xl mx-auto px-4 py-12"
            >
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl font-bold text-center text-[#4E6688] mb-8"
                >
                    About Me
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="prose prose-lg text-white/90 bg-[#4E6688]/5 backdrop-blur-md rounded-lg p-8 shadow-lg hover:bg-[#4E6688]/10 transition-colors duration-300"
                >
                    <p className="text-center leading-relaxed max-w-2xl mx-auto">
                        {aboutMeData.text}
                    </p>
                </motion.div>
            </motion.div>
        </>
    )
}