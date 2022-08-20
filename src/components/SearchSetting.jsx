const SearchSetting = ({ onCloseSettingClick }) => {
  return (
    <div className="absolute right-0 top-0 h-full w-full">
      {/* backdrop */}
      <div
        onClick={onCloseSettingClick}
        className="bg-black opacity-30 w-full h-full absolute"
      ></div>

      {/* setting model */}
      <div className="w-72 md:w-96 h-full ml-auto bg-white absolute right-0 px-6 slide">
        <div className="py-4 flex justify-between items-center">
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
          <div className="flex justify-between text-lg">
            <div>Explicit results filter</div>
            <div>toggler</div>
          </div>
          <div className="flex justify-between text-lg">
            <div>Languages</div>
            <div>dropdown</div>
          </div>
        </div>

        <div>
          <h3 className="text-xl mb-4">Appearance</h3>
          <div className="flex justify-between text-lg">
            <div>Dark mode</div>
            <div>toggler</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchSetting;
