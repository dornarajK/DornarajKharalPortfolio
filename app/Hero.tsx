import Image from "next/image";
import { motion } from 'framer-motion'
import { container, letter } from "./animations/animations";
import Dornaraj from "./img/img";

const text = "Hi, I'm Dornaraj and I'm a Frontend Developer";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] w-full px-4 md:px-8 mt-8 md:mt-12">
      {/* Teksti-osio */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      {/* Kuva-osio */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-[#4E6688]/10">
          <Image
            src={Dornaraj}
            alt="Dornaraj"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
