import React from 'react'
import { Link } from 'react-router-dom';
import moment from "moment";
import { decode } from "html-entities";

const SearchResult = ({data}) => {

  // console.log(data)

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
          <article className="flex flex-col sm:flex-row w-full mb-4 sm:mb-auto">
            <img
              className="sm:w-1/3 sm:rounded-2xl object-cover h-52 sm:h-auto"
              src={
                thumbnails?.maxres?.url ||
                thumbnails?.high?.url ||
                thumbnails?.medium?.url
              }
              alt="thumbnail"
            />
            <section className="px-4 grow pt-1 sm:py-8 text-neutral-400 text-xs">
              <h1 className="text-sm sm:text-lg text-neutral-50">{decode(title)}</h1>
              <span>{channelTitle}</span>
              <span> &#8226; </span>
              <span>
                {moment(publishedAt).fromNow()}
              </span>
              <p className="hidden sm:block whitespace-pre-wrap my-2">
                {description}
              </p>
            </section>
          </article>
        </Link>
      );
}

export default SearchResult