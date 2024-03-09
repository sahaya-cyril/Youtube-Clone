import React from "react";
import { makeRandomAvatar } from "../../utils/helperFunctions/liveChatHelper";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex mt-2 items-center">
      <img className="w-6 h-6 ml-5" alt="user-icon" src={makeRandomAvatar()} />
      <p className="px-2 font-semibold text-xs text-gray-600">{name}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
