import { useState, useMemo } from "react";
import ReactPlayer from "react-player/youtube";

const VideoResults = ({ data }) => {

  const filteredData = useMemo(() => {
    return data.results.filter((result) =>
      result.link.includes("https://www.youtube.com/watch")
    );
  }, [data]);

  const INITIAL_POSTS_COUNT = 10;
  const [count, setCount] = useState(INITIAL_POSTS_COUNT);

  const posts = filteredData.slice(0, count);

  const postsContent = posts.map((result, index) => (
    <div className="mb-4 pb-4 border-b-2 border-gray-300 dark:border-gray-500" key={index}>
      <a href={result.link} target="_blank" rel="noopener noreferrer">
        <span className="text-xs">{result.cite?.domain}</span>
        <span className="block text-lg text-blue-600 pb-2 hover:underline dark:text-blue-300">
          {result.title}
        </span>
      </a>
      <div className="flex">
        <div className="w-fit mx-auto md:mx-0 border border-gray-900 dark:border-gray-100">
          <ReactPlayer width={200} height={100} url={result.link} light />
        </div>
        <div className="ml-2 max-w-[45ch] hidden sm:block">
          {result.description}
        </div>
      </div>
    </div>
  ));

  const onFetchClick = () => {
    setCount((prev) => prev + 10);
  };

  return (
    <div className="col-span-12 md:col-start-3 md:col-span-10 xl:col-start-3 xl:col-span-8">
      {postsContent}
      {count < filteredData.length && (
        <button
          onClick={onFetchClick}
          className="w-full text-center border-2 border-blue-100 rounded-full py-2 dark:border-gray-700"
        >
          More
        </button>
      )}
      {count >= filteredData.length && (
        <div className="w-full text-center border-2 border-blue-100 rounded-full py-2">
          End of results
        </div>
      )}
    </div>
  );
};
export default VideoResults;
