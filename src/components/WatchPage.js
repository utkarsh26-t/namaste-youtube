import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {collapseMenu} from "../utils/appSlice"
import { useSearchParams } from 'react-router-dom'
import CommentsSection from './CommentsSection'
import VideoDescription from './VideoDescription'
import LiveChat from './LiveChat'
import SuggestionVideos from './SuggestionVideos'

const WatchPage = () => {

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");


  useEffect(() => {
    dispatch(collapseMenu());
  }, []);

  // h-[35vh] sm:h-[70vh]

  return (
    <div className="grid grid-cols-12 sm:w-11/12 mx-auto">
      {/* Left Section(Containing video & comment in column order) */}
      <div className="flex flex-col col-span-12 lg:col-span-8">
        {/* Video section */}
        <section className="w-full aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </section>

        {/* Video description section */}
        <VideoDescription videoId={videoId}/>

        {/* Comments on video section */}
        <CommentsSection videoId={videoId} />
      </div>

      {/* Right section(Containing related Videos) */}
      <div className="col-span-12 lg:col-span-4 mx-2 sm:mx-4">
        <LiveChat />
        {/* <SuggestionVideos videoTitle={videoTitle}/> */}
      </div>
    </div>
  );
}

export default WatchPage