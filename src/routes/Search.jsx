import { useState } from "react";
import Header from "../components/Layout/Header";
import SearchSetting from "../components/SearchSetting";

const Search = () => {
  const [openSetting, setOpenSetting] = useState(false);

  const onSettingClick = () => {
    setOpenSetting((prev) => !prev);
  };

  const onCloseSettingClick = () => {
    setOpenSetting(false);
  };

  return (
    <div className="h-screen w-screen max-w-container mx-auto relative">
      <Header clickSettingHandler={onSettingClick} />

      {openSetting && (
        // search setting model
        <SearchSetting onCloseSettingClick={onCloseSettingClick} />
      )}
    </div>
  );
};
export default Search;
