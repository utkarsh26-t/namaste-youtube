import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard, {AdVideoCard} from './VideoCard';
import { useSelector } from 'react-redux';
import ShimmerMain from './ShimmerMain';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
 
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async() => {
    try{
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      // console.log(json.items[0]);
      setVideos(json.items);
    }
    catch(err){
      console.log(err);
    }
  }

  return videos.length === 0? <ShimmerMain/> : (
    <div className={`grid ${isMenuOpen? "grid-cols-3":"grid-cols-4"}`}>
      {/* {videos[0] && <AdVideoCard video={videos[0]}/>} */}
      {videos?.map(video => <VideoCard key={video.id} video={video}/>)}
    </div>
  )
}

export default VideoContainer