import { useState } from 'react';
import Inputs from '../input/inputs.jsx';
import './forms.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Button from '../button/button.jsx';
import NavBar from '../nav/nav.jsx';

export default function Forms() {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const[senha, setSenha] = useState('');
const[confirmarSenha, setConfirmarSenha] = useState('');

  function submit() {
    
    event.preventDefault()

    if(!senha || !confirmarSenha){
      return alert('vazio')
    }

    if (senha !== confirmarSenha) {
      alert('Senhas diferentes!');
      return;
      
    }

    alert('Cadastro realizado com sucesso!');
    window.location.href = "/login"
  }

  return (
    <div >
      <NavBar />

     
   <form onSubmit={submit}>
    <h1>cadastro</h1>
    <Inputs type='text' placeholder='nome' value={nome} onChange={ e=> setNome(e.target.value)} />
    <Inputs type='email' placeholder='email' value={email} onChange={ e=> setEmail(e.target.value)} />
    <Inputs type='password' placeholder='senha' value={senha} onChange={ e=> setSenha(e.target.value)} />
    <Inputs type='password' placeholder='confirme sua senha' value={confirmarSenha} onChange={ e=> setConfirmarSenha(e.target.value)} />
    <Button text = "cadastrar" />
    
    <Footer />

   </form>
   </div>
  )
} 