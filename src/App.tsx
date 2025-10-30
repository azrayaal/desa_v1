import { BrowserRouter as Router, Routes, Route } from "react-router";

import { ScrollToTop } from "./components/common/ScrollToTop";

import Desa from "./pages/desa/desa";
import DesaPublic from "./pages/desa/desaPublic";
import DesaDashboardRefactored from "./pages/desa/DesaDashboardRefactored";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DesaDashboardRefactored />} />
          <Route path="/desa" element={<Desa />} />
          <Route path="/public" element={<DesaPublic />} />
        </Routes>
      </Router>
    </>
  );
}
