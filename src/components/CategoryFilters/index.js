"use client";
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { buildQueryString, useBreakpoint } from "@/data/store";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "../SearchBar";
import Link from "next/link";

const CategoryFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentBreakpoint = useBreakpoint();
  const urlLength = searchParams.size;

  console.log("currentBreakpoint ", currentBreakpoint);
  const [filters, setFilters] = useState([
    {
      id: "category",
      name: "Category",
      options: [
        { value: "production", label: "Production", checked: false },
        { value: "it", label: "Information technology", checked: false },
        { value: "hr", label: "Human Resources", checked: false },
        { value: "marketing", label: "Marketing", checked: false },
        { value: "sales", label: "Sales", checked: false },
        { value: "accounts", label: "Accounts", checked: false },
      ],
    },
    {
      id: "location",
      name: "Location",
      options: [
        { value: "sharjah", label: "Sharjah", checked: false },
        { value: "abu dhabi", label: "Abu Dhabi", checked: false },
        { value: "dubai", label: "Dubai", checked: false },
      ],
    },
  ]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFilters((currentFilters) => {
      return currentFilters.map((filter) => ({
        ...filter,
        options: filter.options.map((option) => ({
          ...option,
          checked:
            urlParams.get(filter.id.toLowerCase()) ===
            option.value.toLowerCase(),
        })),
      }));
    });
  }, [searchParams, currentBreakpoint]);
  const handleCheckboxChange = (filterId, optionValue) => {
    const newQueryParams = { ...router.query, [filterId]: optionValue };
    const queryString = buildQueryString(newQueryParams);
    router.push(`/${queryString}`, { scroll: false });
  };
  return (
    <>
      <form className="col-span-3">
        <div className="flex justify-between border-b border-gray-200 py-6">
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
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <Link href="/" legacyBehavior scroll={false}>
            <a
              className={`text-sm ${
                urlLength > 0 ? "text-gray-500" : "text-gray-300"
              }`}
            >
              Clear All filters
            </a>
          </Link>
        </div>
        <SearchBar />
        {currentBreakpoint &&
          filters &&
          filters.map((section) => (
            <Disclosure
              as="div"
              key={section.id}
              defaultOpen={
                currentBreakpoint === "lg" || currentBreakpoint === "2xl"
              }
              className="border-b border-gray-200 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
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
                              d="M5 12h14"
                            />
                          </svg>
                        ) : (
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
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            value={option.value || ""}
                            type="radio"
                            checked={option.checked}
                            onChange={() =>
                              handleCheckboxChange(section.id, option.value)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600 cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
      </form>
    </>
  );
};
export default CategoryFilters;
