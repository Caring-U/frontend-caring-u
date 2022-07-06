import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import HomePagePsycolog from "./pages/HomePagePsycolog";
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/psikolog/:id" element={<ProfilePage />} />
            <Route path="/psycolog/" element={<HomePagePsycolog />} />
        </Routes>
    );
}
