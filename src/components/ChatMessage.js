import React from 'react'
import { BiUserCircle } from "react-icons/bi";

const ChatMessage = ({name, text}) => {
  return (
    <li className="text-sm my-2 px-4 flex gap-2">
      <span className="text-xl sm:text-2xl text-blue-900">
        <BiUserCircle />
      </span>
      <p className="break-all">
        <span className=' text-neutral-400 font-semibold me-2'>{name}</span>
        {text}
      </p>
    </li>
  );
}

export default ChatMessage