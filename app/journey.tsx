"use client";
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { journeyData, Education } from './Data'


export default function Journey() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div id='experience'
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-4 py-10"
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-center text-[#4E6688] mb-8"
            >
                My Journey
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scaleX: 0, originX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="bg-[#4E6688]/5 backdrop-blur-md rounded-lg p-6"
            >
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-[#4E6688] mb-2">Work Experience</h3>
                    {journeyData.map((item, index) => (
                        <div key={index} className="border-l-2 border-[#4E6688] pl-4">
                            <p className="text-white/90 font-medium">{item.title}</p>
                            <p className="text-white/70 text-sm">{item.period}</p>
                            <p className="text-white/80 mt-2">{item.description}</p>
                        </div>
                    ))}

                    <h3 className="text-xl font-semibold text-[#4E6688] mb-2">Education</h3>
                    {Education.map((item, index) => (
                        <div key={index} className="border-l-2 border-[#4E6688] pl-4">
                            <p className="text-white/90 font-medium">{item.title}</p>
                            <p className="text-white/70 text-sm">{item.period}</p>
                            <p className="text-white/80 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}