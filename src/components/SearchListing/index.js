"use client";
import React, { useState, useEffect } from "react";
import { fetchData } from "@/data/store";
import { useSearchParams, useRouter } from "next/navigation";
import Loading from "../Loading/Index";
import Link from "next/link";

const SearchListing = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const url = searchParams;
  const urlLength = searchParams.size;

  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleClick = (JobID) => {
    router.push(`/enquiry/${JobID}`, { scroll: false });
  };

  const fetchDataAsync = async (query) => {
    setIsLoading(true);
    try {
      const data = await fetchData(query);
      setSearchResult(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!urlLength) {
      fetchDataAsync();
    } else {
      fetchDataAsync(`?${url}`);
    }
  }, [searchParams]);

  if (!searchResult) return <p>{error}</p>;

  return (
    <div className=" col-span-9 text-gray-500">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {searchResult.length !== 0 && (
            <div className="flex justify-start  mt-7 mb-4 flex  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>

              <span className="text-sm  text-gray-500 ">
                <b>{searchResult.length === 0 ? "No" : searchResult.length}</b>{" "}
                job{searchResult.length > 1 && "s"} available
              </span>
            </div>
          )}

          <ul role="list" className="divide-y divide-gray-100">
            {searchResult.length !== 0 ? (
              searchResult.map((person) => (
                <li
                  key={person.JobID}
                  className="flex xs:flex-col sm:flex-row xs:px-2  sm:px-5 justify-between gap-x-6 py-5 group border-transparent transition duration-300 ease-in-out hover:z-9 hover:border-transparent hover:shadow-md"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="px-1.5 py-0.5 text-xs font-medium rounded-sm mb-2.5 text-teal-500	bg-teal-100 inline	">
                        {person.category}
                      </p>
                      <p className="text-md font-semibold my-2 text-gray-900">
                        {person.jobTitle}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.location}, United Arab Emirates
                      </p>
                    </div>
                  </div>
                  <div className=" shrink-0 xs:flex-row xs:justify-between xs:flex xs:items-center xs:mt-2  sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {person.salaryRange}
                    </p>

                    <button
                      onClick={() => handleClick(person.JobID)}
                      className=" items-center inline-flex justify-center rounded-md text-sm  py-1.5 sm:mt-[20px] px-4 bg-gray-100 text-gray-700 hover:bg-gray-200 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[18px]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-md ml-2 font-semibold  ">
                        See Details
                      </p>
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <>
                <div class="text-center p-4 bg-gray-100 flex-col flex items-center mt-10 lg:mt-20 ">
                  <p class="text-2xl font-semibold my-2 text-gray-700 mb-2">
                    No Jobs are available right now.
                  </p>
                  <p class="text-md text-gray-600 mb-6">
                    Subscribe to our newsletter so you can stay updated with all
                    featured jobs.
                  </p>

                  <div class="flex xs:flex-col items-center gap-2 sm:flex-row">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      class="px-4 py-2 border rounded-md focus:outline-none focus:border-gray-500"
                    />
                    <button class="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                      Subscribe
                    </button>
                  </div>
                </div>
              </>
            )}
          </ul>
        </>
      )}
    </div>
  );
};
export default SearchListing;
