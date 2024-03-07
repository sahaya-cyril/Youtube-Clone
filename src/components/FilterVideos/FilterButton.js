import React from "react";

const FilterButton = ({ name }) => {
  return (
    <button className="m-2 py-1 px-3 rounded-lg bg-neutral-200">{name}</button>
  );
};

export default FilterButton;
