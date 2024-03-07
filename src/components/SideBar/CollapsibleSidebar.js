import React from "react";
import {
  HomeOutlined,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";

const CollapsibleSidebar = () => {
  const listItemStyle = `flex items-center flex-col cursor-pointer text-xs rounded-xl m-1 h-16 pt-3 hover:bg-neutral-200`;

  return (
    <aside className="fixed z-10 w-20 mt-14 shadow-md h-screen bg-white">
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
