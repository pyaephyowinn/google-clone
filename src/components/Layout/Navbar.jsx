import { useSelector, useDispatch } from "react-redux";
import {
  MdOutlineSearch,
  MdOutlineImage,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi";
import { setType } from "../../features/searchSettings/searchSettingsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.searchSettings);

  const allClass = type === "search" ? "border-blue-500" : "border-transparent";
  const imageClass =
    type === "image" ? "border-blue-500" : "border-transparent";
  const newsClass = type === "news" ? "border-blue-500" : "border-transparent";
  const videoClass =
    type === "video" ? "border-blue-500" : "border-transparent";

  const onAllClick = () => {
    if(type !== "search") {
      dispatch(setType("search"));
    }
  };

  const onImagesClick = () => {
    if(type !== "image") {
      dispatch(setType("image"));
    }
  };

  const onNewsClick = () => {
    if (type !== "news") {
      dispatch(setType("news"));
    }
  };

  const onVideoClick = () => {
    if (type !== "video") {
      dispatch(setType("video"));
    }
  };

  return (
    <div className="w-full grid grid-cols-12 border-b mb-4 dark:border-gray-600">
      <nav className="col-span-12 lg:col-start-3 lg:col-span-8 h-fit">
        <ul className="flex">
          <li
            onClick={onAllClick}
            className={
              "mr-2 sm:mr-4 flex items-center pb-1 border-b-4 hover:cursor-pointer " + allClass
            }
          >
            <MdOutlineSearch className="sm:mr-1" />
            <div>All</div>
          </li>
          <li
            onClick={onImagesClick}
            className={
              "mx-2 sm:mx-4 flex items-center pb-1 border-b-4 hover:cursor-pointer " + imageClass
            }
          >
            <MdOutlineImage className="sm:mr-1" />
            <div>Images</div>
          </li>
          <li
            onClick={onNewsClick}
            className={
              "mx-2 sm:mx-4 flex items-center pb-1 border-b-4 hover:cursor-pointer " + newsClass
            }
          >
            <HiOutlineNewspaper className="sm:mr-1" />
            <div>News</div>
          </li>
          <li
            onClick={onVideoClick}
            className={
              "ml-2 sm:ml-4 flex items-center pb-1 border-b-4 hover:cursor-pointer " + videoClass
            }
          >
            <MdOutlineVideoLibrary className="sm:mr-1" />
            <div>Videos</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
