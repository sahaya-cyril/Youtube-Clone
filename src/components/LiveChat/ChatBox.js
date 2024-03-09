import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/store/chatSlice";
import { Send, LocalAtm } from "@mui/icons-material";
import {
  generateRandomName,
  makeRandomAvatar,
  makeRandomMessage,
} from "../../utils/helperFunctions/liveChatHelper";
import ChatMessage from "./ChatMessage";

const ChatBox = () => {
  const [liveMessage, setLiveMessage] = useState();

  const chatMessages = useSelector((store) => store.chat.messages);
  const dispach = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispach(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
          avatar: makeRandomAvatar(),
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
          <ChatMessage
            name={chat.name}
            message={chat.message}
            avatar={chat.avatar}
          />
        ))}
      </div>
      <hr></hr>
      <form
        className="flex items-center w-full p-2 m-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispach(
            addMessage({
              name: "Sahaya Cyril",
              message: liveMessage,
              avatar:
                "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-4/5 px-2 py-1 bg-gray-100 border border-gray-200 rounded-full"
          type="text"
          value={liveMessage}
          placeholder="Chat..."
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <Send className="ml-3 cursor-pointer" />
        <LocalAtm className="ml-3 cursor-pointer" />
      </form>
    </div>
  );
};

export default ChatBox;
