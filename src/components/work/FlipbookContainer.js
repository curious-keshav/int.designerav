import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import flipbookImagesData from "./flipbookImagesData";

const FramerImage = motion(Image);

const FlipbookContainer = (id) => {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPortrait, setIsPortrait] = useState(true);

  const work = "project"+id.id;
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

  useEffect(() => {
    const updateScreenOrientation = () => {
      const isPortraitMode = window.innerHeight > window.innerWidth;
      setIsPortrait(isPortraitMode);
    };

    updateScreenOrientation();
    window.addEventListener("resize", updateScreenOrientation);

    return () => {
      window.removeEventListener("resize", updateScreenOrientation);
    };
  }, []);

  const imagesToRender = flipbookImagesData.projects[selectedProject] || [];


  return (
    <div>
      <div className="relative flex flex-col gap-8 justify-center items-center p-8 h-fit md:h-screen overflow-hidden my-8">
      
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

        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "transparent",
            backgroundPosition: "center",
            filter: "blur(15px) brightness(0.6)",
            zIndex: -1,
          }}
        ></div>

        <motion.div
          className="relative z-10"
          style={{ overflow: "visible" }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <HTMLFlipBook
            ref={flipBookRef}
            width={800}
            height={450}
            minWidth={600}
            maxWidth={1000}
            minHeight={337.5}
            maxHeight={562.5}
            size="stretch"
            drawShadow={true}
            flippingTime={1000}
            usePortrait={false}
            startPage={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            className="flipbook"
            onFlip={onFlip}
          >

            {imagesToRender.map((imageSrc, index) => (
              <div className="page" key={`${selectedProject}-${index}`}>
                <FramerImage
                  src={imageSrc}
                  alt={`Page ${index + 1}`}
                  className="w-full h-full object-cover"
                  layout="fill"
                  width={4080}
                  height={2640}
                />
              </div>
            ))}

          </HTMLFlipBook>

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
