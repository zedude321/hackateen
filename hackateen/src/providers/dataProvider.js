"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authProvider";
import { getClass } from "@/api/class";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const value = {
    data,
    setData,
  };

  useEffect(() => {
    if (user) {
      const func = async () => {
        const data = await getClass({
          classId: user?.classes[0],
        });

        setData(data.data);
        console.log(data.data);
      };

      func();
    }
  }, [user]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within an DataProvider");
  }
  return context;
};
