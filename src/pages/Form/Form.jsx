// import React from 'react'
'Use Client';
import { useForm } from "react-hook-form";

import "./Form.css"; 

const Form = () => {
    const { 
        handleSubmit, 
        register, 
        formState: {errors} 
    } = useForm({
    });

    console.log(errors);

    const handleFormSubmit = (data) => {
        console.log(data);
    };

  return (
    <>

      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>

        <h1>Gerenciamento</h1>

        <div className="Container-form">
            <h2>Escolas</h2>
            <div>
                <label htmlFor="">Escola</label>
                <input 
                {...register('adress.school')} 
                type="text"
                placeholder="Insira o nome da escola" 
                />
            </div>
            <div>
                <label htmlFor="">Endereço</label>
                <input 
                {...register('adress.adress')} 
                type="text"
                placeholder="Insira o endereço" 
                />
            </div>
            <button type="submit">Cadastrar</button>
        </div>
        <div className="Container-form">
            <h2>Professores</h2>
            <div>
                <label htmlFor="">Nome</label>
                <input 
                {...register('adress.name_teacher')} 
                type="text"
                placeholder="Insira o nome" 
                />
            </div>
            <div>
                <label htmlFor="">CPF</label>
                <input 
                {...register('adress.cpf_teacher')} 
                type="text"
                placeholder="Insira o CPF" 
                />
            </div>
            <div>
                <label htmlFor="">Senha</label>
                <input 
                {...register('adress.password')} 
                type="password"
                placeholder="Insira a senha" 
                />
            </div>
            <div>
                <label htmlFor="">Data de Nascimento</label>
                <input 
                {...register('adress.birthdate_teacher')} 
                type="date"
                placeholder="Insira a data de nascimento" 
                />
            </div>
            <div>
                <label htmlFor="">Escola</label>
                <input 
                {...register('adress.school_teacher')} 
                type="text"
                placeholder="Insira o nome da escola" 
                />
            </div>
            <button type="submit">Cadastrar</button>
        </div>
        <div className="Container-form">
            <h2>Alunos</h2>
            <div>
                <label htmlFor="">Nome</label>
                <input 
                {...register('adress.name_student')} 
                type="text"
                placeholder="Insira o nome do aluno" 
                />
            </div>
            <div>
                <label htmlFor="">CPF</label>
                <input 
                {...register('adress.cpf_student')} 
                type="text"
                placeholder="Insira o CPF do aluno" 
                />
            </div>
            <div>
                <label htmlFor="">Data de Nascimento</label>
                <input 
                {...register('adress.bithdate_student')} 
                type="date"
                placeholder="Insira a data de nascimento" 
                />
            </div>
            <div>
                <label htmlFor="">Professor</label>
                <input 
                {...register('adress.teacher_student')} 
                type="text"
                placeholder="Insira o professor do aluno" 
                />
            </div>
            <button type="submit">Cadastrar</button>
        </div>

      </form>
    </>
  )
}

export default Form
