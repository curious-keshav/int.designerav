import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';


const FeaturedWorkVideoContainer = ({ link, className }) => {
    const FramerImage = motion(Image);
    return (
        <div className={`p-8 md:p-4 lg:p-2 bg-[#2979FF] rounded-lg ${className}`}>
            <article className='w-full h-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl lg:flex-col xs:rounded-2xl xs:rounded-br-3xl '>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-light rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'></div>
                <div className='w-full overflow-hidden rounded-lg lg:w-full' style={{ height: '500px' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="w-full h-full"


                    ></iframe>
                </div>
            </article>

        </div>
    );
};

export default FeaturedWorkVideoContainer




