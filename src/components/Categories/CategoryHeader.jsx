import React, { createRef, useContext } from "react";
import CategoryContext from "../../context/CategoryContext";
import "./category.css";
function CategoryHeader() {
  const { categoryList,setCategoryId,categoryId } = useContext(CategoryContext);
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
  return (
    <div
      className="select-none px-20 bg-black text-white lg:px-6 snap-x snap-mandatory overflow-hidden hover:overflow-x-auto flex flex-row items-center lg:justify-center gap-4 w-full transition-all custom-scrollbar scroll-smooth border-b-4 border-primary py-4"
      ref={scrollContent}
    >
      <button
        className="absolute block lg:hidden bg-red-700/60 px-4 py-2 left-0 rounded-2xl hover:bg-red-700 shadow-red-700"
        onClick={scrollLeft}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      <button
        className="absolute block lg:hidden bg-red-700/60 px-4 py-2 right-2 md:right-20 rounded-2xl hover:bg-red-700 shadow-red-700"
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
      {categoryList &&
        categoryList.map((item, i) => (
          <span className={`${categoryId == item.id && 'text-primary'} cursor-pointer text-xl hover:text-primary`} onClick={() => setCategoryId(item.id)} key={i} datatype={item.id}>
            {item.name}
          </span>
        ))}
    </div>
  );
}

export default React.memo(CategoryHeader);
