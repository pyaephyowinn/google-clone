import { useSelector } from "react-redux";
import AllResults from "../searchResult/AllResults";
import LoadingSpinner from "../UI/LoadingSpinner";

const Content = () => {
  const { status, data } = useSelector((state) => state.results);
  const { type } = useSelector((state) => state.searchSettings);

  return (
    <main className="w-full grid grid-cols-12">
      {status === "loading" && <LoadingSpinner />}

      {status === "completed" && (
        <>
          {type === "search" && <AllResults data={data} />}
          {type === "image" && <p>Images</p>}
          {type === "news" && <p>news</p>}
          {type === "video" && <p>video</p>}
        </>
      )}
    </main>
  );
};
export default Content;
