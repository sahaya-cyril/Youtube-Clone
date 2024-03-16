import React, { useEffect, useState } from "react";
import YoutubeLogoLight from "../../assets/Images/youtube_logo_light.png";
import YoutubeLogoDark from "../../assets/Images/youtube_logo_dark.png";
import {
  Menu,
  Search,
  Mic,
  Brightness2Outlined,
  NotificationsNoneOutlined,
  AccountCircle,
  SearchOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../utils/store/appSlice";
import { cacheStorage } from "../../utils/store/searchSlice";
import { toggleTheme } from "../../utils/store/themeSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //Getting existing cache from search slice
  const seachCache = useSelector((store) => store.search);
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
    dispatch(
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

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <header
      className={`fixed top-0 grid grid-flow-col z-50 left-0 right-0 ${
        isDarkTheme ? "bg-stone-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center col-span-1 px-5 mx-1">
        <Menu className="cursor-pointer" onClick={() => toggleMenuHandler()} />
        <img
          className="h-9 mx-4 cursor-pointer"
          alt="youtube-icon"
          src={isDarkTheme ? YoutubeLogoDark : YoutubeLogoLight}
        />
      </div>
      <div className="flex items-center col-span-9 p-2 mx-12">
        <input
          className={`w-full h-10 px-5 rounded-l-full ${
            isDarkTheme
              ? "bg-stone-900 border border-stone-700 text-white"
              : "bg-white border border-gray-300 text-black"
          }`}
          placeholder="Search"
          type="text"
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          className={`h-10 px-5 rounded-r-full bg-gray-100 ${
            isDarkTheme
              ? "bg-stone-800 border border-stone-700 text-white"
              : "bg-gray-100 border border-gray-300 text-black"
          }`}
        >
          <Search />
        </button>
        {showSuggestions && (
          <div
            className={`fixed top-14 w-[39rem] mr-14 py-2 px-3 rounded-lg shadow-lg ${
              isDarkTheme ? "bg-stone-800" : "bg-white"
            }`}
          >
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onMouseDown={(e) => handleSuggestion(e)}
                  className={`py-1 px-2 rounded-lg ${
                    isDarkTheme ? "hover:bg-stone-700" : "hover:bg-gray-100"
                  }`}
                >
                  <SearchOutlined /> &nbsp;&nbsp;{" "}
                  <span className="font-semibold text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          className={`p-2 mx-3 rounded-full ${
            isDarkTheme
              ? "bg-stone-800 border border-stone-700 text-white"
              : "bg-gray-100 border border-gray-300 text-black"
          }`}
        >
          <Mic className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-end col-span-2 px-5">
        <Brightness2Outlined
          className="mx-3 cursor-pointer"
          onClick={toggleThemeHandler}
        />
        <NotificationsNoneOutlined className="mx-3 cursor-pointer" />
        <AccountCircle className="mx-3 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
