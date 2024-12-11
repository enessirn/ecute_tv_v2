import React, { useContext } from "react";
import PopularListContext from "../../context/PopularList";

function Header() {
  const {type, setType} = useContext(PopularListContext);
  return (
    <nav className="w-full h-20 flex items-center justify-between px-5 bg-black/45 absolute top-0 left-0 z-50 shadow-[0_35px_40px_15px_rgba(0,0,0,0.45)]">
      <div className="logo text-2xl md:text-4xl flex items-end font-extrabold text-primary select-none ">
        Ecute.TV <span className="text-sm animate-pulse text-red-800">V2</span>
      </div>
      <div className="flex gap-4 flex-row select-none">
        <button className={`${type ? 'bg-[#383838] text-white' : 'text-[#a5a59e]'} px-4 py-1 md:py-2 md:px-8 text-base md:text-lg cursor-pointer outline-none border-none rounded-[40px] font-normal`} onClick={() => setType(true)}>
          Series
        </button>
        <button className={`${type ? 'text-[#a5a59e]' : 'bg-[#383838] text-white'} px-4 py-1 md:py-2 md:px-8  text-base md:text-lg cursor-pointer outline-none border-none rounded-[40px] font-normal`} onClick={() => setType(false)}>
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
            className="size-5 md:size-6 text-transparent hover:text-primary hover:stroke-none cursor-pointer transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
            />
          </svg>
        </span>
      </div>
    </nav>
  );
}

export default Header;
