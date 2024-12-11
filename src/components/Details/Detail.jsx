import React from "react";
import YouTubeIframe from "./YouTubeIframe";

function Detail() {
  return (
    <div className="w-full">
      <div className="detail-main absolute z-50 inset-0 backdrop-blur-min-[1300px] bg-black/50"></div>
      <div className="detail-main w-full h-screen absolute text-white top-0 z-[100] select-none">
        <div className="w-full min-[1300px]:w-[70%] bg-[rgba(24,24,24,0.85)] h-full min-[1300px]:h-[90%] rounded-xl translate-x-0 translate-y-0 min-[1300px]:translate-x-[15%] min-[1300px]:translate-y-[5%]">
          <span className="detail-main block absolute top-5 right-5 z-50 cursor-pointer hover:text-red-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 pointer-events-none"
            >
              <path
                className="pointer-events-none"
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <YouTubeIframe />
          <div className="details-content flex flex-row justify-between">
            <div className="detail-header text-white absolute z-50 top-[55%] left-5 flex flex-col ">
              <div className="flex flex-row px-4 ml-2 !select-text py-2 gap-2">
                <span className="text-3xl min-[1300px]:text-5xl  uppercase font-extrabold !cursor-default ">
                  Breaking Bad
                </span>
                <button className="flex flex-row border border-white items-center justify-center text-sm w-[30px] h-[30px] min-[1300px]:text-base min-[1300px]:w-[50px] min-[1300px]:h-[50px] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>

              <div className="ml-2 px-4 flex flex-row gap-4 min-[1300px]:gap-6 text-gray-300">
                <span className="text-sm min-[1300px]:text-base">2008–2013</span>
                <span className="text-sm min-[1300px]:text-base">5 season</span>
                <span className="border border-gray-300 text-gray-300 rounded-min-[1300px] font-semibold px-1 min-[1300px]:px-2 text-sm">
                  HD
                </span>
              </div>
              <div className="ml-2 px-4 flex flex-row items-center gap-2 text-gray-300 mt-2">
                <span className="text-lg">9.5/10</span>
                <span className="text-sm">| 2,241,784 votes</span>
                <img
                  className="w-8 min-[1300px]:w-12 ml-2"
                  alt="IMDB"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDBB_Logo_2016.svg.png"
                />
              </div>
              <span className="px-4 ml-2 w-1/2 mt-4 text-sm min-[1300px]:text-base">
                A chemistry teacher diagnosed with inoperable lung cancer turns
                to manufacturing and selling methamphetamine with a former
                student to secure his family's future
              </span>
            </div>

            <div className="detail-header w-[30%] text-white absolute top-[55%] right-5 flex flex-col p-0 min-[1300px]:p-4 py-2">
              <div className="flex flex-col text-sm min-[1300px]:text-base min-[1300px]:flex-row gap-1 min-[1300px]:gap-2">
                <span className="text-gray-400">Writer:</span>
                <span className="text-gray-300">Vince Gilligan</span>
              </div>
              <div className="flex text-sm min-[1300px]:text-base flex-col min-[1300px]:flex-row gap-1 min-[1300px]:gap-2">
                <span className="text-gray-400">Actors:</span>
                <span className="text-gray-300 ">
                  Bryan Cranston, Aaron Paul, Anna Gunn
                </span>
              </div>
              <div className="flex text-sm min-[1300px]:text-base flex-col min-[1300px]:flex-row gap-1 min-[1300px]:gap-2">
                <span className="text-gray-400">Genres:</span>
                <span className="text-gray-300">Crime, Drama, Thriller</span>
              </div>
              <div className="flex text-sm min-[1300px]:text-base flex-col min-[1300px]:flex-row gap-1 min-[1300px]:gap-2">
                <span className="text-gray-400">Languages:</span>
                <span className="text-gray-300">
                  English, Spanish, Vietnamese
                </span>
              </div>
              <div className="flex text-sm min-[1300px]:text-base flex-col min-[1300px]:flex-row gap-1 min-[1300px]:gap-2">
                <span className="text-gray-400">Awards:</span>
                <span className="text-gray-300">
                  Won 16 Primetime Emmys. 169 wins & 269 nominations total
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
