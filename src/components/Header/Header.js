import React, { useEffect, useState } from "react";
import YoutubeLogoLight from "../../assets/Images/youtube_logo_light.png";
import {
  Menu,
  Search,
  Mic,
  VideoCallOutlined,
  NotificationsNoneOutlined,
  AccountCircle,
  SearchOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/store/appSlice";
import { cacheStorage } from "../../utils/store/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //Getting existing cache from search slice
  const seachCache = useSelector((store) => store.search);

  let navigate = useNavigate();
  const dispach = useDispatch();

  const toggleMenuHandler = () => {
    dispach(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      //Checking for search query in cache
      if (seachCache[searchQuery]) {
        setsuggestions(seachCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SEARCH_API + searchQuery
    );
    const json = await data.json();
    setsuggestions(json[1]);

    //Caching search suggestion results
    dispach(
      cacheStorage({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestion = (event) => {
    setSearchQuery(event.target.innerText);
    setShowSuggestions(false);
    navigate("/results?search_query=" + encodeURI(event.target.innerText));
  };

  return (
    <header className="fixed top-0 grid grid-flow-col z-50 left-0 right-0 bg-white">
      <div className="flex items-center col-span-1 px-5 mx-1">
        <Menu className="cursor-pointer" onClick={() => toggleMenuHandler()} />
        <img
          className="h-9 mx-4 cursor-pointer"
          alt="youtube-icon"
          src={YoutubeLogoLight}
        />
      </div>
      <div className="flex items-center col-span-9 p-2 mx-12">
        <input
          className="w-full h-10 border border-gray-300 px-5 rounded-l-full"
          placeholder="Search"
          type="text"
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="h-10 border border-gray-300 px-5 rounded-r-full bg-gray-100">
          <Search />
        </button>
        {showSuggestions && (
          <div className="fixed top-14 bg-white w-[39rem] mr-14 py-2 px-3 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onMouseDown={(e) => handleSuggestion(e)}
                  className="py-1 px-2 rounded-lg hover:bg-gray-100"
                >
                  <SearchOutlined /> &nbsp;&nbsp;{" "}
                  <span className="font-semibold text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="p-2 mx-3 rounded-full bg-gray-100">
          <Mic />
        </div>
      </div>
      <div className="flex items-center justify-end col-span-2 px-5">
        <VideoCallOutlined className="mx-3" />
        <NotificationsNoneOutlined className="mx-3" />
        <AccountCircle className="mx-3" />
      </div>
    </header>
  );
};

export default Header;
