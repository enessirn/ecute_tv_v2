import React, { useContext } from 'react'
import DetailContext from '../../context/DetailContext'
import PopularDetailContext from '../../context/PopularDetail';

function YouTubeIframe() {
  const {videoID} = useContext(DetailContext);
  const { heading } = useContext(PopularDetailContext);
  const {  desc } = useContext(DetailContext);
  
  return (
    // videoID && (
      <iframe
        className="w-full h-[55%] absolute top-0 select-none"
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1&controls=0&fs=0&iv_load_policy=3&loop=1&playlist=${videoID}&rel=0&showinfo=0`}
        allow="autoplay"
        title={heading}
      ></iframe>
    // ) : (
    //   <>
    //     <img
    //       className="w-full h-[55%] object-contain object-center"
    //       src={desc.Poster}
    //       alt={heading}
    //     />
    //   </>
    // )
  );
  
}

export default YouTubeIframe
