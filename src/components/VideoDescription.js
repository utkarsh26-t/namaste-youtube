import React, {useState, useEffect} from 'react'
import { VIDEO_DETAILS_API } from "../utils/constants";
import moment from "moment";
import ChannelInfo from './ChannelInfo';
import {PiShareFatBold} from "react-icons/pi"
import {LiaDownloadSolid} from "react-icons/lia"
import {TfiMoreAlt} from "react-icons/tfi"
import { BiLike, BiDislike } from "react-icons/bi";


const VideoDescription = ({videoId}) => {

  const [videoDetails, setVideoDetails] = useState(null);
  const [expandDesc, setExpandDesc] = useState(false);


  useEffect(() => {
    getVideoDetails();
  }, []);

  const getVideoDetails = async() => {
    try {
      const data = await fetch(VIDEO_DETAILS_API + videoId);
      const json = await data.json();
      // console.log(json.items[0]);
      setVideoDetails(json?.items[0]);
      
    } catch (err) {
      console.log(err);
    }
  };

  if(!videoDetails) return;
  
  
  return (
    <section>
      <h1 className="sm:text-lg font-medium mt-4 w-11/12 mx-auto sm:w-full">
        {videoDetails?.snippet?.title}
      </h1>

      <div className="flex flex-col md:flex-row  justify-between py-2 w-11/12 mx-auto sm:w-full">
        <ChannelInfo channelId={videoDetails?.snippet?.channelId} />
        <div className="text-xs sm:text-sm flex flex-wrap items-center gap-2 sm:gap-1 md:gap-2">
          <button className="flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2">
            <span>
              <BiLike />
            </span>
            <span>
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                videoDetails?.statistics?.likeCount
              )}
            </span>
            <span className="border-l-2 border-neutral-700 pl-2">
              <BiDislike />
            </span>
          </button>
          <button className="flex items-center rounded-full bg-neutral-900 px-4 py-2">
            <span>
              <PiShareFatBold />
            </span>
            <span>Share</span>
          </button>
          <button className="flex items-center rounded-full bg-neutral-900 px-4 py-2">
            <span>
              <LiaDownloadSolid />
            </span>
            <span>Download</span>
          </button>
          <button className="rounded-2xl bg-neutral-900 p-2">
            <span>
              <TfiMoreAlt />
            </span>
          </button>
        </div>
      </div>

      <div className="text-sm bg-neutral-800 rounded-lg px-4 py-2 w-11/12 mx-auto sm:w-full">
        <span className="font-semibold">
          {Intl.NumberFormat("en", { notation: "compact" }).format(
            videoDetails.statistics.viewCount
          )}{" "}
          views
        </span>
        <span className="ms-2 font-semibold">
          {moment(videoDetails.snippet.publishedAt).fromNow()}
        </span>
        <div className="whitespace-pre-wrap break-words">
          {!expandDesc
            ? videoDetails.snippet.description.slice(0, 200) + "..."
            : videoDetails.snippet.description}
          <button
            onClick={() => setExpandDesc((prev) => !prev)}
            className="block font-semibold mt-2"
          >
            {expandDesc ? "Show less" : "more"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default VideoDescription;