//import Header from "@/components/Header";
// import SearchBar from "@/components/SearchBar";
// import Footer from "@/components/Footer";
// import CategoryFilters from "@/components/CategoryFilters";
// import SearchListing from "@/components/SearchListing";
// import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import "@/app/globals.scss";
export default function Home() {
  return (
   
      <div className="main">
        <div className="logo">
          <Image src="/images/logo.svg" alt="logo" layout="fill" />
        </div>
      <div className="announcement">Something exciting is coming soons!</div>


    </div>
    
  );
}
