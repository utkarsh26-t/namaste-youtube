import React from 'react'
import {GoHomeFill} from "react-icons/go"
import {MdOutlineSubscriptions} from "react-icons/md"
import {BsFire} from "react-icons/bs"
import {ImNewspaper} from "react-icons/im"
import {TbLivePhoto} from "react-icons/tb"
import { GiTrophyCup } from "react-icons/gi";
import {IoMusicalNoteOutline} from "react-icons/io5"
import {IoMdBulb} from "react-icons/io"
import { useSelector } from 'react-redux';
import SidebarCollapsed from './SidebarCollapsed'
import {Link} from "react-router-dom"

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);


  if(!isMenuOpen){
    return <SidebarCollapsed/>
  };

  return (
    <div className="w-72 px-12">
      {/* General section */}
      <section className="border-b-2 border-b-neutral-900 my-2">
        <ul>
          <li>
            <Link to="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
              <span>
                <GoHomeFill />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <img
              src="https://yt3.googleusercontent.com/Ztglch057ft68XGbmNthj5V2S_7venMsoJwdQ_URqSVrEJv1-jXmyZCt4B7n_9rQ8dmp1M45wQ=s900-c-k-c0x00ffffff-no-rj"
              alt="Shorts"
              className="h-4"
            />
            <span>Shorts</span>
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <span>
              <MdOutlineSubscriptions />
            </span>
            <span>Subscriptions</span>
          </li>
        </ul>
      </section>

      {/* Explore section */}
      <section className="border-b-2 border-b-neutral-900 my-2">
        <h1>Explore</h1>
        <ul>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <span>
              <BsFire />
            </span>
            <span>Trending</span>
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <span>
              <ImNewspaper />
            </span>
            <span>News</span>
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <span>
              <TbLivePhoto />
            </span>
            <span>Live</span>
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <span>
              <GiTrophyCup />
            </span>
            <span>Sport</span>
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <span>
              <IoMusicalNoteOutline />
            </span>
            <span>Music</span>
          </li>
          <li className="flex items-center gap-4 p-2 rounded-lg hover:bg-neutral-800">
            <span>
              <IoMdBulb />
            </span>
            <span>Learning</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar