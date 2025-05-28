"use client";
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Viiva(){
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return(
        <motion.section
            ref={ref}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#4E6688]/40 to-transparent my-12"
        />
    )
}