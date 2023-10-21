import React, {useState, useEffect} from 'react'
import {RxHamburgerMenu} from "react-icons/rx"
import {AiOutlineSearch} from "react-icons/ai"
import { BiUserCircle, BiVideoPlus } from "react-icons/bi";
import {IoIosNotificationsOutline} from "react-icons/io"
import ytLogo from "../assets/img/ytLogo.png"
import ytLogoMobile from "../assets/img/ytLogoMobile.png"
import { useDispatch, useSelector } from 'react-redux';
import {toggleMenu} from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API} from '../utils/constants';
import SearchSuggestions from './SearchSuggestions';
import { cacheResults } from '../utils/searchSlice';
import {Link} from "react-router-dom"

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    //Debouncing applied with 200 ms delay
    const timer = setTimeout(() =>{
      
      //Caching
      //if current searchQuery's suggestions are already fetched, not making api call again for it
      if(searchCache[searchQuery]){
        setSearchSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery])

  const getSearchSuggestions = async() => {

    try{
      // console.log("Api request made for query - ", searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
      const json = await data.json();

      // console.log(json[1]);
      setSearchSuggestions(json[1]);

      //cache the fetched suggestions for current search query
      dispatch(cacheResults({ [searchQuery]: json[1] }));

    }
    catch(err){
      console.log(err);
    }
  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  //key - i
  //component rendered
  //useFfect called
  //timer set-make an api call after 200ms

  //key - ip
  //component destroyed(useFfect render method called)
  //component rerendered
  //useFfect called
  //new timer set up - make an api call after 200ms



  return (
    <div className="bg-black p-2 grid grid-cols-6">
      {/* Logo & hamburger section */}
      <div className="flex sm:gap-6 items-center">
        <span
          onClick={() => toggleMenuHandler()}
          className="text-xl cursor-pointer rounded-full hover:bg-neutral-800 p-2"
        >
          <RxHamburgerMenu />
        </span>
        <span>
          <img src={ytLogo} alt="Youtube" className="h-5 hidden md:block" />
          <img src={ytLogoMobile} alt="Youtube" className="h-5 md:hidden" />
        </span>
      </div>

      {/* Search section */}
      <div className="col-span-5 sm:col-span-4 flex justify-center relative">
        <input
          type="text"
          className="sm:w-1/2 rounded-l-full py-2 px-4 focus:outline-none focus:border-blue-900 border-2 border-neutral-900 bg-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onBlur={() => setShowSuggestions(false)}
          onFocus={() => setShowSuggestions(true)}
        />

        <Link to={"/results?search_query=" + searchQuery}>
          <button className="h-full rounded-r-full px-4 text-xl bg-neutral-900 border-2 border-neutral-900">
            <AiOutlineSearch />
          </button>
        </Link>

        {/* Search suggestion section , not in flow of page */}
        {showSuggestions && (
          <SearchSuggestions searchSuggestions={searchSuggestions} />
        )}
      </div>

      {/* Nav icons */}
      <div className="hidden sm:flex sm:gap-6 items-center text-2xl justify-end">
        <span className="rounded-full hover:bg-neutral-800 p-2 cursor-pointer">
          <BiVideoPlus />
        </span>
        <span className="rounded-full hover:bg-neutral-800 p-2 cursor-pointer">
          <IoIosNotificationsOutline />
        </span>
        <span className="rounded-full hover:bg-neutral-800 p-2 cursor-pointer">
          <BiUserCircle />
        </span>
      </div>
    </div>
  );
}

export default Head