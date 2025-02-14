import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPage";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import DefaultBadgePage from "@/pages/DefaultBadgePage";
import DocumentationPage from "@/pages/DocumentationPage";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Router: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <BrowserRouter>
      <NavBar testval={0} />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/default-badges" element={<DefaultBadgePage />} />
          <Route path="document" element={<DocumentationPage />} />
          <Route
            path="/dashboard"
            element={user ? <DashboardPage /> : <UnauthorizedPage />}
          />
        </Routes>
      </div>

      <FooterBar testval={0} />
    </BrowserRouter>
  );
};

export default Router;
