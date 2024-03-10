import React from "react";
import { useDispatch } from "react-redux";
import { filterSearch } from "../../utils/store/searchSlice";

const FilterButton = ({ name }) => {
  const dispatch = useDispatch();

  const handleFilterSearch = async () => {
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SEARCH_VIDEO_WITH_QUERY +
        "&type=video&q=" +
        name
    );
    const json = await data.json();
    console.log(json.items);
    dispatch(filterSearch(json.items));
  };

  return (
    <button
      className="m-2 py-1 px-3 rounded-lg bg-neutral-200"
      onClick={handleFilterSearch}
    >
      {name}
    </button>
  );
};

export default FilterButton;
