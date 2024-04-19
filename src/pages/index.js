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
        <meta name="google-site-verification" content="jRpOmOLhzaWrust7ul5nfr4gF8-hRE32GQAYY25aGtg" />
        <title>Yaxbi - Transforming Ideas into Innovative Tech Solutions</title>
        <meta name="description" content="Yaxbi specializes in tech solutions for business growth, offering expertise in MVP development and digital transformation. Unlock your business potential with Yaxbi. Discover how Yaxbi can transform your business with our comprehensive tech solutions. From MVP development to enterprise digital transformation, we have you covered."/>
        <meta name="keywords" content="Yaxbi, tech solutions, MVP development, digital transformation, startups, scaleups, enterprise, data engineering, cyber security, quality analysis"/>
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
