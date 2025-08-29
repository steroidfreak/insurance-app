import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import InsuranceScene from "./InsuranceScene.jsx";

function InsuranceDetail() {
    const { entity, type } = useParams();
    return (
        <div style={{ padding: 24 }}>
            <h2 style={{ margin: 0, marginBottom: 8 }}>Insurance: {entity} → {type}</h2>
            <p>Render full details here (plans, pricing, CTAs). You can fetch by <code>{entity}</code> and <code>{type}</code>.</p>
            <a href="/">← Back</a>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<InsuranceScene />} />
            <Route path="/insurance/:entity/:type" element={<InsuranceDetail />} />
        </Routes>
    );
}
