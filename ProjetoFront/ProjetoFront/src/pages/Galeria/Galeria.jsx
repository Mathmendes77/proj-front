import React from "react";
import "./galeria.css";
import Navbar from "../../../components/nav/nav.jsx";


export default function GaleriaCatedrais() {
  return (
    
    <div className="galeria-catedrais">
      <Navbar />
      <h2>Galeria de Catedrais</h2>
      <div className="imagens-galeria">
       
          <div className="imagem-item">
           <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="" />
           <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"alt="" />
           <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="" />
           <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="" />
          </div>
        
      </div>
    </div>
  );
}