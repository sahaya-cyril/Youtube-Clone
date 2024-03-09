import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/store/chatSlice";
import {
  generateRandomName,
  makeRandomMessage,
} from "../../utils/helperFunctions/liveChatHelper";
import ChatMessage from "./ChatMessage";

const ChatBox = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispach = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispach(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-5 border border-gray-200 shadow-sm rounded-xl w-4/12">
      <p className="font-semibold p-2">Live chat</p>
      <hr></hr>
      <div className="w-full h-80 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat) => (
          <ChatMessage name={chat.name} message={chat.message} />
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
