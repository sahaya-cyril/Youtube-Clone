import React from "react";

const SidebarRow = (props) => {
  return (
    <div className="flex items-center cursor-pointer h-10 mx-2 my-1 rounded-lg hover:bg-gray-100">
      <props.icon className={`mx-4 ${props.premium ? "text-red-600" : ""}`} />
      <h2 className="mx-2">{props.title}</h2>
    </div>
  );
};

export default SidebarRow;
