import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AssessmentPage from "./pages/AssesmentPage";
import LandingPage from "./pages/LandingPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import TechnicalQuesPage from "./pages/TechnicalQuesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LandingPage />} />
        {/* to added to protected routes later */}
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<AssessmentPage />} />
          <Route path="/techques" element={<TechnicalQuesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
