import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_CHANNEL_INFO_API } from '../utils/constants';
import moment from "moment"
import Duration from './Duration';


const VideoCard = ({video}) => {

  // console.log(video)
  const {snippet, statistics} = video;
  const {viewCount} = statistics;
  const {channelTitle, thumbnails, title, channelId, publishedAt} = snippet;

  const [channelAvatar, setChannelAvatar] = useState("");

  useEffect(() => {
    //To get channel avatar, we need to make other api call
    getChannelAvatar();
  }, []);

  const getChannelAvatar = async() => {
    try{
      const data = await fetch(YOUTUBE_CHANNEL_INFO_API + channelId);
      const json = await data.json();

      // console.log(json.items[0]);
      const avatarBasePath = json?.items[0]?.snippet?.thumbnails;
      setChannelAvatar(
        avatarBasePath?.high?.url ||
          avatarBasePath?.medium?.url ||
          avatarBasePath?.default?.url
      );
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <Link to={"/watch?v=" + video.id}>
      <div className="p-4">
        <figure
          className='relative'
        >
          <img
            alt="thumbnail"
            src={thumbnails?.maxres?.url || thumbnails?.medium?.url}
            className="rounded-2xl w-full mb-4"
          />
          <Duration duration={video.contentDetails.duration} />
        </figure>
        <div className="flex gap-2">
          <img className="rounded-full h-8" src={channelAvatar} alt="avatar" />
          <div>
            <h1 className="text-[0.98rem] font-semibold mb-1">
              {title.length > 60 ? title.slice(0, 60) + "..." : title}
            </h1>
            <h6 className="text-sm text-neutral-300">{channelTitle}</h6>
            <span className="text-sm text-neutral-300">
              {Intl.NumberFormat("en", { notation: "compact" }).format(
                viewCount
              )}{" "}
              views
            </span>
            <span> &#8226; </span>
            <span className="text-sm text-neutral-300">
              {moment(publishedAt).fromNow()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}


//Higher Order Component Practice
// export const AdVideoCard = ({video}) => {
//   return (
//     <div className='border-2 border-red-300 p-2'>
//       <VideoCard video={video}/>
//     </div>
//   )
// }

export default VideoCard