import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import InsuranceDetail from "./pages/InsuranceDetail.jsx";
import Chat from "./pages/Chat.jsx";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/insurance/:entity/:type" element={<InsuranceDetail />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </>
    );
}

