import Link from 'next/link';
import React from 'react';
import Layout from './Layout';
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsappIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-medium text-base pt-4 pb-2">
      <Layout className="flex  md:flex-col flex-wrap justify-between  md:items-start gap-6 md:gap-10 text-center md:text-left">
        
        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-lg font-semibold">Let's talk</p>
          <p className="text-white">int.designerav@gmail.com</p>
        </div>

        {/* Blogs and Social Media Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div>
            <p>For latest Blogs, events</p>
            <p className="font-semibold cursor-pointer">
              <Link href="/work" className="cursor-pointer">Latest <span className="inline-block">&rarr;</span></Link>
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Stay Connected</p>
            <div className="flex gap-4 mt-2">
              {[
                { href: "https://www.linkedin.com/in/ashish-verma-110744186/", Icon: LinkedInIcon, label: "LinkedIn" },
                { href: "https://www.facebook.com/profile.php?id=100007880145685", Icon: FacebookIcon, label: "Facebook" },
                { href: "https://www.instagram.com/int.designerav/", Icon: InstagramIcon, label: "Instagram" },
                { href: "https://wa.me/9780974775", Icon: WhatsappIcon, label: "Whatsapp" }
              ].map(({ href, Icon, label }) => (
                <motion.a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  whileTap={{ scale: 0.9 }} 
                  whileHover={{ y: -2 }} 
                  aria-label={label}
                  className="w-6 hover:text-primary transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Language Selector and Help Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">🌐 Select Language</p>
            <select className="text-black border border-black rounded px-2 py-1">
              <option>English</option>
            </select>
          </div>
          <div>
            <p>Any issues? <Link href="/contact"><span className="font-semibold cursor-pointer underline">Chat with us</span></Link></p>
          </div>
        </div>

      </Layout>
    </footer>
  );
};

export default Footer;
