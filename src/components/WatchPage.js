import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {collapseMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
import CommentsSection from './CommentsSection'
import VideoDescription from './VideoDescription'
import LiveChat from './LiveChat'

const WatchPage = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  //From the video details, info to extract
  //

  useEffect(() => {
    dispatch(collapseMenu());
  }, []);


  return (
    <div className="grid grid-cols-12 sm:w-11/12 mx-auto">
      {/* Left Section(Containing video & comment in column order) */}
      <div className="flex flex-col col-span-12 lg:col-span-8">
        {/* Video section */}
        <section className='w-full h-[40vh] sm:h-[75vh]'>
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=0"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </section>

        {/* Video description section */}
        <VideoDescription videoId={videoId}/>

        {/* Comments on video section */}
        <CommentsSection videoId={videoId}/>
      </div>

      {/* Right section(Containing related Videos) */}
      <LiveChat/>
    
    </div>
  );
}

export default WatchPage