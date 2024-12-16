import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import PopularListContext from "./PopularList";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const TMDB_GENRE_LIST = "/discover/movie?with_genres=18&primary_release_year=2014";
  const { type } = useContext(PopularListContext);
  const [categoryList, setCategoryList] = useState();
  const [categoryId,setCategoryId] = useState(`${type ? 10759 : 28}`)
  useEffect(() => {
    setCategoryId(`${type ? 10759 : 28}`)
  },[type])
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

  const values = { categoryList,setCategoryId,categoryId };

  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;
