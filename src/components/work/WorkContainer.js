import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CldImage } from 'next-cloudinary';


const WorkContainer = ({ title, img, link="/" }) => {
    const FramerImage = motion(Image);

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl  border border-solid border-[#1a1b1b] bg-[#1a1b1b]  relative dark:bg-dark dark:border-light max-h-[20rem]' >
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-light rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'></div>
            <Link href={link}  className='w-full cursor-pointer overflow-hidden rounded-lg' >
                <CldImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} width={4080}         height={2640} />
            </Link>
        </article>
    );
};

export default WorkContainer
