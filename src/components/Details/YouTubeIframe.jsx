import React, { useContext } from 'react'
import DetailContext from '../../context/DetailContext'
import PopularDetailContext from '../../context/PopularDetail';

function YouTubeIframe() {
  const {videoID} = useContext(DetailContext);
  const { heading } = useContext(PopularDetailContext);
  return (
    videoID ?
    <iframe
    className="w-full h-[55%] absolute top-0 select-none"
    src={`https://www.youtube.com/embed/${videoID}?autoplay=1&controls=0&fs=0&iv_load_policy=3&loop=1&rel=0&showinfo=0`}
    title={heading}
  ></iframe> : null

  )
}

export default YouTubeIframe
