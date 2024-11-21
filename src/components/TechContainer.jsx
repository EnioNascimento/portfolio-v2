import React from 'react'

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiWordpress,
    DiSass,
} from 'react-icons/di';
import { FaVuejs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import '../styles/components/techcontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "react", name: "React", icon: <DiReact/> },
    { id: "wordpress", name: "Wordpress", icon: <DiWordpress /> },
    { id: "sass", name: "Sass", icon: <DiSass /> },
    { id: "tailwind", name: "Tailwind", icon: <RiTailwindCssFill /> },
    { id: "vue", name: "Vue", icon: <FaVuejs /> },
]

const TechContainer = () => {
    return (
        <section className="tech-container">
            <h2>Tecnologias</h2>
            <div className="tech-grid">
                {technologies.map((tech) => (
                    <div className="tech-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tech-info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eligendi. </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechContainer