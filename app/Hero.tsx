"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { container, letter } from "./animations/animations";
import Dornaraj from "./img/img";

const GREETING_TEXT = "Hi, I'm Dornaraj and I'm a Frontend Developer";

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
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
  {GREETING_TEXT.split(" ").map((word, index, arr) => {
    const isDevraj = word === "Dornaraj";
    const isFrontendDev = word === "Frontend" || word === "Developer";

    return (
      <motion.span
        key={index}
        variants={letter}
        className={`inline-block ${
          isDevraj ? "text-blue-500" : isFrontendDev ? "text-green-500" : ""
        }`}
      >
        {word}
        {/* Lisää välilyönti, paitsi viimeisen sanan jälkeen */}
        {index !== arr.length - 1 && "\u00A0"}
      </motion.span>
    );
  })}
</h1>

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
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-[#4E6688]/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
