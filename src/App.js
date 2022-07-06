import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/client" element={<HomePage />} />
      <Route path="/client/psycolog" element={<HomePage />} />
      <Route path="/client/psycolog/:id" element={<ProfilePage />} />
    </Routes>
  );
}
