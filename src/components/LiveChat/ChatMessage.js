import React from "react";
import { useSelector } from "react-redux";

const ChatMessage = ({ name, message, avatar }) => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div className="flex mt-2 items-center">
      <img className="w-6 h-6 ml-5" alt="user-icon" src={avatar} />
      <p
        className={`px-2 font-semibold text-xs ${
          isDarkTheme ? "text-stone-400" : "text-gray-600"
        }`}
      >
        {name}
      </p>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
