import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route exact path="/agency" element={<MainPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}
