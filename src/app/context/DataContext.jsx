"use client";
import React from "react";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://serpapi.com/search.json?engine=home_depot&q=furniture"
      );
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
