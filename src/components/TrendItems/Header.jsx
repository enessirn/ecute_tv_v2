import React, { use, useContext, useEffect, useState } from "react";
import PopularListContext from "../../context/PopularList";
import "./header.css";
import LocalStorageContext from "../../context/LocalStorage";
import PopularDetailContext from "../../context/PopularDetail";
import DetailContext from "../../context/DetailContext";
function Header() {
  const { type, setType } = useContext(PopularListContext);
  const [open, setOpen] = useState(false);
  const { localItems, setLocalItems } = useContext(LocalStorageContext);
  const { setHeading } = useContext(PopularDetailContext);
  const { setClose } = useContext(DetailContext);

  return (
    <nav className="w-full h-20 flex items-center justify-between px-5 bg-black/45 absolute top-0 left-0 z-50 shadow-[0_35px_40px_15px_rgba(0,0,0,0.45)]">
      <div className="logo text-2xl md:text-4xl flex items-end font-extrabold text-primary select-none ">
        Ecute.TV <span className="text-sm animate-pulse text-red-800">V2</span>
      </div>
      <div className="flex gap-4 flex-row select-none">
        <button
          className={`${
            type ? "bg-[#383838] text-white" : "text-[#a5a59e]"
          } px-4 py-1 md:py-2 md:px-8 text-base md:text-lg cursor-pointer outline-none border-none rounded-[40px] font-normal`}
          onClick={() => setType(true)}
        >
          Series
        </button>
        <button
          className={`${
            type ? "text-[#a5a59e]" : "bg-[#383838] text-white"
          } px-4 py-1 md:py-2 md:px-8  text-base md:text-lg cursor-pointer outline-none border-none rounded-[40px] font-normal`}
          onClick={() => setType(false)}
        >
          Movies
        </button>
      </div>
      <div>
        <span className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#a5a59e"
            fill="currentColor"
            className="size-5 md:size-6 text-transparent hover:text-primary hover:stroke-none cursor-pointer transition-all "
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
            />
          </svg>
        </span>
      </div>
      <div
        className={`close-tab ${
          open ? "block" : "hidden"
        } absolute z-50 right-28 top-[22rem] bg-red-900 p-3 rounded-full cursor-pointer hover:bg-red-800 hover:shadow-red-800 shadow-2xl border-2 border-white shadow-white select-none`}
        onClick={() => setOpen(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-8 pointer-events-none "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div
        className={`absolute right-5 z-40 text-white bg-red-600/45 w-60 h-80 top-14 rounded-lg ${
          open ? "!flex" : "!hidden"
        } flex-col overflow-auto custom-scrollbar`}
      >
        {localItems.length !== 0 ? (
          localItems.map((item, i) => {
            return (
              <div
                key={i}
                className="flex flex-row border-b-2 justify-between gap-4 items-center py-2 cursor-pointer hover:bg-red-700 w-full rounded-lg px-2 "
                onClick={() => {
                  setHeading(item.title);
                  setClose(false);
                }}
              >
                <img
                  className="w-14 h-14 rounded-full object-center select-none pointer-events-none"
                  src={`${item && item.img}`}
                  alt={`${item && item.title}`}
                />
                <span className="select-none overflow-hidden text-sm text-center pointer-events-none">
                  {item && item.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 min-w-[1.5rem]"
                  onClick={() =>
                    setLocalItems(
                      localItems.filter(
                        (element) => element.title !== item.title
                      )
                    )
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            );
          })
        ) : (
          <p className="text-center p-4">Come on add any somethings</p>
        )}
      </div>
    </nav>
  );
}

export default React.memo(Header);
