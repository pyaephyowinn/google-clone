import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import SearchPage from "./routes/Search";

const App = () => {
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      window.document.body.classList.add("dark:bg-dark")
    } else {
      root.classList.remove("dark");
      window.document.body.classList.remove("dark:bg-dark")
    }
  }, [darkMode]);

  return (
    <Routes>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};
export default App;
