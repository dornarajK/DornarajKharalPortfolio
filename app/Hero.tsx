"use client";
import { Montserrat, Open_Sans } from 'next/font/google';
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, container, letter } from "./animations/animations";
import { Dornaraj } from "./img/img";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const GREETING_TEXT = "Hi, I'm Dornaraj and I'm a Frontend Developer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] w-full px-4 md:px-8 mt-8 md:mt-12">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        variants={container}
        initial="hidden"
        animate="visible"
      >

        <h1
          className={`text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg ${montserrat.className}`}
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          {GREETING_TEXT.split(" ").map((word, index, arr) => {
            const isDevraj = word === "Dornaraj";
            const isFrontendDev = word === "Frontend" || word === "Developer";

            return (
              <motion.span
                key={index}
                variants={letter}
                className={`inline-block ${isDevraj ? "text-[#4E6688]" : isFrontendDev ? "text-[#4E6688]" : ""
                  }`}
              >
                {word}
                {index !== arr.length - 1 && "\u00A0"}
              </motion.span>
            );
          })}
        </h1>
        {/*skill*/}
        <motion.div
          className="flex gap-4 mt-6 justify-center md:justify-start"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            className="text-[#61DAFB] hover:text-[#61DAFB]/80 transition-colors"
          >
            <FaReact className="w-8 h-8" />
            <span className="text-white text-sm">React</span>
          </motion.div>
          <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            className="text-[#06B6D4] hover:text-[#06B6D4]/80 transition-colors"
          >
            <SiTailwindcss className="w-8 h-8" />
            <span className="text-white text-sm">Tailwind</span>
          </motion.div>
          <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            className="text-[#3178C6] hover:text-[#3178C6]/80 transition-colors"
          >
            <SiTypescript className="w-8 h-8" />
            <span className="text-white text-sm">TypeScript</span>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2,
        }}
      >
        <div
          className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-[#4E6688]/10 transition-shadow duration-300"
          style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}
        >
          <Image
            src={Dornaraj}
            alt="Dornaraj Kharal - Frontend Developer"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
            sizes="(max-width: 768px) 280px, 400px"
          />
        </div>

      </motion.div>


    </section>

  );
};

export default Hero;
