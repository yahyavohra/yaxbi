"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useViewportScroll } from 'framer-motion';
import "./style.scss";

function useBackgroundColor() {
  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['rgb(33 150 243 / 0%)', 'rgb(33 150 243 / 100%)']);

  return backgroundColor;
}
const HeroBanner = () => {

 const targetRef = useRef(null);
 const extendedRef = useRef(null);
 const backgroundColor = useBackgroundColor();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ["end start", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["300px", "100px"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100px", "50px"]
  );
  const top = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["28vh", "3vh"]
  );
  const left = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["40vw" , "1vw"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.9],
    ["1", "0"]
  );

  return (
    <>
      {/* <div className="w-[100%] h-[100vh] relative  justify-center flex">
        <div className="bg-gray-800 absolute w-full h-full">
          <Image
            src="/images/background.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
        </div>
        <div className="w-[55%] absolute  h-full flex flex-col items-center justify-center text-center px-5">
          <h3 className="lg:text-[70px] md:text-[55px] xs:text-[40px]  font-bold text-white leading-tight xs:mb-5">
          Transforming Ideas into Innovative Tech Solutions
          </h3>
          <h6 className="text-[20px] font-medium text-white leading-tight">
          At Yaxbi, we specialize in providing cutting-edge tech solutions that 
          drive business growth and success. With our expertise in MVP development, 
          agile product teams, and enterprise digital transformation, we help businesses
          thrive in the MENA region and beyond.
          </h6>
        </div>
      </div> */}
      <motion.div style={{backgroundColor: backgroundColor}} className="textAreatop">
              <motion.span
              
              style={{ width: x, height: y, left: left, top: top }}
           
            >
          {/* Replace "Logo" with your actual logo */}
            <motion.img   src="/images/logoWhite.svg" alt="logo" className="logo" />
          </motion.span>
                   
                  <motion.a className="button bitrix"   href="/partner/bitrix24">
                    <img src='/images/bitrix24.svg' alt='bitrix24' />
                   
                  </motion.a>
          
                  <motion.a className="button"  href="#JotFormIFrame-240912269825461">
                    <span>Let&apos;s Talk <span ariaHidden="true">→</span>
                    </span>
                  </motion.a>
          
              
          </motion.div>
      <motion.div style={{opacity: opacity}} className="heroBanner" ref={targetRef}>
      <motion.video    autoPlay loop muted playsInline className="absolute z-10 w-auto min-w-full min-h-full ">
        {/* Replace "path_to_your_video.mp4" with the actual path to your video file */}
        <source src="/images/watermarked_preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
      <motion.div    className="gradient"></motion.div>
      {/* Overlay Content */}
   
        <motion.div  className='textArea'>
     
          <div className="textAreaIn">
            <h3   className="lg:text-[70px] md:text-[55px] xs:text-[40px]  font-bold text-white leading-tight xs:mb-5">
                Transforming Ideas into Innovative Tech Solutions
            </h3>
            <h6  className="text-[20px] font-medium text-white leading-tight">
            Yaxbi specializes in tech solutions for business growth, offering expertise in MVP development and digital transformation.
            </h6>
          </div>
        </motion.div>
        
    
        
      {/* Optional: Add an overlay to darken/lighten the video for better readability of text */}
    
    </motion.div>
    </>
  );
};
export default HeroBanner;
