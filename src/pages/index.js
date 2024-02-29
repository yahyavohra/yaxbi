import { useEffect } from 'react';
import Loading from '@/components/Loading/Index';
import Head from 'next/head';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SectionOne from '@/components/sectionOne';
import SectionTwo from '@/components/sectionTwo';
import FAQPage from '@/components/FaqQuestion'
import ContactUs from '@/components/contactUs';
import Footer from '@/components/Footer';
import Image from "next/image";
import "@/app/globals.scss";
import "@/app/font.scss";
export default function Home() {
  useEffect(() => {
    // Scrolls the page to the top on component mount
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this effect runs once on moun
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg"/>
        <link rel="icon" type="image/png" href="/images/favicon.png"/>
      </Head>
      <Loading/>
      
      <HeroBanner/>
      <div className='mt-[100vh] bg-white absolute top-[0px] w-full'>
        {/* <Header/> */}
        <SectionOne/>
        <SectionTwo/>
        <FAQPage/>
        <ContactUs/>
        <Footer/>
      </div>
      
    </>
  );
}
