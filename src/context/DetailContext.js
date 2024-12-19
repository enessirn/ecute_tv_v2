import React, { createContext, useContext, useEffect, useState } from "react";
import PopularDetailContext from "./PopularDetail";
import axios from "axios";
import PopularListContext from "./PopularList";
const DetailContext = createContext();

export function DetailProvider({ children }) {
  const [close, setClose] = useState(true);
  const { heading } = useContext(PopularDetailContext);
  const {type} = useContext(PopularListContext)
  const [videoID, setVideoID] = useState(null);
  const [desc,setDesc] = useState(undefined);
  const [load,setLoad] = useState(false)
  const API_URL = process.env.REACT_APP_OMDB_URL;
  const API_KEY = process.env.REACT_APP_OMBDB_KEY;


  useEffect(() => {
    if (close === false) {
      const getResult = async () => {
        try {
          const getData = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              part: 'id,snippet',
              q: `${heading && heading} official trailer watch`,
              maxResults: 1,
              key: process.env.REACT_APP_YOUTUBE_KEY,
            }
          });
          setVideoID(getData && getData.data.items[0]?.id.videoId)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      getResult();
    }
  }, [heading, type,close]);
  

  useEffect(() => {
    if (videoID) {
      console.log(videoID);
    }
  }, [videoID]);

    useEffect(() => {
    const getPopularDetail = async () => {
      try {
        if (heading) {
          const getResult = await axios.get(
            `${API_URL}${API_KEY}t=${heading}&r=json`
          );
          if (heading) {
            setDesc(getResult && getResult.data && getResult.data);
            setLoad(true);
          }

        }
      } catch (error) {
        console.log(error);
      }
    };

    getPopularDetail();
  }, [heading]);
  const values = { setClose, close,videoID,desc,load };
  return (
    <DetailContext.Provider value={values}>{children}</DetailContext.Provider>
  );
}
export default DetailContext;
