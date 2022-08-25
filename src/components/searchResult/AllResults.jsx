import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";

const AllResults = ({ data }) => {
  console.log(data);
  const [, setSearchParams] = useSearchParams();
  /*
    fake fetching data on click
    since page pagination if not available on RapidAPI
  */

  const INITIAL_POSTS_COUNT = 10;
  const [count, setCount] = useState(INITIAL_POSTS_COUNT);

  const posts = data.results.slice(0, count);
  const postsContent = posts.map((post, index) => (
    <ResultCard key={index} data={post} />
  ));

  const onFetchClick = () => {
    setCount((prev) => prev + 10);
  };

  const onAnswerClick = (txt) => {
    setSearchParams({ q: txt });
  };

  return (
    <div className="col-span-12 lg:col-start-3 lg:col-span-10 xl:col-start-3 xl:col-span-8 flex justify-between">
      {/* Main results */}

      <div className="mb-4">
        {postsContent}

        {count < data.results.length && (
          <button
            onClick={onFetchClick}
            className="w-full text-center border-2 border-blue-100 rounded-full py-2 dark:border-gray-700"
          >
            Fetch more
          </button>
        )}
        {count >= data.results.length && (
          <div className="w-full text-center border-2 border-blue-100 rounded-full py-2">
            End of results
          </div>
        )}
      </div>

      {/* People also search */}
      <div className="hidden sm:block ml-2">
        {data.answers.length > 0 && (
          <div className="border rounded-lg p-4 xl:p-6 lg:mr-2 xl:mr-0 dark:border-gray-600">
            <span className="block my-2 text-xl font-medium whitespace-nowrap">
              People also search
            </span>
            {data.answers.map((ans, index) => (
              <p
                onClick={onAnswerClick.bind(null, ans)}
                key={index}
                className="py-2 border-t-2 text-gray-600 hover:cursor-pointer dark:text-gray-400 dark:border-gray-400"
              >
                {ans}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AllResults;
