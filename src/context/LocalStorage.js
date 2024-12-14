import React, { createContext, useEffect, useState } from "react";

const LocalStorageContext = createContext();

export function LocalStorageProvider({ children }) {
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("addList");
    if (savedData) {
      setLocalItems(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addList", JSON.stringify(localItems));
  }, [localItems]);

  const values = { localItems, setLocalItems };

  return (
    <LocalStorageContext.Provider value={values}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export default LocalStorageContext;
