import React from "react";
import {
  MenuIcon,
  SearchIcon,
  MicIcon,
  VideoCallIcon,
  NotificationsIcon,
  AccountCircleIcon,
  YoutubeLogoLight,
} from "../../utils/constants/icons";

const Header = () => {
  return (
    <div className="grid grid-flow-col sticky top-0 bg-white">
      <div className="flex items-center col-span-1 px-5">
        <MenuIcon className="cursor-pointer" />
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
        />
        <button className="h-10 border border-gray-300 px-5 rounded-r-full bg-gray-100">
          <SearchIcon />
        </button>
        <div className="p-2 mx-3 rounded-full bg-gray-100">
          <MicIcon />
        </div>
      </div>
      <div className="flex items-center justify-end col-span-2 px-5">
        <VideoCallIcon className="mx-3" />
        <NotificationsIcon className="mx-3" />
        <AccountCircleIcon className="mx-3" />
      </div>
    </div>
  );
};

export default Header;
