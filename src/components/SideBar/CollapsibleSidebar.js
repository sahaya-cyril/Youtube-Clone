import React from "react";
import {
  HomeOutlined,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const CollapsibleSidebar = () => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  const listItemStyle = `flex items-center flex-col cursor-pointer text-xs rounded-xl m-1 h-16 pt-3 ${
    isDarkTheme ? "hover:bg-stone-800" : "hover:bg-gray-100"
  }`;

  return (
    <aside
      className={`fixed z-10 w-20 mt-14 h-screen ${
        isDarkTheme ? "bg-stone-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className={listItemStyle}>
        <HomeOutlined />
        <p>Home</p>
      </div>
      <div className={listItemStyle}>
        <ExploreOutlined />
        <p>Explore</p>
      </div>
      <div className={listItemStyle}>
        <SubscriptionsOutlined />
        <p>Subscription</p>
      </div>
      <div className={listItemStyle}>
        <VideoLibraryOutlined />
        <p>You</p>
      </div>
    </aside>
  );
};

export default CollapsibleSidebar;
