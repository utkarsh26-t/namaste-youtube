import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {collapseMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
import { VIDEO_DETAILS_API } from '../utils/constants'

const WatchPage = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoDetails, setVideoDetails] = useState({});

  useEffect(() => {
    dispatch(collapseMenu());
    getVideoDetails();
  }, []);

  const getVideoDetails = async() => {
    const data = await fetch(VIDEO_DETAILS_API+videoId);
    const json = await data.json();

    console.log(json);
    setVideoDetails(json?.items[0]);
  }

  return (
    <div className="">
      {/* Left Section(Containing video & comment in column order) */}
      <div className="flex flex-col">
        {/* Video section */}
        <iframe
          width="1000"
          height="500"
          src={
            "https://www.youtube.com/embed/" +
            videoId +
            "?autoplay=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Video description section */}
          

        {/* Comments on video section */}
      </div>

      {/* Right section(Containing related Videos) */}
    </div>
  );
}

export default WatchPage