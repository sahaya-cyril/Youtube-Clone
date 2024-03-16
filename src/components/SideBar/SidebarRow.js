import React from "react";
import { useSelector } from "react-redux";

const SidebarRow = (props) => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div
      className={`flex items-center cursor-pointer h-10 mx-2 my-1 rounded-lg ${
        isDarkTheme ? "hover:bg-stone-800" : "hover:bg-gray-100"
      }`}
    >
      <props.icon className={`mx-4 ${props.premium ? "text-red-600" : ""}`} />
      <h2 className="mx-2">{props.title}</h2>
    </div>
  );
};

export default SidebarRow;
