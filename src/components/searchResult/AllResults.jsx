import { useState } from "react";

import ResultCard from "./ResultCard";
import { getData } from "../../app/mockData";

const AllResults = () => {
  const data = getData();
  /*
    fake fetching data on click
    since page pagination if not available on RapidAPI
  */
  const INITIAL_POSTS_COUNT = 10;

  const [count, setCount] = useState(INITIAL_POSTS_COUNT);
  console.log("count", count);

  const posts = data.result.slice(0, count);
  const postsContent = posts.map((post, index) => (
    <ResultCard key={index} data={post} />
  ));

  const onFetchClick = () => {
    setCount((prev) => prev + 10);
  };

  return (
    <div className="col-span-12 lg:col-start-3 lg:col-span-8 flex justify-between">
      {/* Main results */}

      <div className="mb-4">
        {postsContent}

        {count < data.result.length && 
        <button
          onClick={onFetchClick}
          className="w-full text-center border-2 border-blue-100 rounded-full py-2 dark:border-gray-700"
        >
          Fetch more
        </button>}
        {count >= data.result.length && (
          <div className="w-full text-center border-2 border-blue-100 rounded-full py-2">
            End of result
          </div>
        )}
      </div>

      {/* People also search */}
      <div className="hidden sm:block ml-2">
        <div className="border rounded-lg p-4 xl:p-6 dark:border-gray-600">
          <span className="block my-2 text-xl font-medium whitespace-nowrap">
            People also search
          </span>
          {data.answers?.map((ans, index) => (
            <p key={index} className="py-2 border-t-2 text-gray-600 hover:cursor-pointer dark:text-gray-400">
              {ans}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllResults;
