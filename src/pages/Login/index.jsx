import { Link, useNavigate } from 'react-router-dom';
import { LayoutComponents } from '../../components/LoyaoutComponents';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../validations/schemas';
import { login } from '../../services/login';
import './styles.css';

export default function Login() {
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitForm = async ({ email, password }) => {
    const isLogged = await login(email, password);

    if (isLogged) {
      navigate('/');
      return;
    }

    alert('Usuário não encontrado');
  };
  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');
  return (
    <LayoutComponents>
      <div className="login">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login" onSubmit={handleSubmit(handleSubmitForm)}>
              <div>
                <span className="login-form-title">Bem Vindo!</span>
                <div className="input-container">
                  <div className="wrap-input">
                    <input
                      type="email"
                      // value={email}
                      placeholder="Email"
                      // onChange={(e) => setEmail(e.target.value)}
                      {...register('email')}
                    />
                  </div>
                  <span className="helper-text">{errors?.email?.message}</span>
                </div>
                <div className="input-container">
                  <div className="wrap-input">
                    <input
                      type="password"
                      // value={senha}
                      placeholder="Senha"
                      // onChange={(e) => setSenha(e.target.value)}
                      {...register('password')}
                    />
                  </div>
                  <span className="helper-text">
                    {errors?.password?.message}
                  </span>
                </div>
                <div className="container-login-form-btn"></div>
                <button className="login-form-btn">Login</button>
              </div>
              <div className="text-center">
                <span className="txt1">Não possui conta?</span>
                <Link className="txt2" to="/register">
                  Criar conta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutComponents>
  );
}
