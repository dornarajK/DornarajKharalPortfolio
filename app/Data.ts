import {test} from './img/img'



export interface AboutMeData {
    text: string;
}

export interface JourneyItem {
    title: string;
    period: string;
    description: string;
}
export interface EducationItem {
    title: string;
    period: string;
    description: string;
}

export interface Project {
    kuva: any;
    title: string;
    description: string;
    tech: string[];
    live: string;
    git: string;
}



// * Data
export const aboutMeData: AboutMeData = {
    text: "Moi! I'm Dornaraj, a passionate frontend developer from Nepal, born in June 2005. Currently, I'm pursuing my studies in software development at Business College Helsinki. When I'm not coding, you'll find me watching movies or playing chess. My goal is to become an exceptional software developer and make meaningful contributions to the tech industry."
}



export const journeyData: JourneyItem[] = [
    {
        title: "Frontend Developer",
        period: "2023 - Present",
        description: "Working on various web development projects using React and Next.js"
    },
    {
        title: "Frontend Developer",
        period: "2023 - Present",
        description: "Working on various web development projects using React and Next.js"
    },
]



export const Education: EducationItem[] = [
    {
        title: "Business College Helsinki",
        period: "2023 - Present",
        description: "Software Development"
    },
]



export const projectData: Project[] = [
    {
        kuva: test,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a clean design.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        live: "https://your-portfolio-url.com",
        git: "https://github.com/yourusername/portfolio"
    },
    {
        kuva: test,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        live: "https://your-ecommerce-url.com",
        git: "https://github.com/yourusername/ecommerce"
    },
    {
        kuva: test,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        tech: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
        live: "https://your-taskapp-url.com",
        git: "https://github.com/yourusername/task-manager"
    }

]
