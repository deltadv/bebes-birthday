import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Birthday from "./components/Birthday";

const App = () => {
  return (
    <Routes>
      <Route path="/bebes-birthday" element={<LandingPage />} />
      <Route path="/iloveyou" element={<Birthday />} />
    </Routes>
  );
};

export default App;
