import React from 'react'
import { useEffect, useState } from 'react'
import servicePhoto from "../../public/images/service1.jpg"
import RotatingCards from './RotatedCards';


const Services = () => {

    const [currentService, setCurrentService] = useState(0);

  const handleIndex = (val) => {
    setCurrentService((currentService + val + 3) % 3);
  };

  const handleToggleDetails = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleIndex(1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentService]);

  const navigateButtons = (buttonName) => {
    switch (buttonName) {
      case "Explore our Designs":
        return "/";
      case "Book an appointment":
      case "Contact us":
        return "/contact-us?tab=contact-us";
      default:
        return null;
    }
  };

  const handleButtonClick = (buttonName) => {
    const path = navigateButtons(buttonName);
    if (path) {
      navigate(path);
    }
  };
  return (
    <div
            className="relative w-full min-h-[70vh]  flex justify-center items-center"
            style={{
              backgroundImage: `url(${servicePhoto.src})`,
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              fontFamily: "Poppins",
            }}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <RotatingCards />
          </div>
  )
}

export default Services
