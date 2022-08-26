import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="text-lg text-gray-500 dark:text-gray-300 -translate-y-20">
        <span className="block text-4xl mb-2">We are sorry!</span>
        <p className="font-light">
          No page is found, go to{" "}
          <Link
            className="underline text-blue-500 hover:no-underline cursor-pointer"
            to="/search"
          >
            search
          </Link>
        </p>
      </div>
    </div>
  );
};
export default NotFound;
