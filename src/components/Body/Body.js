import React from "react";
import Sidebar from "../SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div className={isDarkTheme ? "bg-stone-950 text-white" : "bg-white"}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
