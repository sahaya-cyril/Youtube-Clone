import React from "react";
import { useSelector } from "react-redux";

const SubscriptionRow = (props) => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div
      className={`flex items-center cursor-pointer h-10 mx-2 my-1 rounded-lg ${
        isDarkTheme ? "hover:bg-stone-800" : "hover:bg-gray-100"
      }`}
    >
      <img
        className="rounded-full h-6 mx-4"
        alt="channel-logo"
        src={props.image}
      />
      <p className="mx-2">{props.name}</p>
    </div>
  );
};

export default SubscriptionRow;
