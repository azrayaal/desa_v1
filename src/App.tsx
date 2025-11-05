import { BrowserRouter as Router, Routes, Route } from "react-router";

import DesaPublic from "./pages/desa/desaPublic";
import DashboardDesa from "./pages/desa/DashboarDesa";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardDesa />} />
          <Route path="/public" element={<DesaPublic />} />
        </Routes>
      </Router>
    </>
  );
}
