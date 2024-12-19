import React, { useContext } from "react";
import CategoryContext from "../../context/CategoryContext";
import PopularListContext from "../../context/PopularList";
import DetailContext from "../../context/DetailContext";
import PopularDetailContext from "../../context/PopularDetail";

function CategoryList() {
  const { categoryContent } = useContext(CategoryContext);
  const { type } = useContext(PopularListContext);
  const {setClose} = useContext(DetailContext);
  const {setHeading} = useContext(PopularDetailContext)
  const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className=" flex flex-row flex-wrap gap-4 bg-black p-[50px] w-full overflow-hidden h-full justify-start items-center">
      {categoryContent ?
        categoryContent.map((item, i) =>  {
          return item.poster_path ? (
            <img
            key={i}
            className="w-60 rounded-lg hover:shadow-[0px_0px_40px_10px_rgba(255,0,0,0.45)] cursor-pointer"
            src={`${IMAGE_URL}${item.poster_path}`}
            alt={type ? item.name : item.title}
            onClick={() => {
              setHeading(type ? item?.name : item?.title)
              setClose(false)
            }}
          />
          ) : null
        }) : 'Loading'}
    </div>
  );
}

export default React.memo(CategoryList);
