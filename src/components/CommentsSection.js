import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_COMMENTS_API } from '../utils/constants';
import CommentsList from './CommentsList';

const CommentsSection = ({videoId}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async() => {

      try{
        const data = await fetch(YOUTUBE_VIDEO_COMMENTS_API + videoId);
        const json = await data.json();

        // console.log(json?.items);
        setComments(json?.items);
      }
      catch(err){
        console.log(err);
      }
    }

  return (
    <section className='w-11/12 mx-auto sm:w-full'>
      <h1 className="text-sm sm:text-base text-neutral-300 my-4 bg-neutral-800 px-4 py-2 rounded-full w-fit ">
        Comments
      </h1>
      <CommentsList comments={comments} />
    </section>
  );
}

export default CommentsSection