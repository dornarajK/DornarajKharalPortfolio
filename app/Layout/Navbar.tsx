'use client'
import { Yellowtail } from 'next/font/google';

import { motion, AnimatePresence } from 'framer-motion'

import { useState } from 'react'
import Link from 'next/link'
import { Linkdin, Gmil, Github } from '../Icon/icons'
import { menuVariants, burgerVariants,staggerContainer,staggerItem } from '../animations/animations'


const yellowtail = Yellowtail({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  });

  

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)




    return (
        <div className="flex justify-between items-center h-auto mt-[25px] px-4 relative">
            <div>
            <h1 className={`font-extrabold text-2xl md:text-2xl text-[#4E6688] ${yellowtail.className}`}>Dornarj Kharal</h1>

            </div>

            {/* Desktop Menu */}

            <div
           

                className="hidden md:block">
                <div className="bg-[#4E6688]/20 rounded-full  py-2 px-10 text-center">
                    <ul className="flex gap-7 font-bold text-[13px] text-black">
                        <li className="relative text-white hover: cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">Experience</li>
                        <li className="relative text-white cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">MyProjects</li>



                    </ul>
                </div>
            </div>


            {/* Mobile Menu Button */}

            <motion.button
                className="md:hidden z-50"
                onClick={() => setIsOpen(!isOpen)}
                variants={burgerVariants}
                animate={isOpen ? "open" : "closed"}

            >

                {/* Button open and close style */}
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white  transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-full h-0.5 bg-white  transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </motion.button>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed top-0 right-0 w-[70%] h-screen bg-[#041C32] z-40 pt-20 px-6"
                        initial="closed"
                        animate="open"
                        exit="exit"
                        variants={menuVariants}
                    >
                        <ul className="flex flex-col gap-6 text-[#4E6688] text-xl">
                            <li className="relative text-white hover: cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:w-[100%] after:h-0.5 after:bg-white after:left-0 after:bottom-[-8px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Experience</li>
                            <li className="relative text-white cursor-pointer transition-colors duration-200 after:content-[''] after:absolute after:w-[100%] after:h-0.5 after:bg-white after:left-0 after:bottom-[-8px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">MyProjects</li>
                        </ul>

                        {/* Icons in Mobile*/}
                        <div className=" md:block mt-4 border-[#4E6688]" >
                            <ul className="flex gap-3 mt-1.5 bg-[#4E6688]/20 rounded-full px-4 py-2 ">

                                <Link className='hover:scale-110 transition-transform duration-300' href='https://linkedin.com/in/dornaraj-kharal-905baa322' target="_blank" rel="noopener noreferrer"><Linkdin /></Link>
                                <Link className='hover:scale-110 transition-transform duration-300' href='https://github.com/dornarajK' target="_blank" rel="noopener noreferrer"><Github /></Link>
                                <Link className='hover:scale-110 transition-transform duration-300' href='mailto:dornaraj11@gmail.com'><Gmil /></Link>

                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Icons */}
            <div className="hidden md:block">
                <motion.ul
                    initial="hidden"
                    animate="show"
                   
                    variants={staggerContainer}
                    className="flex gap-3 bg-[#4E6688]/20 rounded-full px-4 py-2"
                >
                    <motion.li variants={staggerItem}>
                        <Link 
                            className='hover:scale-110 transition-transform duration-300' 
                            href='https://linkedin.com/in/dornaraj-kharal-905baa322' 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Linkdin />
                        </Link>
                    </motion.li>
                    <motion.li variants={staggerItem}>
                        <Link 
                            className='hover:scale-110 transition-transform duration-300' 
                            href='https://github.com/dornarajK' 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Github />
                        </Link>
                    </motion.li>
                    <motion.li variants={staggerItem}>
                        <Link 
                            className='hover:scale-110 transition-transform duration-300' 
                            href='mailto:dornaraj11@gmail.com'
                        >
                            <Gmil />
                        </Link>
                    </motion.li>
                </motion.ul>
            </div>
          
        </div>
    )
}