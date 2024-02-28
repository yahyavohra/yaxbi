
import { useState , useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
const Loading = () => {
  const controls = useAnimation();
  const [animateOut, setAnimateOut] = useState(false);
  useEffect(() => {
    // Set a timer to change animateOut state to true after 3 seconds
    const timer = setTimeout(() => {
      setAnimateOut(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
    return (
      <motion.section
        className="main_text_multi_scroller "
        initial={{ y: '0%' }}
        animate={animateOut ? { y: '-100%' } : ''}
        transition={{ duration: 1, delay: 0 }}
>
      <div className="Prelogo">
          {/* <Image src="/images/logo.svg" alt="logo" layout="fill" /> */}
          <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.77 62.9">
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <polygon class="cls-1" points="62.75 0 37.19 37.87 37.19 62.89 25.63 62.89 25.63 35.54 49.57 0 62.75 0"/>
      <polygon class="cls-1" points="13.2 0 29.82 24.59 16.63 24.59 0 0 13.2 0"/>
      <path class="cls-1" d="M94.33,43.41V13.25l-21.9,30.16h21.9ZM66.77,52.23l-7.7,10.67h-11.88L90.81,1.28h13.92v61.62h-10.39v-10.67h-27.56Z"/>
      <polygon class="cls-1" points="154.1 62.9 139.53 39.89 124.5 62.9 110.85 62.9 132.66 31.44 112.06 1.28 125.79 1.28 139.53 23 153.36 1.28 166.9 1.28 146.39 30.98 168.3 62.9 154.1 62.9"/>
      <path class="cls-1" d="M202.08,53.99c3.9,0,6.74-.88,8.54-2.65,1.79-1.76,2.69-4.22,2.69-7.38,0-3.34-.88-5.83-2.65-7.47-1.76-1.64-4.22-2.46-7.38-2.46h-18.19v19.95h16.98ZM185.09,10.38v16.24h17.54c2.91,0,5.13-.67,6.68-2,1.55-1.33,2.32-3.45,2.32-6.36,0-2.42-.76-4.33-2.27-5.76-1.51-1.42-3.88-2.13-7.1-2.13h-17.17ZM174.51,62.9V1.28h29.51c3.4,0,6.26.37,8.58,1.11,2.32.75,4.19,1.8,5.62,3.16,1.42,1.36,2.46,2.96,3.11,4.78.65,1.82.97,3.82.97,5.99,0,3.71-.96,6.7-2.88,8.96-1.92,2.26-4.18,3.7-6.78,4.31,1.37.31,2.76.82,4.16,1.53,1.4.71,2.65,1.7,3.74,2.97,1.09,1.27,1.98,2.82,2.66,4.64.68,1.82,1.03,3.97,1.03,6.45,0,2.66-.42,5.09-1.26,7.28-.83,2.2-2.17,4.07-4,5.61-1.83,1.55-4.19,2.74-7.07,3.57-2.88.84-6.34,1.25-10.37,1.25h-27.05Z"/>
      <rect class="cls-1" x="229.82" y="1.28" width="10.95" height="61.62"/>
    </g>
  </g>
</svg>
        </div>
  <h1 className="">
    <span className="first-animate">
      Think
    </span>
    <span>
      Pioneer
    </span>
    <span>
      Create
    </span>
    <span>
      Innovate
    </span>
  </h1>
</motion.section>
    );
  };
  
  export default Loading;
  