"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Initialize with some sample data
    const initialData = {
      subjects: [
        {
          id: "1",
          name: "Математик",
          color: "#C11700",
        },
        {
          id: "2",
          name: "Монгол хэл",
          color: "#FF5A0E",
        },
        {
          id: "3",
          name: "Монгол бичиг",
          color: "#FFF500",
        },
        {
          id: "4",
          name: "Хими",
          color: "#418403",
        },
        {
          id: "5",
          name: "Нийгэм",
          color: "#0164B5",
        },
        {
          id: "6",
          name: "Газарзүй",
          color: "#23005E",
        },
      ]
    };
    
    setData(initialData);
  }, []);

  const addSubject = (newSubject) => {
    setData(prevData => ({
      ...prevData,
      subjects: [...prevData.subjects, {
        id: String(prevData.subjects.length + 1),
        ...newSubject
      }]
    }));
  };

  return (
    <DataContext.Provider value={{ data, setData, addSubject }}>
      {children}
    </DataContext.Provider>
  );
}
