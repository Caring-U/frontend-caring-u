import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Dasboard from "./pages/Dashboard";
import SideBarAdmin from "./components/SideBarAdmin";
import TablePsikolog from "./components/TablePsikolog";
import TablePatient from "./components/TablePatient";

export default function App() {
  const location = useLocation();
  return (
    <>
      {/* agar component nya global */}
      {location.pathname.includes("/admin") ? <SideBarAdmin /> : null}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<Dasboard />} />
        <Route path="/admin/psycolog" element={<TablePsikolog />} />
        <Route path="/admin/patient" element={<TablePatient />} />
        <Route path="/client" element={<HomePage />} />
        <Route path="/client/psycolog" element={<HomePage />} />
        <Route path="/client/psycolog/:id" element={<ProfilePage />} />
      </Routes>
    </>
  );
}
