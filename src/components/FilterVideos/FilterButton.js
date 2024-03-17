import React from "react";
import { useDispatch } from "react-redux";
import { filterSearch } from "../../utils/store/searchSlice";
import { useSelector } from "react-redux";

const FilterButton = ({ name }) => {
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);
  const dispatch = useDispatch();

  const handleFilterSearch = async () => {
    const data = await fetch(
      process.env.REACT_APP_YOUTUBE_SEARCH_VIDEO_WITH_QUERY +
        "&type=video&q=" +
        name
    );
    const json = await data.json();
    dispatch(filterSearch(json.items));
  };

  return (
    <button
      className={`m-2 py-1 px-3 rounded-lg font-semibold ${
        isDarkTheme
          ? "bg-stone-800 text-white hover:bg-stone-700"
          : "bg-neutral-200 hover:bg-neutral-300"
      }`}
      onClick={handleFilterSearch}
    >
      {name}
    </button>
  );
};

export default FilterButton;
