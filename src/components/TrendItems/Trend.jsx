import ButtonGroup from "./ButtonGroup";
import Carousel from "./Carousel";
import PopularListContext from "../../context/PopularList";
import React,{ useContext } from "react";
import PopularDetailContext from "../../context/PopularDetail";
import "./trend.css"
function Trend() {
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const { result,loading,dataIndex,type } = useContext(PopularListContext);

  const {data} = useContext(PopularDetailContext);
  const ScrooltoDown = () => {
    window.scrollBy(0, 300);
  }

  return (
    <div
      className={`select-none pt-20 w-full h-screen bg-slate-600 relative overflow-hidden !bg-no-repeat !bg-cover !bg-center`}
      style={{background: `url(${IMAGE_URL}${loading && result[dataIndex]?.backdrop_path})`}}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
      <div className="w-full absolute bottom-5 flex flex-row items-center justify-center ">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6 lg:size-10 absolute animate-bounce cursor-pointer z-50"
          onClick={ScrooltoDown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
        <div className="absolute top-5 z-20 shadow-[0px_0px_40px_100px_rgba(0,0,0,0.45)] w-full h-12"></div>
      </div>

      <div className="relative w-full lg:w-[80%] mx-0 md:mx-auto text-white pt-0 md:pt-20 px-0 md:px-10 flex flex-col md:flex-row">
        <div className="first-side max-w-56 md:max-w-96 mx-auto">
          <img
            src={`${IMAGE_URL}${result && result[dataIndex]?.poster_path}`}
            alt="poster-img"
            className="pointer-events-none rounded-2xl shadow-md md:w-[600px]"
          />
        </div>
        <div className="second-side flex flex-col gap-2 items-center md:items-start md:gap-3 text-lg md:text-[30px] px-4 lg:pl-24 w-full">
          <div className="text-2xl md:text-3xl font-semibold !select-all cursor-default pt-4 md:pt-0">
            {result && type ? result[dataIndex]?.name : result[dataIndex]?.title}
          </div>
          <span>{`${result && type ? String(result[dataIndex]?.first_air_date).slice(0,4) : String(result[dataIndex]?.release_date).slice(0,4)}`}</span>
          <span className="font-semibold text-lg md:block">
         {data && data.Genre}
          </span>
          <span className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="yellow"
              viewBox="0 0 24 24"
              stroke="none"
              className="size-10 rounded"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            {`${loading && result[dataIndex]?.vote_average.toString().slice(0,3)} /10`}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              className="w-12 ml-2"
              alt="IMDB"
            />
          </span>
          <div className="mt-2 max-h-48 md:h-full overflow-hidden hover:overflow-y-auto md:!overflow-hidden text-sm lg:text-lg w-1/2 md:w-full flex-wrap text-wrap custom-scrollbar">
          {result ? result[dataIndex]?.overview : <div className="animate-pulse rounded-full bg-black-700 h-10 w-10"></div> }
          </div>

          <div>
            <ButtonGroup />
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default React.memo(Trend);
