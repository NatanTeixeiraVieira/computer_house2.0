
import { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { LayoutComponents } from '../../components/LoyaoutComponents';
const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <LayoutComponents>
      <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form"></form>
      <form className="login">
        <div>
          <span className="login-form-title">Bem Vindo!</span>
          <div className="wrap-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>
          <div className="wrap-input">
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Senha"></span>
          </div>
          <div className="container-login-form-btn"></div>
          <button className="login-form-btn">Login</button>
        </div>
        <div className="text-center">
          <span className="tex1">Não possui conta?</span>
          <Link className="txt2" to="#">
            Criar conta
          </Link>
        </div>
      </form>
      </div>
      </div>
    </div>
    </LayoutComponents>
  );
};

export default Login;
