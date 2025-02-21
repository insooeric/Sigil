import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar";
// import FooterBar from "@/components/FooterBar";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPage";
import UnauthorizedPage from "@/pages/UnauthorizedPage";
import DefaultBadgePage from "@/pages/DefaultBadgePage";
import DocumentationPage from "@/pages/DocumentationPage";
import SandboxPage from "@/pages/SandboxPage";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import TopBar from "@/components/TopBar";

const Router: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <BrowserRouter>
      <div className="body-grid">
        <div className="body-sidebar">
          <NavBar />
        </div>
        <div className="body-content">
          <div className="body-topbar">
            <TopBar />
          </div>
          <div className="body-main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/default-badges" element={<DefaultBadgePage />} />
              <Route path="/document" element={<DocumentationPage />} />
              <Route path="/sandbox" element={<SandboxPage />} />
              <Route
                path="/dashboard"
                element={user ? <DashboardPage /> : <UnauthorizedPage />}
              />
            </Routes>
          </div>
        </div>
      </div>

      {/* <FooterBar testval={0} /> */}
    </BrowserRouter>
  );
};

export default Router;
