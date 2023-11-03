import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_INFO_API } from "../utils/constants";

const ChannelInfo = ({channelId}) => {

    const [channelDetails, setChannelDetails] = useState(null);

    useEffect(() => {
        getChannelDetails();
    }, []);

    const getChannelDetails = async() => {
        const data = await fetch(YOUTUBE_CHANNEL_INFO_API+channelId);
        const json = await data.json();
        // console.log(json.items[0]);
        setChannelDetails(json.items[0]);
    }

    if(!channelDetails) return ;

  return (
    <div className="flex items-center my-4 gap-2">
      <img
        className="rounded-full h-10"
        src={
          channelDetails?.snippet?.thumnails?.high?.url ||
          channelDetails?.snippet?.thumbnails?.medium?.url
        }
        alt="avatar"
      />
      <div>
        <h5 className="text-sm sm:text-base font-medium">{channelDetails?.snippet?.title}</h5>
        <h6 className="text-xs text-neutral-300">
          {Intl.NumberFormat("en", { notation: "compact" }).format(
            channelDetails?.statistics?.subscriberCount
          )}{" "} subscribers
        </h6>
      </div>
      <button className='rounded-full text-neutral-900 text-xs sm:text-sm font-semibold hover:bg-neutral-300 bg-neutral-50 px-4 py-2'>
        Subscribe
      </button>
    </div>
  );
}

export default ChannelInfo