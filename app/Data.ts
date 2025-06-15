import { Blogify,Focuse,Kalenteri,Boost} from './img/img'



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
    text: "Hello, My name is Dornaraj. I was born in June 2005 and I am originally from Nepal. I live in Helsinki, Finland. I graduated from Business College in May 2025. I enjoy watching YouTube videos, playing all kinds of games, and spending time with my family and friends."
}



export const journeyData: JourneyItem[] = [
    {
        title: "Frontend Developer (Business College Helsinki Work internship)",
        period: "21.1.2025 - 30.5.2025",
        description: "Club Calendar Prototype – React (Internship Project) As part of my internship, I developed a prototype for BC’s club calendar using React and CSS. The project aimed to improve how students find and follow club events by creating a clear, filterable calendar view and club introduction pages. The focus was on usability and student-centered design."
    },
    {
        title: "KT-verkkokauppa 2023 (Work internship)",
        period: "14.08.2923 - 13.10.2023",
        description: "BIOS update and computer functionality check/update"
    },
]



export const Education: EducationItem[] = [
    {
        title: "Business College Helsinki",
        period: "08.2022 - 05.2025",
        description: "Software Development"
    },
]



export const projectData: Project[] = [
    {
        kuva: Kalenteri,
        title: "BC:n Tapahtumakalenteri",
        description: "A user-friendly calendar view built with React and CSS to showcase student club events at BC. Designed to be visually clear, color-coded by club, and easily filterable by event type or tags. Created as part of a frontend internship project.",
        tech: ["React", "CSS"],
        live: "ei",
        git: "ei"
    },
    {
        kuva: Boost,
        title: "BOOST",
        description: "Welcome to the official BOOST Energy Drink website project! This responsive, animated, and visually appealing site showcases different BOOST energy drink flavors with engaging hover effects and animations.",
        tech: ['TypeScript','Next.js','Tailwind CSS', 'Framer-motion'],
        live: "https://boost-energy-drink.vercel.app/",
        git: "https://github.com/dornarajK/BOOST-Energy-Drink"
    },
    {
        kuva: Focuse,
        title: "Focuse on Today",
        description: "Achieve Your Three Key Goals Today",
        tech: ['Javascript ','HTML/CSS'],
        live: "https://dornarajk.github.io/Focuse-on-Today/",
        git: "https://github.com/dornarajK/Focuse-on-Today"
    },
    {
        kuva: Blogify,
        title: "Blogify",
        description: "Express yourself and inspire others with our intuitive blogging app.",
        tech: ["javascript","Node.js", 'Mongodb', "HTML/CSS"],
        live: "https://blogify-0lvg.onrender.com/",
        git: "https://github.com/dornarajK/Blogify"
    },
 
  

]
