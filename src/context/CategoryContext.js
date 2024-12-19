import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import PopularListContext from "./PopularList";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const { type } = useContext(PopularListContext);
  const [categoryList, setCategoryList] = useState();
  const [categoryId, setCategoryId] = useState(`${type ? 10759 : 28}`);
  const [categoryContent, setCategoryContent] = useState(null);
  useEffect(() => {
    setCategoryId(`${type ? 10759 : 28}`);
  }, [type]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_POPULAR_LIST_TOKEN}`,
    },
  };
  useEffect(() => {
    const getResult = async () => {
      try {
        const getData = await axios.get(
          `https://api.themoviedb.org/3/genre/${
            type ? "tv" : "movie"
          }/list?language=en`,
          options
        );
        setCategoryList(getData.data.genres);
      } catch (error) {
        console.error(error);
      }
    };
    getResult();
  }, [type]);

  useEffect(() => {
    const getResult = async () => {
      try {
        const getList = await axios.get(`${TMDB_BASE_URL}/discover/${type ? "tv" : "movie"}?with_genres=${categoryId}&api_key=bf3cd4782b9e4403874602094b3d319c&page=1`);
        setCategoryContent(getList.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getResult();
  }, [categoryId, type]);

  const values = { categoryList, setCategoryId, categoryId, categoryContent };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
}

export default React.memoCategoryContext;
