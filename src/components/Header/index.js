"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';


const Header = () => {



  return (
    <>
    
      <nav
        // className={`${
        //   isScrolled ? "shadow-md sticky " : "  "
        // }  top-0 z-50  w-[100%] `}
      >
          <div className="mx-auto max-w-10xl px-2 sm:px-6 lg:px-[40px] h-[80px] justify-between flex items-center">
        
{/*                 
                  <div className="flex space-x-4">
                    <a href="#" className={`bg-gray-900  text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" x-state-description="Current: &quot;bg-gray-900 text-white&quot;, Default: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;`}>Dashboard</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">Team</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">Projects</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" x-state-description="undefined: &quot;bg-gray-900 text-white&quot;, undefined: &quot;text-gray-300 hover:bg-gray-700 hover:text-white&quot;">Calendar</a>
                    
                  </div> */}
             
              {/* <div className="w-[120px] h-[30px] relative">
                <Image src='/images/logoWhite.svg' alt="logo" layout="fill" />  
              </div> */}
              <motion.div className={`fixed top-0 w-full flex justify-start p-4 bg-transparent to-white z-50`}>
                {/* <motion.img
                  src="/images/logoWhite.svg" // Your logo path
                 // animate={controls}
                 // style={{ width: 350, height: 100, x: '-50%' }}
                 
                  alt="logo"
                /> */}
              </motion.div>
              <div className="">
                  <a className="button-primary inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8" href="/all-access">
                    <span>Let&apos;s Talk <span ariaHidden="true">→</span>
                    </span>
                  </a>
              </div>
        </div>
        {/* {isScrolled && (
          <div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
        )} */}
        
      </nav>
      
    </>
  );
};

export default Header;
