// import React from 'react'
import { FaUser, FaLock, FaPen} from 'react-icons/fa';
import { useState } from 'react';
import "./Signup.css";

const Signup = () => {

  const [username, setusername] = useState ("");
  const [cpf, setcpf] = useState ("");
  const [password, setpassword] = useState ("");
  const [date, setdate] = useState ("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username, cpf, password, date)

    alert("Cadastro feito com sucesso!")
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Criar conta</h2>
        <div className="input-field">
          <input 
            type="text" 
            placeholder="Coloque seu nome"
            onChange={(e) => setusername(e.target.value)}
          />
          <FaPen className="icon" />
        </div>
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
        <div className="input-field">
          <input 
            type="date" 
            placeholder="Coloque sua data de nascimento"
            onChange={(e) => setdate(e.target.value)}
          />
        </div>

        <button>Cadastrar</button>

      </form>
    </div>
  )
}

export default Signup
