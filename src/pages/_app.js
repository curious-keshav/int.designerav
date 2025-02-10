import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import {Montserrat} from "next/font/google";
import Head from "next/head";
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-gradient-to-r from-[#4c73ff] to-[#389bff]  w-full min-h-screen dark:bg-[#0d0d0d]`}>
        <NavBar/>
        {/* <div className='bg-[#2979FF] w-full h-4'></div> */}
        <AnimatePresence mode="wait">
            <Component key={router.asPath}{...pageProps}/>
        </AnimatePresence>
        <Footer/>
    </main>
    </>
  )
}

// !bg-[#2979FF]