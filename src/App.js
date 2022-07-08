import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/clients/HomePage";
import PsycologProfilePage from "./pages/clients/PsycologProfilePage";
import Dashboard from "./pages/clients/Dashboard";
import CheckoutPage from "./pages/clients/CheckoutPage";
import HomePagePsycolog from "./pages/HomePagePsycolog";
import ProfilePagePsycolog from "./pages/ProfilePagePsycholog";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/client" element={<Dashboard />} />
      <Route path="/client/checkout" element={<CheckoutPage />} />
      <Route path="/client/psycolog" element={<HomePage />} />
      <Route path="/client/psycolog/:id" element={<PsycologProfilePage />} />
      <Route path="/psycolog/" element={<HomePagePsycolog />} />
      <Route
        path="/psycolog/psycologProfile"
        element={<ProfilePagePsycolog />}
      />
    </Routes>
  );
}
