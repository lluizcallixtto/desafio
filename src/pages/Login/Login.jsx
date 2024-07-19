// import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import logoSeduc from '../../assets/logo-seduc.webp';

const Login = () => {

    const [cpf, setcpf] = useState ("");
    const [password, setpassword] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(cpf, password)

        alert("Login feito com sucesso!")
    }

  return (
    <section className="main-container">
    <div className="container-um">
      <img src={logoSeduc} alt="Logo Seduc" />
      <h2>Bem-vindo ao sistema de gerenciamento escolar de docentes e alunos</h2>
    </div>
    <div className="container-dois">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
            <input 
              type="text" 
              placeholder="Coloque seu CPF"
              onChange={(e) => setcpf(e.target.value)}
            />
            <FaUser className="icon" />
        </div>
        <div className="input-field">
            <input 
              type="password" 
              placeholder="Coloque sua senha" 
              onChange={(e) => setpassword(e.target.value)}
            />
            <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
          </label>
          <span>Lembre de mim</span>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        
        <Link to="/Form">
          <button>Entrar</button>
        </Link>

        <div className="signup-link">
            <p>Não tem uma conta? </p>
            <Link to="/Signup">Registrar</Link>  
        </div>
      </form>
    </div>
    </section>
  )
}

export default Login
