import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-2.jpeg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}> </span>;
};

const about = () => {
    return (
        <>
            <Head>
                <title>Ashish Verma | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light bg-[#1a1b1b]">
                <Layout className="!pt-12">
                    <AnimatedText
                        text="Passion Fuels Purpose!"
                        className="mb-16 lg:!text-xl sm:!text-4xl xs:!text-2xl sm:mb-8 text-white"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 text-white">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-light/75">Biography</h2>
                            <p className="font-medium">
                                - I am a passionate and detail-oriented interior designer with over 7 years of experience in transforming spaces into functional, aesthetically pleasing environments. My expertise lies in space planning, computer-aided design (CAD), and 3D rendering to bring concepts to life. I thrive on creating innovative designs that blend creativity and practicality, ensuring each project aligns with client visions and expectations.
                            </p>
                            <p className="font-medium">
                                - With a strong track record in residential and commercial walkthroughs, I collaborate seamlessly with clients, architects, and contractors to deliver outstanding results. My expertise in AutoCAD, SketchUp, Lumion, and Photoshop.
                            </p>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-light bg-dark p-8 dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light"></div>
                            <Image
                                src={profilePic}
                                alt="Keshav"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumber value={60} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Clients Served
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumber value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    Walkthroughs
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumber value={7} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
