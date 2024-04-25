import { useEffect } from "react";
import Loading from "@/components/Loading/Index";
import Head from "next/head";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import SectionOne from "@/components/sectionOne";
import SectionTwo from "@/components/sectionTwo";
import FAQPage from "@/components/FaqQuestion";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/Footer";
import Image from "next/image";
import "@/app/globals.scss";
import "@/app/font.scss";
import "./style.scss";
export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="jRpOmOLhzaWrust7ul5nfr4gF8-hRE32GQAYY25aGtg"
        />
        <title>Yaxbi - Transforming Ideas into Innovative Tech Solutions</title>
        <meta
          name="description"
          content="Yaxbi specializes in tech solutions for business growth, offering expertise in MVP development and digital transformation. Unlock your business potential with Yaxbi. Discover how Yaxbi can transform your business with our comprehensive tech solutions. From MVP development to enterprise digital transformation, we have you covered."
        />
        <meta
          name="keywords"
          content="Yaxbi, tech solutions, MVP development, digital transformation, startups, scaleups, enterprise, data engineering, cyber security, quality analysis"
        />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </Head>
      {/* <Loading/> */}

      <Header />
      <div class="hero-section">
        <div className="leftArea">
          <h1 className="tip">Empowering Your Business</h1>
          <h2 className="title">Official Partnership with Bitrix24</h2>
          <p className="descrip">
            At Yaxbi, we&apos;re thrilled to announce our official partnership with
            Bitrix24, a leading provider of comprehensive business management
            software. Through this partnership, we aim to further enhance our
            suite of tech solutions and provide our clients with even more
            powerful tools to drive their businesses forward.
          </p>
        </div>

        <div>
          <img src="/images/banner.jpg" alt="bitrix24" />
        </div>
      </div>
      <div class="sectionTwo">
        <div className="leftArea">
          <h2 className="question">How does Bitrix24 surpass 99% of competing solutions in the market?</h2>
          <ul className="bullet list-disc space-y-2 pl-4 text-sm">
            <li>
                Substitutes all your current SaaS solutions
            </li>
            <li>
                Perpetually free for an unlimited number of users
            </li>
            <li>
                Effortlessly transfers your data from other systems or CRMs
            </li>
            <li>
                Integrates seamlessly with all your preferred services and applications
            </li>
            <li>
                Backed by the trust of over 15,000,000 users worldwide
            </li>
            <li>
                Flat fee of 100%: ensures predictable costs with no per-user pricing
            </li>
          </ul>
        </div>

        <div>
          <img src="/images/services.png" alt="services" />
        </div>
      </div>
      <div class="sectionThree">
      <div
  className="rightArea flex justify-center"
  id="exampleWrapper"
>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example11.png"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example.png"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example2.jpg"
                />
            </div>
            </div>
            <div className="grid gap-4">
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example3.png"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example4.png"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example5.png"
                />
            </div>
            </div>
            <div className="grid gap-4">
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example6.jpg"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example7.png"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example8.jpg"
                />
            </div>
            </div>
            <div className="grid gap-4">
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example9.png"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example10.jpg"
                />
            </div>
            <div>
                <img
                alt=""
                className="h-auto max-w-full rounded-lg"
                src="/images/example11.png"
                />
            </div>
            </div>
        </div>
</div>
        <div className="leftArea">
        <div class="section">
        <h2 className='title'>About Bitrix24</h2>
        <p className='descrip'>
          Bitrix24 offers a wide range of features and functionalities designed
          to streamline business processes, improve collaboration, and boost
          productivity. From CRM and project management to telephony integration
          and HR solutions, Bitrix24 is a versatile platform trusted by
          businesses of all sizes around the globe.
        </p>
      </div>

      <div class="section">
        <h2 className='title'>Why Choose Yaxbi and Bitrix24</h2>
        <p className='descrip'>
          As a Bitrix24 partner, Yaxbi brings years of expertise in tech
          solutions and a deep understanding of our clients&apos; needs. Our
          partnership with Bitrix24 allows us to offer unparalleled support in
          implementation, configuration, customization, and training. Whether
          you&apos;re a startup looking to streamline operations or a large
          enterprise seeking comprehensive business automation, Yaxbi and
          Bitrix24 have you covered.
        </p>
      </div>

      {/* <div class="section">
        <h2 className='title'>Our Services</h2>
        <p className='descrip'>
          Create a grid or card layout showcasing each service offered through
          the partnership. Each card could have an icon or image, a headline,
          and a short description. This visual representation helps users
          quickly understand the range of services.
        </p>
      </div> */}

      {/* <div class="section">
        <h2 className='title'>Get Started Today</h2>
        <p className='descrip'>
          Ready to unlock the full potential of your business with Yaxbi and
          Bitrix24? Contact us today for a free consultation and discover how
          our partnership can drive growth, efficiency, and innovation for your
          organization.
        </p>
       
      
      </div> */}
        </div>
        </div>

  
      <div>
      <iframe
        id="JotFormIFrame-240912269825461"
        title="General Inquiry Contact Form"
        onload="window.parent.scrollTo(0,0)"
        allowTransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/241155332695457"
        frameBorder={0}
        style={{ minWidth: "100%", maxWidth: "100%", height: '1200px', border: "none" }}
        scrolling="no"
        />
      </div>

      <Footer />
    </>
  );
}
