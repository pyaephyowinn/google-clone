import { useSelector, useDispatch } from "react-redux";
import {
  setLang,
  setSafeMode,
} from "../../features/searchSettings/searchSettingsSlice";
import { setDarkMode } from "../../features/theme/themeSlice";

const SearchSetting = ({ onCloseSettingClick }) => {
  const dispatch = useDispatch();

  const { lr: lang, safe } = useSelector((state) => state.searchSettings);
  const { darkMode } = useSelector((state) => state.theme);

  const initialExplicitFilterState = safe === "active" ? true : false;

  const onExplicitFilterInputChange = (e) => {
    const safeMode = e.target.checked ? "active" : "";
    dispatch(setSafeMode(safeMode));
  };

  const onDarkModeInputChange = (e) => {
    dispatch(setDarkMode(e.target.checked));
  };

  const onLangChange = (e) => {
    dispatch(setLang(e.target.value));
  };

  return (
    <div className="absolute right-0 top-0 h-full w-full">
      {/* backdrop */}
      <div
        onClick={onCloseSettingClick}
        className="bg-black opacity-30 w-full h-full absolute"
      ></div>

      {/* setting model */}
      <div className="w-72 md:w-96 h-full ml-auto bg-white absolute right-0 px-6 slide dark:bg-dark">
        <div className="mt-4 flex justify-between items-center">
          <h2 className="text-2xl">Setting</h2>
          <div
            onClick={onCloseSettingClick}
            className="pl-4 hover:cursor-pointer"
          >
            ✕
          </div>
        </div>

        <div className="my-6 py-6 border-y">
          <h3 className="text-xl mb-4">Using Search</h3>
          <div className="flex justify-between text-lg font-light">
            <div>Explicit results filter</div>
            <div className="w-fit">
              <input
                type="checkbox"
                defaultChecked={initialExplicitFilterState}
                onChange={onExplicitFilterInputChange}
                className="toggle"
                name="explicitFilterInput"
                id="explicitFilterInput"
              />
              <label htmlFor="explicitFilterInput"></label>
            </div>
          </div>
          <div className="flex justify-between text-lg font-light">
            <div>Language</div>
            <div className="w-fit">
              <select onChange={onLangChange} name="lang" id="lang" value={lang} className="dark:bg-dark">
                <option value="lang_en">English</option>
                <option value="lang_ja">Japanese</option>
                <option value="lang_ko">Korean</option>
                <option value="lang_th">Thai</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4">Appearance</h3>
          <div className="flex justify-between text-lg font-light">
            <div>Dark mode</div>
            <div className="w-fit">
              <input
                type="checkbox"
                defaultChecked={darkMode}
                onChange={onDarkModeInputChange}
                className="toggle"
                name="theme"
                id="themeInput"
              />
              <label htmlFor="themeInput"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchSetting;
