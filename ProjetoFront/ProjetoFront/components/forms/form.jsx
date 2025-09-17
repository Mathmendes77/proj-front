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
    

    if (senha !== confirmarSenha) {
      alert('Senhas diferentes!');
      return;
    }

    console.log({ nome, email, senha });
    alert('Cadastro realizado com sucesso!');
  }

  return (
    <div className='form'>
     
   <form onSubmit={submit}>
    <h1>cadastro</h1>
    <Inputs type='text' placeholder='nome' value={nome} onChange={ e=> setNome(e.target.value)} />
    <Inputs type='email' placeholder='email' value={email} onChange={ e=> setEmail(e.target.value)} />
    <Inputs type='password' placeholder='senha' value={senha} onChange={ e=> setSenha(e.target.value)} />
    <Inputs type='password' placeholder='confirme sua senha' value={confirmarSenha} onChange={ e=> setConfirmarSenha(e.target.value)} />
   <Link to='/login'> <Button text = "cadastrar" /></Link>
    
    <Footer />

   </form>
   </div>
  )
} 