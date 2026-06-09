import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePreview from "./pages/ResumePreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/create-resume"
          element={<ResumeBuilder />}
        />

        <Route
          path="/preview"
          element={<ResumePreview />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;