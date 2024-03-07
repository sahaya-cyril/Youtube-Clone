import React from "react";

const SubscriptionRow = (props) => {
  return (
    <div className="flex items-center cursor-pointer h-10 mx-2 my-1 rounded-lg hover:bg-gray-100">
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
