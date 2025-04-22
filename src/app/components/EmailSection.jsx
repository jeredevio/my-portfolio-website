import React from 'react'
import GithubIcon from '../../../public/images/github-icon.svg'
import LinkedinIcon from '../../../public/images/linkedin-icon.svg'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="flex flex-col">
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to answer your message!
                </p>
                <div className='socials flex flex-row gap-2 mt-4'>
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

            <div className="w-full">
                <form className='flex flex-col gap-4'>
                    <label htmlFor='email' type='email' className='text-white block mb-2 text-sm font-medium'>
                        Your Email
                    </label>
                    <input
                        type='email'
                        placeholder='jeremy@example.com'
                        id='email'
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5'
                        required
                    />
                </form>
            </div>
        </section>
    )
}

export default EmailSection;