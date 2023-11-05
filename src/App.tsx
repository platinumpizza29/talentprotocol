import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AssessmentPage from "./pages/AssesmentPage";
import LandingPage from "./pages/LandingPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import TechnicalQuesPage from "./pages/TechnicalQuesPage";
import ApplicationDetails from "./components/ApplicationDetailsComp";
import AdminDash from "./pages/Admin/AdminDash";
import AllOpenings from "./pages/Admin/AllOpenings";

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
          <Route path="/home/:id" element={<ApplicationDetails />} />
          <Route path="/v1/org" element={<AdminDash />} />
          <Route path="/v1/org/all_openings" element={<AllOpenings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
