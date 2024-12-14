import React, { useContext } from "react";
import ListCard from "../components/ListCards/ListCard";
import PopularListContext from "../context/PopularList";

function List() {
  const { type } = useContext(PopularListContext);
  return (
    <div className="min-h-screen w-full bg-black text-white">

      <ListCard
        header={`${type ? "Airing Today" : "Now Playing"}`}
        urlValue={`${
          type
            ? "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"
            : "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
        }`}
      />
      <ListCard
        header={`${type ? "On The Air" : "Up Coming"}`}
        urlValue={`${
          type
            ? "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=2"
            : "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        }`}
      />
      <ListCard
        header={"Popular"}
        urlValue={`https://api.themoviedb.org/3/${
          type ? "tv" : "movie"
        }/popular?language=en-US&page=1`}
      />
      <ListCard
        header={"Top Rated"}
        urlValue={`https://api.themoviedb.org/3/${
          type ? "tv" : "movie"
        }/top_rated?language=en-US&page=1`}
      />
    </div>
  );
}

export default List;
