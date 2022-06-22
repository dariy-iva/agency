import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import MainPage from "../pages/MainPage";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
    </Routes>
  );
}
