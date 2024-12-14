import React,{ createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import PopularListContext from "./PopularList";

const PopularDetailContext = createContext();

export function PopularDetailProvider({ children }) {
  const { loading, result, type } = useContext(PopularListContext);
  const API_URL = process.env.REACT_APP_OMDB_URL;
  const API_KEY = process.env.REACT_APP_OMBDB_KEY;
  const [data, setData] = useState(undefined);
  const [loaded, setLoaded] = useState(false);
  const [heading, setHeading] = useState(undefined);

  useEffect(() => {
    if (result.length > 0 && loading && heading !== null) {
      setHeading(type ? result[0]?.name : result[0]?.title);
    }
  }, [result, type, loading]);
  useEffect(() => {
    const getPopularDetail = async () => {
      try {
        if (loading === true && result.length > 0) {
          const getResult = await axios.get(
            `${API_URL}${API_KEY}t=${heading && heading}&r=json`
          );
          if (heading) {
            setData(getResult && getResult.data && getResult.data);
            setLoaded(true);
          }

        }
      } catch (error) {
        console.log(error);
      }
    };

    getPopularDetail();
  }, [heading]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data, loaded]);

  let value = {
    data,
    heading,
    setHeading,
  };

  return (
    <PopularDetailContext.Provider value={value}>
      {children}
    </PopularDetailContext.Provider>
  );
}

export default PopularDetailContext;
