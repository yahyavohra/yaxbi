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
const Header = () => {

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
      <motion.div style={{backgroundColor: 'rgb(33 150 243 / 100%)'}} className="textAreatops">
        <motion.span style={{ width: x, height: y, left: left, top: top }}>
        <motion.a className=""   href="/" style={{border: 'none'}}>
           <motion.img   src="/images/logoWhite.svg" alt="logo" className="logo" />
        </motion.a>
           
          </motion.span>
                   
                  <motion.a className="button bitrix"   href="partner/bitrix24">
                    <motion.img src='/images/bitrix24.svg' alt='bitrix24' />
                   
                  </motion.a>
          
                  <motion.a className="button"  href="#JotFormIFrame-240912269825461">
                    <span>Let&apos;s Talk <span ariaHidden="true">→</span>
                    </span>
                  </motion.a>
          
              
          </motion.div>
      <motion.div style={{opacity: opacity}} className="Header" ref={targetRef}>
    
    </motion.div>
    </>
  );
};
export default Header;
