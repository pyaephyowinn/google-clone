import { useSelector } from "react-redux";
import AllResults from "../searchResult/AllResults";

const Content = () => {
  const { type } = useSelector(state => state.searchSettings);

  return (
    <main className="w-full grid grid-cols-12">
      { type === "search" && <AllResults />}
      { type === "image" && <p>Images</p>}
      { type === "news" && <p>news</p>}
      { type === "video" && <p>video</p>}
    </main>
  );
};
export default Content;
