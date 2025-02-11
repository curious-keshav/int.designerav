import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg text-white'>
                    {position}&nbsp;
                    <a target="_blank" className='text-primary capitalize dark:text-primaryDark' href={companyLink}>
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-white/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm text-white'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    // console.log('scrollYProgress:', scrollYProgress);

    return (
        <div className='my-32 mt-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center text-white md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div className='w-[80%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Freelance Interior Designer"
                        company="Self-Employed"
                        companyLink="#"
                        time="January 2018 - Present"
                        address="Dhuri, Punjab"
                        work="Received commendations from clients for professionalism and creativity | Managed projects within budget and delivered on time | Conceptualized and proposed design ideas to clients."
                    />
                    <Details
                        position="Interior Designer"
                        company="Creative Line Infratek"
                        companyLink="#"
                        time="August 2021 - Present"
                        address="Ludhiana, Punjab"
                        work="Provided walkthrough expertise for commercial projects | Contributed to landscape design and walkthroughs | Enhanced the company’s rating with impactful designs."
                    />
                    <Details
                        position="Interior Designer"
                        company="Verma and Associates"
                        companyLink="#"
                        time="July 2016 - August 2021"
                        address="Ludhiana, Punjab"
                        work="Delivered technical support for AutoCAD, SketchUp, and Lumion | Suggested innovative design ideas for diverse projects | Gained expertise in material selection and purchasing | Focused on residential walkthroughs."
                    />
                    <Details
                        position="Junior Interior Designer"
                        company="Planet Design"
                        companyLink="#"
                        time="May 2016 - July 2016"
                        address="Ludhiana, Punjab"
                        work="Provided technical support for AutoCAD | Thrived in a collaborative team environment."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience
