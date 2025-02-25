import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GonzayAgus from "./app/GonzayAgus";
import FranyPalo from "./app/FranyPalo";
import Home from "./app/InvitartHome";
import VintageWedding from "./app/VintageInvitation";
import PremiumInvite from "./app/Premium";
import ModernWedding from "./app/ModernWedding";
import GenderReveal from "./app/GenderReveal";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genderreveal" element={<GenderReveal />} />
        <Route path="/Modern" element={<ModernWedding />} />
        <Route path="/Premium" element={<PremiumInvite />} />
        <Route path="/Vintage" element={<VintageWedding />} />
        <Route path="/sectionized" element={<FranyPalo />} />
        <Route path="/gonza&agus" element={<GonzayAgus />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;