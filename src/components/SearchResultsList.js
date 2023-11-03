import React, {useEffect, useState} from 'react'
import {useSearchParams} from "react-router-dom"
import {YOUTUBE_SEARCH_RESULTS_API} from "../utils/constants"
import SearchResult from './SearchResult';

const SearchResultsList = () => {

  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const q = searchParams.get("search_query");
  // console.log(searchParams.get("search_query"));

  useEffect(() => {
    getResults();
  }, [searchParams]);

  const getResults = async () => {
    try{
      const data = await fetch(YOUTUBE_SEARCH_RESULTS_API + q);
      const json = await data.json();
      console.log(json);

      setResults(json.items);
    }
    catch(err){
      console.log(err);
    }
    
  }

  if(results?.length === 0) return null;

  return (
    <div className='w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto'>
      {results?.map(result => <SearchResult key={result.id.videoId || result.id.channelId} data={result}/>)}
    </div>
  )
}

export default SearchResultsList