import React from 'react'
import Suggestion from './Suggestion';

const SearchSuggestions = ({searchSuggestions}) => {

    if(searchSuggestions.length === 0) return null;

  return (
    <section
      className="z-10 absolute top-12 bg-neutral-900 w-1/2 rounded-2xl py-4 border-b-2 border-fuchsia-400
     shadow-lg shadow-neutral-800"
    >
      <ul>
        {searchSuggestions?.map((suggestion, index) => (
          <Suggestion key={index} suggestion={suggestion} />
        ))}
      </ul>
    </section>
  );
}

export default SearchSuggestions