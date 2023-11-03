import React, { useState, useEffect } from 'react'
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import SearchResult from './SearchResult';


const SuggestionVideos = ({videoTitle}) => {

  const [suggVds, setSuggVds] = useState([]);
  console.log(videoTitle)

  useEffect(() => {
    getSuggestionVideos();
  }, [videoTitle]);

  const getSuggestionVideos = async() => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + videoTitle);
      const json = await data.json();
      // console.log(json);
      setSuggVds(json.items);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full">
      {suggVds?.map((vd) => (
        <SearchResult
          key={vd.id.videoId || vd.id.channelId}
          data={vd}
        />
      ))}
    </div>
  );
}

export default SuggestionVideos;