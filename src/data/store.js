import { useState, useEffect } from "react";
export const buildQueryString = (newQueryParams) => {
  const urlParams = new URLSearchParams(window.location.search);
  Object.entries(newQueryParams).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      urlParams.delete(key);
    } else if (Array.isArray(value)) {
      urlParams.delete(key);
      value.forEach((v) => urlParams.append(key, v));
    } else {
      urlParams.set(key, value);
    }
  });
  return urlParams.toString() ? `?${urlParams}` : "";
};

export const fetchData = async (queryParam) => {
  try {
    const response = await fetch(`/api/search${queryParam ? queryParam : ""}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchSingleData = async (queryParam) => {
  try {
    const response = await fetch(`/api/singleEntity/${queryParam}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
const breakpoints = {
  xs: 450,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("");

  useEffect(() => {
    const calculateBreakpoint = () => {
      const width = window.innerWidth;
      const matchedBreakpoint =
        Object.keys(breakpoints).find((key) => width < breakpoints[key]) ||
        "2xl";
      setBreakpoint(matchedBreakpoint);
    };

    calculateBreakpoint();
    window.addEventListener("resize", calculateBreakpoint);
    return () => window.removeEventListener("resize", calculateBreakpoint);
  }, []);

  return breakpoint;
};
