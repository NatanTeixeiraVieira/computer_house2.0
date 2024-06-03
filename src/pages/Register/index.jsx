import { Link, useNavigate } from 'react-router-dom';
import { LayoutComponents } from '../../components/LoyaoutComponents';
import './styles.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../validations/schemas';
import { saveUser } from '../../services/user';

export default function Register() {
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const handleSubmitForm = async (data) => {
    const response = await saveUser(data);
    localStorage.setItem('token', JSON.stringify(response.token));
    navigate('/');
  };

  return (
    <LayoutComponents>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        noValidate
        className="register"
      >
        <div>
          <span className="register-form-title">Bem Vindo!</span>
          <div className="input-container">
            <div className="wrap-input">
              <input type="text" placeholder="Nome" {...register('name')} />
            </div>
            <span className="helper-text">{errors?.name?.message}</span>
          </div>

          <div className="input-container">
            <div className="wrap-input">
              <input
                type="text"
                placeholder="Sobrenome"
                {...register('surname')}
              />
            </div>
            <span className="helper-text">{errors?.surname?.message}</span>
          </div>

          <div className="input-container">
            <div className="wrap-input">
              <input
                type="number"
                placeholder="Telefone"
                {...register('phoneNumber')}
              />
            </div>
            <span className="helper-text">{errors?.phoneNumber?.message}</span>
          </div>

          <div className="input-container">
            <div className="wrap-input">
              <input type="email" placeholder="Email" {...register('email')} />
            </div>
            <span className="helper-text">{errors?.email?.message}</span>
          </div>

          <div className="input-container">
            <div className="wrap-input">
              <input
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
            </div>
            <span className="helper-text">{errors?.password?.message}</span>
          </div>
          <div className="container-register-form-btn"></div>
          <button type="submit" className="register-form-btn">
            Cadastrar-se
          </button>
        </div>
      </form>
    </LayoutComponents>
  );
}
