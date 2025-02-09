import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import profile1 from "../../public/images/articles/leetcode.png"
import profile2 from "../../public/images/articles/codeforces.png"
import profile3 from "../../public/images/articles/codechef.png"
import profile4 from "../../public/images/articles/hackerrank.png"
// import hackathon from "../../public/images/articles/hackathon.png"
// import star5 from "../../public/images/articles/5star.png"
// import flipkart from "../../public/images/articles/flipkart.png"
// import quark1 from "../../public/images/articles/quark.png"
// import quark2 from "../../public/images/articles/quark2.png"
// import dean from "../../public/images/articles/dean.png"
// import googleitsupport from "../../public/images/articles/googleitsupport.png"
// import virasat from "../../public/images/articles/virasat.png"
// import gait from "../../public/images/articles/gait.png"

import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='captialize text-xl font-semibold hover:underline '>{title}</h2>
            <FramerImage style={{ x: x, y: y }} initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.3 } }} ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' priority sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw' />
        </Link>
    )
}

const FeaturedAchievement = ({ img, title, time, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-[#1a1b1b] dark:text-light dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-[#1a1b1b] rounded-br-3xl'></div>

            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg inline-block ' >
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw' />
            </Link>
            <Link href={link} target='_blank'  >
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}

const NormalAchievements = ({ img, title, date, link }) => {
    return (
        <motion.li initial={{ y: 100 }} whileInView={{ y: 0, transition: { duration: 1.2, ease: "easeInOut" } }} viewport={{ once: true }} className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col '>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}
const Achievement = () => {
    return (
        <>
            <Head>
                <title> Ashish Verma | Achievement Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Empowering Dreams, Achieving Heights!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className=' grid grid-cols-4 gap-12 md:grid-cols-1 lg:gap-8 md:gap-y-16'>

                        <FeaturedAchievement
                            img={profile1}
                            title="Leetcode Profile"
                            time="400+ Problems Solved"
                            link="https://leetcode.com/keshavverma532/"
                            summary="@keshavverma532   @codewithkeshav"
                        />
                        <FeaturedAchievement
                            img={profile2}
                            title="CodeForces Profile"
                            time="Max. Rating 1200"
                            link="https://codeforces.com/profile/curious_keshav"
                            summary="@curious_keshav"
                        />
                        <FeaturedAchievement
                            img={profile3}
                            title="CodeChef Profile"
                            time="Max. Rating 1484"
                            link="https://www.codechef.com/users/codekeshav"
                            summary="@codekeshav"
                        />
                        <FeaturedAchievement
                            img={profile4}
                            title="HackerRank Profile"
                            time="5* in CPP and Python"
                            link="https://www.hackerrank.com/curious_keshav51?hr_r=1"
                            summary="@curious_keshav51"
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Achievements</h2>

                    <ul>
                        <NormalAchievements
                            title={"Achieved 2nd place out of 42 teams in the Ultra Hacx hackathon"}
                            // img={hackathon}
                            date={"November, 2022"}
                            link={"https://www.linkedin.com/posts/keshav-verma-4331091b7_lpu-metamask-blockchain-activity-7000017359612600320-qO4T?utm_source=share&utm_medium=member_desktop"}
                        />
                        <NormalAchievements
                            title={"5 Star in C++ and Python on Hackerank"}
                            date={"March, 2023"}
                            link={"https://www.hackerrank.com/curious_keshav51?hr_r=1"}
                            // img={star5}
                        />
                        <NormalAchievements
                            title={"Ranked in the top 5% out of 3 lakh+ teams in the Flipkart Grid 5.0"}
                            date={"August, 2023"}
                            link={"https://unstop.com/hackathons/flipkart-grid-50-software-development-track-flipkart-grid-50-flipkart-686157"}
                            // img = {flipkart}
                        />
                        <NormalAchievements
                            title={"Google IT Support Professional Certified"}
                            date={"March, 2021"}
                            link={"https://www.coursera.org/professional-certificates/google-it-support"}
                            // img = {googleitsupport}
                        />
                        <NormalAchievements
                            title={"Quark Codejam2023: Attained a rank of 154 out of 4000+ in the prelims round"}
                            date={"March, 2023"}
                            link={"/"}
                            // img = {quark1}
                        />
                        <NormalAchievements
                            title={"Quark Codejam2023: Ranked 10 out of 60+ participants in the second round held offline at BITS Pilani, Goa"}
                            date={"April, 2023"}
                            link={"https://www.linkedin.com/feed/update/urn:li:activity:7049441978391928832/"}
                            // img = {quark2}
                        />
                        <NormalAchievements
                            title={"Recognized as part of the top 10% achievers throughout my entire degree program."}
                            date={"August, 2023"}
                            link={"https://ums.lpu.in/lpuums/"}
                            // img = {dean}
                        />
                        <NormalAchievements
                            title={"First runner up in Virasat-E-Udaan by SCSE-LPU"}
                            date={"October, 2020"}
                            link={"https://www.linkedin.com/posts/keshav-verma-4331091b7_ppt-lpu-coabrcurriculars-activity-6738167838982463488-ASLz?utm_source=share&utm_medium=member_desktop"}
                            // img = {virasat}
                        />
                        <NormalAchievements
                            title={"Scored 732 out of 990 in the GAIT (Global Assessment of Information Technology) exam. "}
                            date={"May, 2023"}
                            link={"https://www.gait.org/en/personal/"}
                            // img = {gait}
                        />
                        <NormalAchievements
                            title={"School Rank 1 in IMO 2020 (International Mathematical Olympiad) exam."}
                            date={"Feburary, 2020"}
                            link={"/"}
                        />
                        <NormalAchievements
                            title={"First runner up in Badminton 2020 | North Zone Level | Delhi, IN "}
                            date={"August, 2018"}
                            link={"/"}
                        />
                    </ul>

                </Layout>
            </main>
        </>
    )
}

export default Achievement
