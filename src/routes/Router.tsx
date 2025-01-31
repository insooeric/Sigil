import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPage";
import FooterBar from "@/components/FooterBar";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar testval={0} />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>

      <FooterBar testval={0} />
    </BrowserRouter>
  );
};

export default Router;
