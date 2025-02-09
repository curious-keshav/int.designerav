import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';


const FeaturedWorkContainer = ({ title, img, link = "/" }) => {
    const FramerImage = motion(Image);

    return (
        <article className='w-full flex items-center justify-between relative  rounded-3xl rounded-br-2xl border border-solid border-[#1a1b1b]  dark:bg-dark dark:border-light shadow-2xl lg:flex-col  xs:rounded-2xl xs:rounded-br-3xl '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-white rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'></div>
            <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg lg:w-full' >
                <FramerImage src={img} alt={title} className='w-full h-auto rounded-xl' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw' width={4080}
                    height={2640} />
            </Link>
        </article>
    );
};


export default FeaturedWorkContainer


