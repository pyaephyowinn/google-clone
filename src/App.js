import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./routes/NotFound";

import SearchPage from "./routes/Search";

const App = () => {
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      window.document.body.classList.add("dark:bg-dark");
    } else {
      root.classList.remove("dark");
      window.document.body.classList.remove("dark:bg-dark");
    }
  }, [darkMode]);

  return (
    <Routes>
      <Route index element={<Navigate to="/search" replace />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
