import React from 'react'

const ShimmerCard = () => {
    return (
      <article className="animate-pulse col-span-1 h-80 m-2">
        <div className="rounded-lg h-2/3 bg-neutral-800"></div>
        <section className="w-full flex gap-2">
          <span className="h-10 w-10 my-2 rounded-full bg-neutral-800"></span>
          <span className='grow'>
            <div className="h-6 bg-neutral-800 w-3/4 my-2 rounded-sm"></div>
            <div className="h-6 bg-neutral-800 w-1/2 my-2 rounded-sm"></div>
          </span>
        </section>
      </article>
    );
}

export default ShimmerCard