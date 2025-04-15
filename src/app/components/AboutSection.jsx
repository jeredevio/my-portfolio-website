'use client';

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { SkillsContent } from './tabs/SkillsContent'

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: <SkillsContent />
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
        <section id="about" className='text-white'>
            <div className='md:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image_result.webp" alt="about" width={500} height={500} className='rounded-lg' />
                <div>
                    <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                    <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minus perspiciatis perferendis explicabo quis dignissimos est, omnis a eius minima animi magnam consequuntur eum aperiam molestiae ipsum fugiat voluptate hic. Labore quas voluptates esse enim? Soluta quod unde ea et?</p>

                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} selected={tab === 'skills'}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} selected={tab === 'education'}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} selected={tab === 'certifications'}>Certifications</TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab)?.content}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection;