import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Suggestion = ({suggestion}) => {
  
  return (
    <li>
      <Link
        to={"/results?search_query=" + suggestion}
        className="flex gap-2 items-center px-4 py-1 my-1 hover:bg-neutral-800 cursor-pointer"
      >
          <span>
            <AiOutlineSearch />
          </span>
          <span>{suggestion}</span>
      </Link>
    </li>
  );
}

export default Suggestion