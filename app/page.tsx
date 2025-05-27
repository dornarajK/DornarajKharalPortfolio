"use client";
import { motion } from 'framer-motion'
import Image from "next/image";
import Hero from "./Hero"
import AboutMe from "./AboutMe"

export default function Home() {
  return (
    <>
    {/* seinä */}
      <motion.section
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block w-[1px] h-full bg-gradient-to-b from-transparent via-[#4E6688]/40 to-transparent absolute left-0 top-0 bottom-0"
      />
       {/* viiva */}
       <motion.section
         initial={{ opacity: 0, scaleX: 0 }}
         animate={{ opacity: 1, scaleX: 1 }}
         transition={{ duration: 1, delay: 0.2 }}
         className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#4E6688]/40 to-transparent my-12"
       />
      <Hero />
      {/* viiva */}
      <motion.section
         initial={{ opacity: 0, scaleX: 0 }}
         animate={{ opacity: 1, scaleX: 1 }}
         transition={{ duration: 1, delay: 0.2 }}
         className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#4E6688]/40 to-transparent my-12"
       />

      <AboutMe />
      
        {/* seinä */}
      <motion.section
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block w-[1px] h-full bg-gradient-to-b from-transparent via-[#4E6688]/40 to-transparent absolute right-0 top-0 bottom-0"
      />

    </>
  );
}
