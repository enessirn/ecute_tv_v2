import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const PopularListContext = createContext();

export function PopularListProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [type, setType] = useState(true);
  const [dataIndex, setDataIndex] = useState(0);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_POPULAR_LIST_TOKEN}`,
    },
  };

  useEffect(() => {
    const getPopularList = async () => {
      try {
        if (type !== undefined || type !== "" || type !== null) {
          const getResult = await axios.get(
            `https://api.themoviedb.org/3/${
              type ? "tv" : "movie"
            }/top_rated?language=en-US&page=1`,
            options
          );

          setLoading(true);
          setResult(getResult.data.results.slice(0, 5));
          console.log(result);
        }
      } catch (error) {
        console.error(error);
      } finally {
        console.log("Api loaded");
      }
    };
    getPopularList();
  }, [loading, type]);

  let value = {
    loading,
    result,
    type,
    setType,
    setDataIndex,
    dataIndex,
  };

  return (
    <PopularListContext.Provider value={value}>
      {children}
    </PopularListContext.Provider>
  );
}

export default PopularListContext;
