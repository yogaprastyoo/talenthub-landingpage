import { Route, Routes } from "react-router-dom";
import { ScrollManager } from "@/components/ScrollManager";
import About from "@/pages/About";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Lewati ke konten utama
      </a>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}
