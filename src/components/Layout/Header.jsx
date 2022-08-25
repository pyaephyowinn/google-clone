import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MdSearch, MdOutlineSettings } from "react-icons/md";

import { searchResults } from "../../features/results/resultsSlice";

const Header = ({ clickSettingHandler }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTxt, setSearchTxt] = useState("");
  const { status } = useSelector((state) => state.results);

  const dispatch = useDispatch();

  useEffect(() => {
    const initialQuery = searchParams.get("q");
    if (initialQuery && status === "idle") {
      setSearchTxt(initialQuery);
      console.log("inside");
      dispatch(searchResults(initialQuery));
    }
    // setSearchTxt(searchParams.get("q"));
  }, [setSearchTxt, searchParams, dispatch, status]);

  const onSearchTxtChange = (e) => {
    setSearchTxt(e.target.value);
  };

  const onClearClick = () => {
    setSearchTxt("");
  };

  const onSettingClick = () => {
    clickSettingHandler();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchTxt });
    dispatch(searchResults(searchTxt));
  };

  return (
    <div className="w-full h-fit pt-4 mb-6 grid grid-cols-12 items-center gap-4">
      <div className="col-span-2">
        <h1 className="text-3xl md:text-4xl text-center">
          <span className="text-blue-600 dark:text-gray-50">G</span>
          <span className="text-red-600 dark:text-gray-50">o</span>
          <span className="text-yellow-600 dark:text-gray-50">o</span>
          <span className="text-blue-600 dark:text-gray-50">g</span>
          <span className="text-green-600 dark:text-gray-50">l</span>
          <span className="text-red-600 dark:text-gray-50">e</span>
        </h1>
      </div>

      <div className="col-start-11 sm:col-start-12 col-span-2 sm:col-span-1 sm:order-2">
        <MdOutlineSettings
          onClick={onSettingClick}
          className="text-3xl md:text-4xl mx-auto hover:cursor-pointer text-gray-500"
        />
      </div>

      <div className="col-span-full sm:col-span-9 md:col-span-7 pl-4 lg:py-1 rounded-full border shadow hover:shadow-lg sm:order-1 dark:border-gray-600 dark:shadow-gray-900">
        <form onSubmit={onFormSubmit} className="w-full">
          <div className="flex items-center">
            <input
              value={searchTxt}
              onChange={onSearchTxtChange}
              type="text"
              className="py-2 px-2 flex-grow focus:outline-none dark:bg-dark"
            />
            {searchTxt && (
              <span
                aria-label="Clear"
                onClick={onClearClick}
                className="h-full px-4 hover:cursor-pointer text-lg border-r-2 hidden sm:block dark:border-gray-700"
              >
                ✕
              </span>
            )}
            <button
              type="submit"
              className="h-full px-4 py-2 rounded-r-full hover:cursor-pointer"
            >
              <MdSearch className="text-2xl text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Header;
