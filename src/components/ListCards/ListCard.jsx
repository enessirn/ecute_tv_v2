import React, { useContext, useEffect, useState } from "react";
import "./listcard.css";
import axios from "axios";
import PopularListContext from "../../context/PopularList";
import PopularDetailContext from "../../context/PopularDetail";
import DetailContext from "../../context/DetailContext";

function ListCard({ urlValue, header }) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const [comingSoonData, setComingSoonData] = useState([]);
  const { type } = useContext(PopularListContext);
  const { setHeading } = useContext(PopularDetailContext);
  const { setClose } = useContext(DetailContext);
  const scrollContent = React.createRef();
  const scrollLeft = () => {
    if (scrollContent.current) {
      scrollContent.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContent.current) {
      scrollContent.current.scrollLeft += 200; 
    }
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_POPULAR_LIST_TOKEN}`,
    },
  };

  const handleClick = (e) => {
    setHeading(e.target.alt);
    setClose(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const getResult = await axios.get(urlValue, options);
        if (getResult) {
          setComingSoonData(getResult.data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [type]);

  return (
    <div className="flex flex-col w-full justify-between p-[50px] select-none">
      <div className="w-[95%] border-b-2 border-red-700/60 text-4xl px-6">
        {header}
      </div>
      <div
        className="px-6 snap-x snap-mandatory overflow-x-hidden hover:overflow-x-scroll flex flex-row gap-4 w-[95%] my-8 transition-all custom-scrollbar py-8 scroll-smooth"
        ref={scrollContent}
      >
        <button
          className="absolute bg-red-700/60 px-4 py-2 left-0 rounded-2xl mt-40 hover:bg-red-700 shadow-red-700"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 pointer-events-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <button
          className="absolute bg-red-700/60 px-4 py-2 right-2 md:right-20 rounded-2xl mt-40 hover:bg-red-700 shadow-red-700"
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

        {comingSoonData &&
          comingSoonData.map((item, i) => {
            return item.poster_path ? (
              <div key={i} className="snap-start min-w-60">
                <img
                  src={`${IMAGE_URL}${item.poster_path}`}
                  className="rounded-lg hover:shadow-[0px_0px_40px_10px_rgba(255,0,0,0.45)] cursor-pointer"
                  alt={type ? item.name : item.title}
                  onClick={(e) => handleClick(e)}
                />
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
}

export default ListCard;
