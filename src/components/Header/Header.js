import React from "react";
import YoutubeLogoLight from "../../assets/Images/youtube_logo_light.png";
import {
  Menu,
  Search,
  Mic,
  VideoCallOutlined,
  NotificationsNoneOutlined,
  AccountCircle,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/store/appSlice";

const Header = () => {
  const dispach = useDispatch();
  const toggleMenuHandler = () => {
    dispach(toggleMenu());
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
        />
        <button className="h-10 border border-gray-300 px-5 rounded-r-full bg-gray-100">
          <Search />
        </button>
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
