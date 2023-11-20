import React from 'react'
import { SHIMMER_CARD_COUNT } from '../utils/constants'
import SearchResultShimmerCard from './SearchResultShimmerCard';

const SearchResultListShimmer = () => {
  return (
    <div className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto">
      {Array(SHIMMER_CARD_COUNT)
        .fill("")
        .map((e, index) => (
          <SearchResultShimmerCard key={index} />
        ))}
    </div>
  );
}

export default SearchResultListShimmer