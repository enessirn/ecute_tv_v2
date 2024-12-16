import React, { useContext, useEffect } from "react";
import PopularListContext from "../../context/PopularList";
import PopularDetailContext from "../../context/PopularDetail";

function Carousel() {
  const { result, loading, type, setDataIndex, dataIndex } =
    useContext(PopularListContext);
  const { setHeading } = useContext(PopularDetailContext);

  useEffect(() => {
    setDataIndex(0);
  }, [type]);

  return (
    <div
      className={`absolute top-1/4 right-0 md:right-5 flex flex-col gap-2 items-end`}
    >
      {loading && result?.length > 0 ? (
        result.map((item, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            className={`${
              dataIndex === index ? "brightness-100 !shadow-[0px_0px_40px_10px_rgba(255,0,0,0.45)] animate-pulse saturate-100" : "saturate-[0.25] brightness-50"
            } rounded-xl shadow-md w-[50%] min-[1300px]:w-[100%] h-24 object-cover  hover:brightness-100 hover:shadow-[0px_0px_40px_10px_rgba(255,0,0,0.45)] transition-all cursor-pointer`}
            alt={`${type ? item && item.name : item && item.title}`}
            tabIndex={index}
            onClick={(e) => {
              setHeading(item?.name || item?.title || e.target.alt);
              setDataIndex(e.target.tabIndex);
            }}
          />
        ))
      ) : (
        <div className="animate-pulse">Loading</div>
      )}
    </div>
  );
}

export default React.memo(Carousel);
