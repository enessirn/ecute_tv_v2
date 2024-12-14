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

  const options = {
    method: "GET",
    url: `https://youtube-data-api6.p.rapidapi.com/${heading && heading}+official+trailer+watch`,
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_YOUTUBE_KEY}`,
      "X-RapidAPI-Host": `${process.env.REACT_APP_YOUTUBE_HOST}`,
    },
  };

  useEffect(() => {
    const getResult = async () => {
      try {
        const getData = await axios.request(options);
        setVideoID(getData?.data && getData.data[0].id);
      } catch (error) {
        console.error(error);
      }
    };
    getResult();
  }, [heading,type]);

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
