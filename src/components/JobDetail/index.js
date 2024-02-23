const JobDetail = ({ enquiry, handleStepClick }) => {
    return (
      <>
        <div className=" col-span-12 md:col-span-8 sm:col-span-7 lg:col-span-6 xl:col-span-7">
          <div className="flex pl-5 pr-5 justify-between gap-x-6 py-5 group  shadow-md">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="px-1.5 py-0.5 text-xs font-medium rounded-sm mb-2.5 text-teal-500 bg-teal-100 inline ">
                  {enquiry?.category}
                </p>
                <p className="text-2xl font-semibold my-2 text-gray-900">
                  {enquiry?.jobTitle}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {enquiry?.location}, United Arab Emirates
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {enquiry?.salaryRange}
              </p>
            </div>
          </div>
          <div className="bg-white ring ring-[1px] ring-outset ring-gray-100 shadow-md rounded-sm p-5 lg:p-10 pt-2 pb-10">
            <h3 className="text-lg font-semibold mt-5 text-gray-800 mb-2 ">
              Job description
            </h3>
            <div
              className="text-sm text-gray-600 mb-2"
              dangerouslySetInnerHTML={{ __html: enquiry.jobDescription }}
            ></div>
            <div className="grid grid-cols-1  gap-4">
              <div>
                <h3 className="text-lg font-semibold mt-5 text-gray-800">
                  Responsibilities
                </h3>
                <ul className="list-disc space-y-2 pl-4 mt-2 text-sm">
                  {enquiry &&
                    enquiry?.responsibilities?.map((responsibility, index) => (
                      <li className="text-gray-600" key={index}>
                        {responsibility}
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-5 text-gray-800">
                  Benefits
                </h3>
                <ul className="list-disc space-y-2 pl-4 mt-2 text-sm ">
                  {enquiry &&
                    enquiry.benefits?.map((benefits, index) => (
                      <li className="text-gray-600" key={index}>
                        {benefits}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-4 sm:col-span-5 lg:col-span-3">
          <div className="bg-white px-5 py-2 ring ring-[1px] ring-outset ring-gray-100  rounded-sm  p-2">
            <div>
              <h3 className="text-lg font-semibold py-2 pb-3 text-gray-800 border-b border-gray-100 ">
                Job Overview
              </h3>
              <div className=" mt-2 text-sm py-2 text-gray-700">
                <div className="my-1">
                  <span className="mr-1 font-semibold text-md text-gray-700">
                    Published on:
                  </span>
  
                  {enquiry.jobOverview.publishedDate}
                </div>
                <div className="my-1">
                  <span className="mr-1 font-semibold text-md text-gray-700">
                    {" "}
                    Employment Status:
                  </span>
                  {enquiry.jobOverview.employmentStatus}
                </div>
                <div className="my-1">
                  <span className="mr-1 font-semibold text-md text-gray-700">
                    {" "}
                    Experience Required:
                  </span>
                  {enquiry.jobOverview.experienceRequired}
                </div>
                <div className="my-1">
                  <span className="mr-1 font-semibold text-md text-gray-700">
                    Salary:
                  </span>{" "}
                  {enquiry.jobOverview.salary}
                </div>
                <div className="my-1">
                  <span className="mr-1 font-semibold text-md text-gray-700">
                    Gender:
                  </span>{" "}
                  {enquiry.jobOverview.gender}
                </div>
                <div className="my-1">
                  <span className="mr-1 font-semibold text-md text-gray-700">
                    Application Deadline:
                  </span>
                  {enquiry.jobOverview.applicationDeadline}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 ring ring-[1px] grid  grid-cols-1 gap-2 ring-outset ring-gray-100  rounded-sm  p-2 mb-4">
            <button className=" items-center inline-flex justify-center rounded-sm text-sm h-[44px] ring ring-[1px] ring-outset ring-gray-100   text-gray-700 hover:bg-gray-200">
              <p className="text-md mr-2 font-semibold ">Share</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </button>
            <button
              className=" items-center inline-flex justify-center rounded-sm text-sm h-[44px]   bg-sky-100 text-sky-700 hover:bg-sky-200 "
              onClick={() => handleStepClick(2)}
            >
              <p className="text-md mr-2 font-semibold ">Apply Now</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default JobDetail;
  