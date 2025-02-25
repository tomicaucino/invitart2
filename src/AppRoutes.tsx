import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path="/invitart2" element={<Home />} />
        <Route path="/invitart2/genderreveal" element={<GenderReveal />} />
        <Route path="/invitart2/Modern" element={<ModernWedding />} />
        <Route path="/invitart2/Premium" element={<PremiumInvite />} />
        <Route path="/invitart2/Vintage" element={<VintageWedding />} />
        <Route path="/invitart2/sectionized" element={<FranyPalo />} />
        <Route path="/invitart2/gonza&agus" element={<GonzayAgus />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;