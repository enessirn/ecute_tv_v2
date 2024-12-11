import React, { useContext, useEffect } from 'react';
import PopularListContext from '../../context/PopularList';
import PopularDetailContext from '../../context/PopularDetail';

function Carousel() {
  const { result, loading, type,setDataIndex,dataIndex } = useContext(PopularListContext);
  const { setHeading,heading } = useContext(PopularDetailContext);

  useEffect(() => {
    console.log(heading && heading);
  },[heading])

  useEffect(() => {
    console.log(dataIndex)
  },[dataIndex])

  return (
    <div className={`absolute top-1/4 right-0 md:right-5 flex flex-col gap-2 items-end`}>
      {
        loading && result?.length > 0 ? ( 
          result.map((item, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              className="rounded-xl shadow-md w-[50%] min-[1300px]:w-[100%] h-24 object-cover brightness-50 hover:brightness-100 transition-all cursor-pointer"
              alt={`${type ? item.name : item.title}`}
              tabIndex = {index}
              onClick={(e) => {
                setHeading(e.target.alt);
                setDataIndex(e.target.tabIndex);
                
              }}
            />
          ))
        ) : (
          <div className="animate-pulse">Loading</div> 
        )
      }
    </div>
  );
}

export default Carousel;
