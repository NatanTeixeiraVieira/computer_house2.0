import { useState } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutComponents } from '../../components/LoyaoutComponents';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../validations/schemas';
import { useForm } from 'react-hook-form';
import { login } from '../../services/login';
const Login = () => {
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitForm = async ({ email, password }) => {
    const isLogged = login(email, password);

    if (isLogged) {
      navigate('/');
      return;
    }

    alert('Usuário não encontrado');
  };

  // return (
  //   <LayoutComponents>
  //     <form className="login">
  //       <div>
  //         <span className="login-form-title">Bem Vindo!</span>
  //         <div className="wrap-input">
  //           <input
  //             type="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //           <span className="focus-input" data-placeholder="Email"></span>
  //         </div>
  //         <div className="wrap-input">
  //           <input
  //             type="password"
  //             value={senha}
  //             onChange={(e) => setSenha(e.target.value)}
  //           />
  //           <span className="focus-input" data-placeholder="Senha"></span>
  //         </div>
  //         <div className="container-login-form-btn"></div>
  //         <button className="login-form-btn">Login</button>
  //       </div>
  //       <div className="text-center">
  //         <span className="tex1">Não possui conta?</span>
  //         <Link className="txt2" to="#">
  //           Criar conta
  //         </Link>
  //       </div>
  //     </form>
  //   </LayoutComponents>
  // );
};

export default Login;
