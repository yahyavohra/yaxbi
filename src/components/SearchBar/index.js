"use client";
import { Fragment, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Transition, Combobox } from "@headlessui/react";
import { fetchData, buildQueryString } from "@/data/store";
const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlLength = searchParams.size;
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setSearchResult(data);
        setSelected([]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAsync();
  }, []);
  useEffect(() => {
    if (selected) {
      const queryParams = {
        title: selected,
      };
      const queryString = buildQueryString(queryParams);
      router.push(queryString, { scroll: false });
    }
  }, [selected, router]);

  useEffect(() => {
    if (!urlLength) {
      setSelected("");
    }
  }, [urlLength]);

  const filteredPeople =
    query === ""
      ? searchResult
      : searchResult.filter((person) =>
          person.jobTitle
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  const handleSelected = (e) => {
    setSelected(e.jobTitle);
  };

  return (
    <>
      <>
        <div className="border-b border-gray-200 py-6">
          <p className="font-medium text-gray-900 text-sm pb-5">Search jobs</p>
          {selected?.jobTitle}

          <Combobox
            value={selected || ""}
            onChange={(value) => handleSelected(value)}
          >
            {({ open }) => (
              <>
                <div className="relative mt-1 ">
                  <div className="relative rounded-[2px]   w-full cursor-default overflow-hidden  bg-white text-left ring-1 h-[43px] ring-outset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600   sm:text-sm">
                    <Combobox.Button className="w-[100%] absolute inset-y-0 right-0 flex items-center pr-2">
                      <Combobox.Input
                        className="w-full  py-2 pl-3 pr-10 text-sm leading-5 focus-visible:outline focus-visible:outline-0 h-[45px] focus-visible:outline-offset-0 focus-visible:outline-gray-600 text-gray-900 focus:ring-"
                        displayValue={selected || ""}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="ex. CNC Operator"
                      />

                      {!open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {filteredPeople &&
                      filteredPeople.length === 0 &&
                      query !== "" ? (
                        <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredPeople &&
                        filteredPeople.map((person) => (
                          <Combobox.Option
                            key={`uniqe-${person.JobID}`}
                            id={`uniqe-${person.JobID}`}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-3 pr-4 ${
                                active
                                  ? "bg-gray-500 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {person.jobTitle}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                      />
                                    </svg>
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Combobox>
        </div>
      </>
    </>
  );
};

export default SearchBar;
