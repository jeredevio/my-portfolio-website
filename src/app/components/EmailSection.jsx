'use client';
import React, { useState } from 'react'
import GithubIcon from '../../../public/images/github-icon.svg'
import LinkedinIcon from '../../../public/images/linkedin-icon.svg'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                setEmailSubmitted(true);
                e.target.reset();
            }
        } catch (error) {
            console.error('Erreur:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contact' className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-700 rounded-full h-80 w-80 z-10 blur-2xl absolute top-4/4 md:top-2/4 md:left-4 transform -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
            <div className="z-10">
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to answer your message!
                </p>
                <div className='socials flex flex-row gap-2 mt-4 mb-8'>
                    <Link href='https://github.com/jeredevio'>
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/jeremy-canal-03171922b/'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                    <Link href='https://www.instagram.com/jerecodes_/'>
                        <FaInstagram className="w-11 h-11 text-white hover:text-gray-300" />
                    </Link>
                </div>
            </div>

            <div className="w-full sm:px-12 p-2">
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' type='email' className='text-white block mb-2 text-sm font-medium'>
                            Your Email
                        </label>
                        <input
                            name='email'
                            type='email'
                            placeholder='jeremy@example.com'
                            id='email'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
                            Subject
                        </label>
                        <input
                            name='subject'
                            type='text'
                            placeholder='Just say hi!'
                            id='subject'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
                            Your Email
                        </label>
                        <textarea
                            name='message'
                            placeholder='What would you like to say?'
                            id='message'
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5'
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={isSubmitting}
                        className={`bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 transition text-white font-medium py-2.5 px-5 rounded-lg w-full cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailSection;