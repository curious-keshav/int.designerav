import React from 'react'

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0  p-16  px-32 dark:bg-dark ${className} xl:px-24 lg:px-16 md:px-12 sm:px-8  xl:p-12 lg:p-8 md:p-6 sm:p-4 `}>
      {children}
    </div>
  )
}

export default Layout
