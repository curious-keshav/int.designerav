import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon, WhatsappIcon } from './Icons';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* Indicator line */}
      <span className={`
        h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  }

  return (
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      {/* Indicator line */}
      <span className={`
        h-[1px] inline-block bg-light dark:bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </button>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between z-10 lg:px-16 md:px-12 sm:px-8 dark:text-light relative'>

      {/* Hamburger menu button */}
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      
      <div className='w-full flex justify-between items-center xl:hidden'>
      <div className=' flex items-center gap-8'>
        <Logo />
        <nav>
          <CustomLink href="/" title="HOME" className='mr-4' />
          <CustomLink href="/about" title="ABOUT" className='mx-4' />
          <CustomLink href="/work" title="WORK" className='mx-4' />
          {/* <CustomLink href="/achievement" title="ACHIEVEMENTS" className='mx-4' /> */}
          <CustomLink href="/contact" title="CONTACT" className='mx-4' />
          {/* <CustomLink href="/blog" title="BLOG" className='ml-4' /> */}
        </nav>
        </div>

        


        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a href="https://www.linkedin.com/in/ashish-verma-110744186/" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3"><LinkedInIcon /></motion.a>
          <motion.a href="https://www.facebook.com/profile.php?id=100007880145685" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3"><FacebookIcon /></motion.a>
          <motion.a href="https://www.instagram.com/int.designerav/" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3"><InstagramIcon /></motion.a>
          <motion.a href="https://wa.me/9780974775" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 ml-3"><WhatsappIcon /></motion.a>

          {/* Dark mode toggle button */}
          {/* <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
          </button> */}
        </nav>
      </div>

      {/* Mobile Version */}
      {isOpen && (
        <motion.div className='min-w-[70vw] !z-100 flex-col w-1/2 flex justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 text-light dark:text-dark  rounded-lg backdrop-blur-md py-32' initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}} animate={{scale:1,opacity:1}}>
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href="/" title="HOME" className='' toggle={handleClick} />
            <CustomMobileLink href="/about" title="ABOUT" className='' toggle={handleClick} />
            <CustomMobileLink href="/work" title="WORK" className='' toggle={handleClick} />
            <CustomMobileLink href="/contact" title="CONTACT" className='' toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap mt-2'>
            {/* <motion.a href="https://twitter.com/K4Verma" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mr-3 sm:mx-1"><TwitterIcon /></motion.a> */}
            {/* <motion.a href="https://github.com/curious-keshav" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1"><GithubIcon /></motion.a> */}
            <motion.a href="https://www.linkedin.com/in/ashish-verma-110744186/" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1"><LinkedInIcon /></motion.a>
            <motion.a href="https://www.facebook.com/profile.php?id=100007880145685" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1"><FacebookIcon /></motion.a>
            <motion.a href="https://www.instagram.com/int.designerav/" target={"_blank"} whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1"><InstagramIcon /></motion.a>

            {/* Dark mode toggle button */}
            {/* <button onClick={() => {setIsOpen(!isOpen); setMode(mode === "light" ? "dark" : "light")}} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
              {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
            </button> */}
          </nav>
        </motion.div>
      )}
      
      {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo /></div> */}
    </header>
  )
}

export default NavBar;
