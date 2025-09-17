import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Forms from "../components/forms/form.jsx";
import "./App.css";
import Galeria from "./pages/Galeria/Galeria.jsx";


export default function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Forms />} />
          <Route path="/" element={<Galeria />} />
        </Routes>
      
    </BrowserRouter>

  );
}
