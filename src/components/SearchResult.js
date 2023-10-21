import React from 'react'
import { Link } from 'react-router-dom';
import moment from "moment";

const SearchResult = ({data}) => {

    const {thumbnails, description, title, channelTitle, publishedAt} = data?.snippet;

    if(data.id.kind === "youtube#playlist") return;

    if (data.id.kind === "youtube#channel"){
        // return (
        // <article className = "flex items-center gap-4 p-4 my-4 border-b border-neutral-800">
        //   <figure className="w-1/6">
        //     <img
        //       className="rounded-full "
        //       src={thumbnails?.maxres?.url || thumbnails?.high?.url || thumbnails?.medium?.url}
        //       alt="channel icon"
        //     />
        //   </figure>
        //   <h1 className='text-lg'>{title}</h1>
        // </article>
        // )
        return;
    }


      return (
        <Link to={"/watch?v=" + data.id.videoId}>
          <article className="grid grid-cols-12 my-2">
            <figure className="col-span-12 sm:col-span-5 md:col-span-4 h-[48vh]">
              <img
                className="w-full rounded-2xl h-full"
                src={
                  thumbnails?.maxres?.url ||
                  thumbnails?.high?.url ||
                  thumbnails?.medium?.url
                }
                alt="thumbnail"
              />
            </figure>
            <section className="col-span-12 sm:col-span-7 md:col-span-8 px-4 sm:py-8">
              <h1 className="text-lg">{title}</h1>
              <span className="text-xs text-neutral-300">
                {moment(publishedAt).fromNow()}
              </span>
              <p className="text-xs text-neutral-400 truncate my-2">{description}</p>
            </section>
          </article>
        </Link>
      );
}

export default SearchResult