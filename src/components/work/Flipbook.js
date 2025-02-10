import React, { forwardRef, useEffect, useState } from "react";
import HTMLFlipBook from 'react-pageflip';
import { CldImage } from 'next-cloudinary';


const Flipbook = forwardRef(( props ,ref) => {
    const { imagesToRender, isPortrait, onFlip, isMobile, selectedProject } = props;
    const [isMobileView, setIsMobileView] = useState(isMobile);
    useEffect(() => {
        setIsMobileView(isMobile);
    }, [isMobile]);

    return (
        isMobileView ? (
            <HTMLFlipBook
                key={isPortrait}
                style={{}}
                ref={ref}
                startZIndex={1}
                width={400}
                height={225}
                minWidth={350}
                maxWidth={1000}
                minHeight={100}
                maxHeight={300}
                size="stretch"
                drawShadow={true}
                flippingTime={1000}
                usePortrait={isPortrait}
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
                        <CldImage
                            src={imageSrc}
                            alt={`Page ${index + 1}`}
                            className="w-full h-full object-cover"
                            // layout="fill"
                            width={4080}
                            height={2640}
                        />
                    </div>
                ))}

            </HTMLFlipBook>
        ) : (
            <HTMLFlipBook
            style={{}}
            ref={ref}
            startZIndex={1}
            width={800}
            height={450}
            minWidth={600}
            maxWidth={1000}
            minHeight={337.5}
            maxHeight={562.5}
            size="stretch"
            drawShadow={true}
            flippingTime={1000}
            usePortrait={isPortrait}
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
                        <CldImage
                            src={imageSrc}
                            alt={`Page ${index + 1}`}
                            className="w-full h-full object-cover"
                            // layout="fill"
                            width={4080}
                            height={2640}
                        />
                    </div>
                ))}

            </HTMLFlipBook>
        )
    )
})

export default Flipbook
