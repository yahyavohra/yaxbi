"use client";
import { Fragment, useState, useEffect } from "react";
import { fetchSingleData } from "@/data/store";
import { useParams, useRouter } from "next/navigation";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApplyForm from "@/components/ApplyForm";
import Loading from "@/components/Loading/Index";
import StepNavigation from "@/components/StepNavigation";
import "@/app/globals.scss";
import JobDetail from "@/components/JobDetail";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [enquiry, setEnquiry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      try {
        const data = await fetchSingleData(params.id);
        setEnquiry(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    if (params && params.id && !enquiry) {
      fetchDataAsync(params.id);
    }
  }, [enquiry, params]);

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <main className="relative">
      <Header />
      <section className="mx-auto max-w-7xl mt-0 px-2 md:px-6  lg:mt-20 lg:px-2 xl:px-8 mb-20 min-h-[70vh]">
        <nav className=" p-3 border-b border-gray-100  lg:mb-10 ">
          <ol className="list-reset flex text-grey-dark">
            <li>
              <Link href="/" passHref legacyBehavior scroll={false}>
                <a className="text-gray-500 hover:text-gray-700 flex text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.793 2.232a.75.75 0 0 1-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 0 1 0 10.75H10.75a.75.75 0 0 1 0-1.5h2.875a3.875 3.875 0 0 0 0-7.75H3.622l4.146 3.957a.75.75 0 0 1-1.036 1.085l-5.5-5.25a.75.75 0 0 1 0-1.085l5.5-5.25a.75.75 0 0 1 1.06.025Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back to Job Listing
                </a>
              </Link>
            </li>
          </ol>
        </nav>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid  grid-cols-12 gap-3">
            <StepNavigation
              currentStep={currentStep}
              handleStepClick={handleStepClick}
            />

            {currentStep === 1 && (
              <JobDetail enquiry={enquiry} handleStepClick={handleStepClick} />
            )}
            {currentStep === 2 && <ApplyForm />}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
