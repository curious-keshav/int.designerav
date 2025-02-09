import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto md:absolute sm-right-0'>
      <div className='w-48 h-auto items-center justify-center relative lg:w-24'>
        <CircularText className={"fill-light animate-spin-slow dark:fill-light "} />
        <Link href="mailto:int.designerav@gmail.com" className='absolute left-1/2 top-1/2 bg-light lg:w-12 lg:h-12 lg:text-[10px]  text-dark shadow-md border border-solid border-dark -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'  > Hire Me </Link>
      </div>
    </div>
  )
}

export default HireMe
