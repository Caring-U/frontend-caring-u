import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import HomePagePsycolog from "./pages/HomePagePsycolog";
import ProfilePagePsycolog from "./pages/ProfilePagePsycholog";
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/psikolog/:id" element={<ProfilePage />} />
            <Route path="/psycolog/" element={<HomePagePsycolog />} />
            <Route path="/psycolog/psycologProfile" element={<ProfilePagePsycolog />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
}
