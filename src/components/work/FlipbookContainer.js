import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import flipbookImagesData from "./flipbookImagesDataCDN";
import Flipbook from "./Flipbook";

const FramerImage = motion(Image);

const FlipbookContainer = ({id,isPortrait,isMobile}) => {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobileView, setIsMobileView] = useState(isMobile);
    useEffect(() => {
        setIsMobileView(isMobile);
    }, [isMobile]);

  const work = "project"+id;
  const [selectedProject, setSelectedProject] = useState(work);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onFlip = (e) => {
    setCurrentPage(e.data);
    getCurrentPage();
  };

  const getCurrentPage = () => {
    if (flipBookRef.current) {
      const currentPageIndex = flipBookRef.current.pageFlip().getCurrentPageIndex();
      setCurrentPage(currentPageIndex);
    }
  };

  const imagesToRender = flipbookImagesData.projects[selectedProject] || [];
  console.log(work,"eide")


  return (
    <div>
      <div className=" flex flex-col gap-8 justify-center items-center p-0 h-fit md:h-fit overflow-hidden my-8 z-0">
      
        <div className="flex justify-center w-full mt-6 gap-10">
          <motion.div
            className="text-2xl md:text-3xl font-semibold flex items-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Elevation
          </motion.div>
        </div>

        <motion.div
          className="relative z-10"
          style={{ overflow: "visible" }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
         <Flipbook imagesToRender={imagesToRender} isPortrait={isPortrait} isMobile={isMobile} ref={flipBookRef}  onFlip={onFlip} selectedProject={selectedProject}/>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center mt-4">
              <div className="flex justify-center gap-6 items-center">
                <motion.button
                  onClick={() =>
                    flipBookRef?.current && flipBookRef?.current.pageFlip().flipPrev()
                  }
                  className="px-4 py-2 rounded-full bg-white text-black font-semibold shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Back
                </motion.button>
                <motion.button
                  onClick={() =>
                    flipBookRef.current && flipBookRef.current.pageFlip().flipNext()
                  }
                  className="px-4 py-2 rounded-full bg-white text-black font-semibold shadow-md flex items-center justify-center border"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Next
                </motion.button>
              </div>
              <div className="text-center mt-2 text-white">
                Click or swipe to flip pages!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipbookContainer;
