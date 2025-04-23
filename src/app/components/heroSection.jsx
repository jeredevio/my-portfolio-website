import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const HeroSection = () => {
    return (
        <section className='w-full max-w-screen-xl mx-auto px-10 sm:px-8 md:px-12 py-4'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>

                    <h1 className='text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-700'>Hello, I'm{" "}</span>
                        Jeremy</h1>
                    <p className='text-[#ADB5BD] text-base sm:text-lg lg:text-xl mb-8'>Self-taught developer exploring every stack I can get my hands on.</p>
                    <div className="flex flex-row justify-center sm:justify-start gap-x-4">
                        {/* Primary Button */}
                        <button className="px-6 py-3 w-fit rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 hover:from-cyan-500 hover:to-blue-800 text-white font-medium transition">
                            <Link href="#contact">Hire Me</Link>
                        </button>

                        {/* Secondary Button */}
                        <button className="px-[2px] py-[2px] w-fit rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 transition">
                            <span className="block bg-[#121212] text-white px-6 py-3 rounded-full hover:bg-neutral-900 transition font-medium">
                                Download CV
                            </span>
                        </button>
                    </div>


                </div>
                <div className="col-span-5 place-self-center mt-10 lg:mt-0">
                    <div className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#1c1e20] sm:translate-x-8">
                        <Image
                            src="/images/home-avatar.png"
                            alt="hero"
                            height={300}
                            width={300}
                            quality={100}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
};

export default HeroSection;
