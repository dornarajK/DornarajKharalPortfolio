
export const menuVariants = {
    closed: {
        opacity: 0,
        x: "100%",
        y: "50%",


        transition: {
            duration: 0.3,
            ease: "easeInOut"
        },

    },
    open: {
        opacity: 1,
        x: 0,
        y: 0,


        transition: {
            duration: 0.3,
            ease: "easeInOut"
        },

    },

    exit: {
        opacity: 0,
        x: '100%',
        y: 0,


        transition: {
            duration: 0.3,
            ease: "easeInOut"
        },

    },
}

export const burgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },

}



export const staggerContainer = {
    hidden: { 
        opacity: 0,
        scale: 0.8
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.3, 
            when: "beforeChildren" 
        }
    }
}

export const staggerItem = {
    hidden: { 
        opacity: 0,
        y: 50, 
        scale: 0.8
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80, 
            damping: 12, 
            duration: 0.8
        }
    }
}


// * Hero animation Text
export const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07, 
        delayChildren: 0.2,   
        when: "beforeChildren", 
      },
    },
  };
  
  export const letter = {
    hidden: { y: 40, opacity: 0 }, 
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,       
        ease: [0.4, 0, 0.2, 1], 
      },
    },
  };
  