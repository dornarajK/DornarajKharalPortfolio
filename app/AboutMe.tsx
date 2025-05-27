"use client";
import { motion } from 'framer-motion'
export default function AboutMe(){
    return(
        <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        <h1 className="text-4xl font-bold text-center text-[#4E6688] mb-8">About Me</h1>
        <div className="prose prose-lg text-white/90">
          <p className="text-center leading-relaxed">
           
          </p>
        </div>
      </motion.div>
        </>
    )
}