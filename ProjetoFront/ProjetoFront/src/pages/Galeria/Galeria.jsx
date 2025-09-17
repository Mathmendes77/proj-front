import React from "react";
import "./galeria.css";
import Navbar from "../../../components/nav/nav.jsx";
import catre1 from "../../assets/catre1.jpg";
import catre2 from "../../assets/catre2.jpg";
import catre3 from "../../assets/catre3.jpg";
import Footer from "../../../components/footer/footer";

export default function GaleriaCatedrais() {
  return (
    
    <div className="galeria-catedrais">
      <Navbar />
      <h2>Galeria de Catedrais</h2>
      <div className="imagens-galeria">
       
          <div className="imagem-item">
            <img src={catre1} alt="" /> 
            <p>Sagrada Família</p>
          </div>
       
          <div className="imagem-item">
            <img src={catre2} alt="" /> 
            <p>Notre Dame</p>
          </div>
       
          <div className="imagem-item">
            <img src={catre3} alt="" /> 
            <p>Notre Dame</p>
          </div>
        

      </div>
      <Footer />
    </div>
  );
}