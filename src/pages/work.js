import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import FeaturedWorkContainer from '@/components/work/FeaturedWorkContainer';
import FeaturedWorkVideoContainer from '@/components/work/FeaturedWorkVideoContainer';
import WorkContainer from '@/components/work/WorkContainer';
import flipbookImagesData from "../components/work/flipbookImagesDataCDN";
import Link from 'next/link';
import contactWork from '../../public/images/svgs/contactWork.svg';

const FramerImage = motion(Image);

const Projects = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisibleHandler = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <Head>
                <title>Ashish Verma | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

            <main className='w-full flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16 bg-dark'>
                    <AnimatedText className="mb-4 lg:!text-7xl sm:my-2 sm:!text-6xl xs:!text-4xl text-white font-Poppins sm:mt-6" text="Photo Albums" />
                    <div className='text-[#28d29f] mb-16 text-sm md:!text-xs lg:!text-xs  sm:text-4xl xs:text-3xl font-semibold text-center'>
                        CLICK ON ANY ALBUM TO SEE ALL PHOTOS
                    </div>
                    <div className='grid grid-cols-12 gap-12 gap-y-16  xl:gap-x-8 lg:gap-x-4 md:gap-y-12 sm:gap-x-0'>

                        <div className='col-span-6 sm:col-span-12'>
                            <WorkContainer
                                link="/work/7"
                                title=""
                                img={flipbookImagesData.projects["project7"][0]}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <WorkContainer
                                link="/work/8"
                                title=""
                                img={flipbookImagesData.projects["project8"][1]}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedWorkContainer
                                title={""}
                                img={flipbookImagesData.projects["project5"][1]}
                                summary={""}
                                link="/work/5"
                            />
                        </div>


                        <div className='col-span-12'>
                            <div className='flex flex-col gap-4'>

                                <div className='text-white font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] dark:text-light'>Video Walkthrough</div>
                                <FeaturedWorkVideoContainer link={"https://www.youtube.com/embed/7DFMj_0wB5s?si=NfQvNRXE6ERbX67q"} />
                            </div>
                        </div>

                        {isVisible && <>
                            <div className='col-span-12'>
                                <FeaturedWorkContainer
                                    link="/work/1"
                                    title={""}
                                    img={flipbookImagesData.projects["project1"][2]}
                                    summary={"Hello"}
                                />
                            </div>

                            <div className='col-span-6 sm:col-span-12'>
                                <WorkContainer
                                    link="/work/6"
                                    title=""
                                    img={flipbookImagesData.projects["project6"][2]}
                                />
                            </div>
                            <div className='col-span-6 sm:col-span-12'>
                                <WorkContainer
                                    link="/work/4"
                                    title=""
                                    img={flipbookImagesData.projects["project4"][2]}
                                />
                            </div>
                        </>}

                    </div>
                    <div className='flex w-full justify-center p-12'>
                        <button className="w-fit flex items-center !bg-light !text-dark p-2.5 px-6 rounded-lg text-md font-semibold hover:!bg-dark hover:!text-light border-2 border-solid border-transparent hover:!border-light dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark md:p-2 md:px-4 md:text-base" onClick={toggleIsVisibleHandler}>
                            {isVisible ? "Load Less" : "Load More"}
                        </button>

                    </div>

                    {/* Connect for more design section*/}

                    <div className='col-span-12'>
                        <article className='w-full flex items-center justify-between relative rounded-3xl border border-solid border-[#2979FF] shadow-xl lg:flex-col xs:rounded-2xl overflow-hidden'>
                            {/* Background Gradient */}
                            <div className='absolute top-0 -z-10 w-[101%] h-[103%] rounded-3xl bg-gradient-to-br from-[#1a1b1b] to-[#2979FF]  sm:h-[102%] xs:w-full xs:rounded-2xl'></div>

                            {/* Left Image Section */}
                            <div className='w-full h-auto max-h-[50vh] xs:max-h-[30vh]'>
                                <Image
                                    src={contactWork}
                                    alt="Contact for designs"
                                    className="w-full h-full object-cover rounded-t-3xl lg:rounded-none lg:rounded-l-3xl"
                                    priority
                                />
                            </div>


                            {/* Right Text Section */}
                            <div className='w-full flex flex-col justify-center p-10 lg:p-8 text-center space-y-6 md:mt-28'>
                                <h2 className='sm:text-[18px] text-[14px]  text-white leading-tight tracking-wider'>
                                    <span className='block md:text-[40px] font-bold sm:text-[30px] xs:text-[30px] text-[30px] mb-2 !tracking-normal '>Discover More Designs</span>
                                    <span className='text-[20px]'>Let’s craft something incredible together!</span>
                                </h2>
                                <Link
                                    href="/contact"
                                    className='inline-block px-8 py-3 rounded-lg text-lg font-medium bg-[#1a1b1b] text-white hover:translate-y-1 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </article>
                    </div>




                </Layout>
            </main>

        </>
    )
}

export default Projects
