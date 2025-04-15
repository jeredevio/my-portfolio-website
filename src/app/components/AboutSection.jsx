'use client';

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import SkillsContent from './tabs/SkillsContent'
import EducationalContent  from './tabs/EducationalContent'

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: <SkillsContent />
    },
    {
        title: "education",
        id: "education",
        content: <EducationalContent />
    }
]

export const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className="max-w-screen-xl mx-auto py-12 md:py-16 px-4 sm:px-8 xl:px-16 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="flex justify-center lg:justify-start mt-16">
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                        <Image
                            src="/images/about-image_result.webp"
                            alt="about"
                            fill
                            className="object-cover rounded-lg contrast-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-xl"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            About Me
                        </h2>
                        <p className="text-base md:text-lg text-gray-300">
                            Passionate about technology and code, I love exploring new languages, tools, and frameworks to create smart, useful, and meaningful digital products. I learn by building, and every line of code brings me closer to the developer I want to become.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-wrap gap-4 justify-start">
                            {TAB_DATA.map((tabItem) => (
                                <TabButton
                                    key={tabItem.id}
                                    selectTab={() => handleTabChange(tabItem.id)}
                                    selected={tab === tabItem.id}
                                >
                                    {tabItem.title}
                                </TabButton>
                            ))}
                        </div>

                        <div className="min-h-[200px] transition-all duration-300">
                            {TAB_DATA.find((t) => t.id === tab)?.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;