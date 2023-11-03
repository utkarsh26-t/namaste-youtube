import React, { useState } from 'react'
import moment from "moment";
import { AiOutlineLike, AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import CommentsList from './CommentsList';

const Comment = ({comment}) => {

  const [showReplies, setShowReplies] = useState(false);
  const [showFullComment, setShowFullComment] = useState(false);

  //This comment can be a topLevel comment or second level comment
  const {
    textOriginal,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
  } = comment?.snippet?.topLevelComment?.snippet || comment?.snippet;

  //Replies will only be on top level comments
  const replies = comment?.replies?.comments || [];

  const toggleBtnHandler = () => {
    setShowReplies(prevState => !prevState);
  }

  return (
    <li className="flex gap-2 my-4">
      <img
        className="rounded-full h-8 sm:h-10"
        src={authorProfileImageUrl}
        alt="avatar"
      />
      <div className="sm:px-2">
        <div className="flex gap-2 text-xs mb-1">
          <span className="font-semibold">{authorDisplayName}</span>
          <span className="text-neutral-300">
            {moment(publishedAt).fromNow()}
          </span>
        </div>
        <p className="whitespace-pre-wrap text-sm text-neutral-300 mb-1">
          {textOriginal}
        </p>
        <div className="flex items-center">
          <span className="text-base sm:text-xl rounded-full hover:bg-neutral-800 cursor-pointer p-1">
            <AiOutlineLike />
          </span>
          <span className="text-xs text-neutral-300">
            {Intl.NumberFormat("en", { notation: "compact" }).format(likeCount)}{" "}
          </span>
        </div>

        {replies.length > 0 && (
            <button
              onClick={toggleBtnHandler}
              className="flex items-center gap-2 text-blue-400 font-semibold text-sm rounded-full hover:bg-blue-950 px-4 py-2 my-1"
            >
              <span>
                {showReplies ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </span>
              <span>{replies.length} replies</span>
            </button>
        )}
        {/* Replies on this comment (It will be comments list only)*/}
        {showReplies && <CommentsList comments={replies} />}
      </div>
    </li>
  );
}

export default Comment