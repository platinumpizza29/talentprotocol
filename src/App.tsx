import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import EditorPage from "./pages/EditorPage";
import RegisterPage from "./pages/RegisterPage";
import AssessmentPage from "./pages/AssesmentPage";
import LandingPage from "./pages/LandingPage";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/test" element={<AssessmentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
