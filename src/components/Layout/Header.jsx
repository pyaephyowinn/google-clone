import { useState } from "react";
import { MdSearch, MdOutlineSettings } from "react-icons/md";

const Header = ({ clickSettingHandler }) => {
  const [searchTxt, setSearchTxt] = useState("");

  const onSearchTxtChange = (e) => {
    setSearchTxt(e.target.value);
  };

  const onClearClick = () => {
    setSearchTxt("");
  };

  const onSettingClick = () => {
    clickSettingHandler();
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(searchTxt);
  };

  return (
    <div className="w-full h-28 grid grid-cols-12 items-center gap-4 px-4 md:px-0">
      <div className="col-span-2">
        <h1 className="text-3xl text-center">Google</h1>
      </div>

      <div className="col-start-12 col-span-1 relative sm:order-2">
        <MdOutlineSettings onClick={onSettingClick} className="text-3xl md:text-4xl mx-auto hover:cursor-pointer" />
      </div>

      <div className="col-span-full sm:col-span-9 md:col-span-7 pl-4 rounded-full border shadow hover:shadow-lg sm:order-1">
        <form onSubmit={onFormSubmit} className="w-full">
          <div className="flex items-center">
            <input
              value={searchTxt}
              onChange={onSearchTxtChange}
              type="text"
              className="text-lg py-2 px-2 flex-grow focus:outline-none"
            />
            {searchTxt && (
              <span
                aria-label="Clear"
                onClick={onClearClick}
                className="h-full px-4 py-2 hover:cursor-pointer text-lg border-r-2"
              >
                ✕
              </span>
            )}
            <button
              type="submit"
              className="h-full px-4 py-2 rounded-r-full hover:cursor-pointer"
            >
              <MdSearch className="text-2xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Header;
