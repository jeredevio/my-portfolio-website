import React from 'react'
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiC,
    SiPython,
    SiGit,
    SiGithub,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
} from "react-icons/si";

const SKILLS = [
    { name: "HTML", icon: <SiHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 size={40} className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" /> },
    { name: "React", icon: <SiReact size={40} className="text-cyan-300" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
    { name: "C", icon: <SiC size={40} className="text-blue-300" /> },
    { name: "Python", icon: <SiPython size={40} className="text-yellow-300" /> },
    { name: "Git", icon: <SiGit size={40} className="text-orange-600" /> },
    { name: "GitHub", icon: <SiGithub size={40} className="text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} className="text-green-500" /> },
    { name: "Express", icon: <SiExpress size={40} className="text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-500" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-400" /> },
];

export const SkillsContent = () => {
    return (
        <div className='grid grid-cols-4 lg:grid-cols-5 gap-6 mt-10'>
            {SKILLS.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                    {skill.icon}
                    <p className="mt-2 text-sm sm:text-base">{skill.name}</p>
                </div>
            ))}
        </div>
    )
}

export default SkillsContent;