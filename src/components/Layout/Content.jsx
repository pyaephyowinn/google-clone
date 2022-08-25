import { useSelector } from "react-redux";
import AllResults from "../searchResult/AllResults";
import ImagesResults from "../searchResult/ImagesResults";
import LoadingSpinner from "../UI/LoadingSpinner";

const Content = () => {
  const { status, data } = useSelector((state) => state.results);
  const { type } = useSelector((state) => state.searchSettings);

  return (
    <main className="w-full grid grid-cols-12">
      {status === "loading" && <LoadingSpinner />}

      {status === "completed" && (
        <>
          {type === "search" && data && <AllResults data={data} />}
          {type === "image" && data && <ImagesResults data={data} />}
          {type === "video" && <p>video</p>}
        </>
      )}
    </main>
  );
};
export default Content;
