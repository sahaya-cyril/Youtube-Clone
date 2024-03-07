import React from "react";
import FilterButton from "./FilterButton";
import { filterButtons } from "../../utils/constants/constants";

const FiltersList = () => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      <div className="flex-shrink-0">
        {filterButtons.map((btnName, index) => {
          return <FilterButton key={index} name={btnName} />;
        })}
      </div>
    </div>
  );
};

export default FiltersList;
