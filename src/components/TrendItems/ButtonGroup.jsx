import React, { useContext } from "react";
import DetailContext from "../../context/DetailContext";
import PopularListContext from "../../context/PopularList";
import LocalStorageContext from "../../context/LocalStorage";
import PopularDetailContext from "../../context/PopularDetail";
function ButtonGroup() {
  const { setClose } = useContext(DetailContext);
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  const { result, dataIndex, type } = useContext(PopularListContext);
  const { setHeading } = useContext(PopularDetailContext);
  const { setLocalItems, localItems } = useContext(LocalStorageContext);
  const checkFavorite = () => {
    const findData = localItems.find((el) => {
      if (
        el.title === result[dataIndex]?.name ||
        el.title === result[dataIndex]?.title
      ) {
        return true;
      } else {
        return false;
      }
    });
    return findData;
  };
  const addFavorite = () => {
    const findData = checkFavorite();
    if (!findData) {
      setLocalItems([
        ...localItems,
        {
          id: Number(localItems.length),
          img: `${IMAGE_URL}${result && result[dataIndex]?.poster_path}`,
          title: `${
            result && type ? result[dataIndex]?.name : result[dataIndex]?.title
          }`,
        },
      ]);
    } else {
      setLocalItems(
        localItems.filter((element) => {
          if (type) {
            return element.title !== result[dataIndex].name;
          } else {
            return element.title !== result[dataIndex].title;
          }
        })
      );
    }
  };
  return (
    <div className="flex flex-row gap-2">
      <button
        className="flex flex-row items-center text-sm bg-[#383838] px-3 py-3 min-[1300px]:px-12 min-[1300px]:py-6 rounded-xl gap-1 hover:shadow-2xl hover:bg-[#4b4b4b"
        onClick={addFavorite}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 pointer-events-none ${
            checkFavorite() && "fill-primary !stroke-none"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <span className="hidden md:!block pointer-events-none">Add to favorites</span>
      </button>
      <button
        className="flex flex-row items-center text-sm bg-[#c8143b] px-6 py-3 rounded-xl gap-1 hover:shadow-2xl hover:bg-[#e43232]"
        onClick={() => {
          setClose(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor "
          className="size-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        <span className="pointer-events-none">See the details</span>
      </button>
    </div>
  );
}

export default React.memo(ButtonGroup);
