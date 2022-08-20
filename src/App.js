import { Routes, Route } from "react-router-dom";
import SearchPage from "./routes/Search";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
  );
};
export default App;
