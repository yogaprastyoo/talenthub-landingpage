import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
