"use client";
import { motion } from 'framer-motion'
import Image from "next/image";

import Viiva from './Components/Viiva';
import Hero from "./Hero"
import AboutMe from "./AboutMe"
import MySkills from './MySkills';
import Journey from './journey';
import MyProjects from './MyProjects'



export default function Home() {
  return (
    <>
      {/* seinä */}
      <motion.section
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block w-[1px] h-full bg-gradient-to-b from-transparent via-[#4E6688]/40 to-transparent absolute left-0 top-0 bottom-0"
        style={{
          backgroundSize: '100% 200%',
          animation: 'scroll 8s linear infinite',
        }}
      />

      <Viiva />
      <Hero />
      <Viiva />
      <AboutMe />
      <Viiva />
      <Journey/>
      
      <Viiva />
      <MySkills />
      <Viiva />
      <MyProjects/>
      <Viiva />


      {/* seinä */}
      <motion.section
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block w-[1px] h-full bg-gradient-to-b from-transparent via-[#4E6688]/40 to-transparent absolute right-0 top-0 bottom-0"
        style={{
          backgroundSize: '100% 200%',
          animation: 'scroll 8s linear infinite',
        }}
      />

      <style jsx global>{`
        @keyframes scroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 200%;
          }
        }
      `}</style>

    </>
  );
}
