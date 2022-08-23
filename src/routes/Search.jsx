import { useState } from "react";

import Header from "../components/Layout/Header";
import SearchSetting from "../components/Layout/SearchSetting";
import Navbar from "../components/Layout/Navbar";
import Content from "../components/Layout/Content";

const Search = () => {
  const [openSetting, setOpenSetting] = useState(false);

  const onSettingClick = () => {
    setOpenSetting((prev) => !prev);
  };

  const onCloseSettingClick = () => {
    setOpenSetting(false);
  };

  return (
    <div className="min-h-screen w-screen max-w-container mx-auto relative px-2 sm:px-4 lg:px-0 dark:bg-dark dark:text-gray-200">
      {openSetting && (
        // search setting model
        <SearchSetting onCloseSettingClick={onCloseSettingClick} />
      )}

      <Header clickSettingHandler={onSettingClick} />
      <Navbar />
      <Content />
    </div>
  );
};
export default Search;
