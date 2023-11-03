import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";
import {Link} from "react-router-dom"


const SidebarCollapsed = () => {
  return (
    <div className="w-24">
      <ul>
        <li>
          <Link
            to="/"
            className="py-4 rounded-lg hover:bg-stone-800 flex flex-col items-center"
          >
            <span>
              <GoHomeFill />
            </span>
            <span className="text-xs">Home</span>
          </Link>
        </li>
        <li className="py-4 rounded-lg hover:bg-stone-800 flex flex-col items-center">
          <img
            src="https://yt3.googleusercontent.com/Ztglch057ft68XGbmNthj5V2S_7venMsoJwdQ_URqSVrEJv1-jXmyZCt4B7n_9rQ8dmp1M45wQ=s900-c-k-c0x00ffffff-no-rj"
            alt="Shorts"
            className="h-4"
          />
          <span className="text-xs">Shorts</span>
        </li>
        <li className="py-4 rounded-lg hover:bg-stone-800 flex flex-col items-center">
          <span>
            <MdOutlineSubscriptions />
          </span>
          <span className="text-xs">Subscriptions</span>
        </li>
      </ul>
    </div>
  );
}

export default SidebarCollapsed