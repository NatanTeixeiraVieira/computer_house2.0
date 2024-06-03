import React from 'react'
import '.styles/css'
import { Link } from 'react-router-dom'
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const Login = () => {
    return (
        <LayoutComponents>
            <form className='login-form'>
            <div>
                <span className="login-form-title">Bem Vindo!</span>
                <div className="wrap-input">
                    <input type="email">
                        value={email}
                        onChange={e => setEmail(e.targed.value)}
                        <span className="focus-input" data-placeholder="Email"></span>
                    </input>
                </div>
                <div className="wrap-input">
                    <input type="Senha">
                        value={senha}
                        onChange={e => setSenha(e.targed.value)}
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </input>
                </div>
                <div className="container-login-form-btn"></div>
                <button className="login-form-btn">Login</button>
            </div>
            <div className="text-center">
                <span className="tex1">Não possui conta?</span>
                <Link className="txt2" to="#">Criar conta</Link>
            </div>
            </form>
        </LayoutComponents>

    );
}

export default Login;
