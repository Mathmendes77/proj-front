import { useState } from "react";
import { Link } from "react-router-dom";
import Inputs from "../../../components/input/inputs.jsx";
import "./login.css";
import Footer from  "../../../components/footer/footer.jsx";
import NavBar from "../../../components/nav/nav.jsx";
import Button from "../../../components/button/button.jsx";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function submit() {
   
    if (!email || !senha) {
      alert("Preencha todos os campos!");
    }else{

      console.log({ email, senha });
      alert("Login realizado com sucesso!");
    }
  }

  return (

    <div>
     
    <form onSubmit={submit}>
      
      <h1>login</h1>

      <Inputs type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <Inputs type="password" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>

      <Link to="/"><Button text = "entrar" /></Link>
     
    <Link to="/cadastro">
    <Button text = "cadastrar" />
    </Link>
    <Footer />
    </form>
    </div>
  );
}