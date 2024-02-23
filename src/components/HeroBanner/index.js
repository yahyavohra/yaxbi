"use client";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <div className="w-[100%] h-[60vh] relative">
        <div className="bg-gray-800 absolute w-full h-full">
          <Image
            src="/images/hero-bg.webp"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-60"
          />
        </div>

        <div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-5">
          <h3 className="lg:text-[70px] md:text-[55px] xs:text-[40px]  font-bold text-white leading-tight xs:mb-5">
            Ready to join our team?
          </h3>
          <h6 className="text-[20px] font-semibold text-white leading-tight">
            Take the first step toward an exciting and rewarding career with us
          </h6>
        </div>
      </div>
    </>
  );
};
export default HeroBanner;
