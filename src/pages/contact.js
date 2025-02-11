import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import contactdark from '../../public/images/contact/contactLogo3.png';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const {name,email,message} = form;

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value}); 

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://v1.nocodeapi.com/int_designerav/google_sheets/EoaEPHgMNxdPfqlX?tabId=Sheet1",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[name,email,message, new Date().toLocaleString()]])
      });
      await response.json();
      setForm({...form,name:'', email:'', message:''});

    } catch (error) {
      
    }
  };

  return (
    <>
      <Head>
        <title>Ashish Verma | Contact Page</title>
        <meta name="description" content="Get in touch with Ashish Verma" />
      </Head>
      <TransitionEffect />

      <main className="overflow-hidden flex">
        <Layout
          className=" bg-[#1a1b1b] flex !flex-row xl:flex-row gap-10 overflow-hidden justify-center flex-wrap "
        >
          <Image
            src={contactdark}
            alt="contact"
            className="flex-1 object-cover transform scale-125 mt-4 md:hidden lg:hidden "
            priority
            
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 30vw,30vw"
          />
          <div className='hidden md:block lg:block text-[#28d29f]  text-sm md:!text-xs lg:!text-xs  sm:text-4xl xs:text-3xl font-semibold text-center mt-6'>
          Let's discuss and visualize your needs.
          </div>

          <motion.div className="flex-1 border border-solid p-8 rounded-2xl border-light ">
            <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider dark:text-light">
              Get in touch
            </p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[30px] text-[30px] dark:text-light">
              Contact Me
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4"
            >
              {/* Name Input */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-white py-3 px-6 placeholder:text-sm placeholder:text-secondary sm:placeholder:text-xs text-dark rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              {/* Email Input */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="bg-white py-3 px-6 placeholder:text-sm placeholder:text-secondary sm:placeholder:text-xs text-dark rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              {/* Message Input */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Message</span>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-white py-3 px-6 placeholder:text-sm placeholder:text-secondary sm:placeholder:text-xs text-dark rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              <button
                type="submit"
                className="w-fit flex items-center !bg-light !text-dark p-2.5 px-6 rounded-lg text-md font-semibold hover:!bg-dark hover:!text-light border-2 border-solid border-transparent hover:!border-light dark:bg-dark dark:text-light hover:dark:bg-light hover:dark:text-dark hover:dark:border-dark md:p-2 md:px-4 md:text-base"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
