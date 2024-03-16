import React from "react";
import FilterButton from "./FilterButton";
import { filterButtons } from "../../utils/constants/constants";
import { useSelector } from "react-redux";

const FiltersList = () => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);

  return (
    <div
      className={`flex fixed overflow-x-scroll no-scrollbar ${
        isDarkTheme ? "bg-stone-950" : "bg-white"
      }`}
    >
      <div className="flex-shrink-0">
        {filterButtons.map((btnName, index) => {
          return <FilterButton key={index} name={btnName} />;
        })}
      </div>
    </div>
  );
};

export default FiltersList;
