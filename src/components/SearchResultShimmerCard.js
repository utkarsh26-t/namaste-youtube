import React from 'react'

const SearchResultShimmerCard = () => {
    return (
      <article className="animate-pulse flex flex-col sm:flex-row w-full mb-4 h-80 sm:h-56">
        <div className="sm:rounded-lg sm:basis-1/3 basis-2/3 sm:h-full bg-neutral-800"></div>
        <section className="px-2 sm:basis-2/3 basis-1/3">
          <div className="h-10 bg-neutral-800 w-3/4 my-2 rounded-lg"></div>
          <div className="h-6 w-1/5 bg-neutral-800 rounded-lg"></div>
          <div className="h-6 bg-neutral-800 w-1/2 my-2 rounded-lg"></div>
        </section>
      </article>
    );
}

export default SearchResultShimmerCard