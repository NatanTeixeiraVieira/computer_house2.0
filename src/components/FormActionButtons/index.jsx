import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function FormActionButtons({
  onContinueButtonClick,
  contibueButtonContent = 'Continuar',
}) {
  const navigate = useNavigate();

  const hanldeBackPrevioustPage = () => {
    navigate(-1);
  };

  return (
    <div className="form-action-buttons">
      <button className="cancel" onClick={hanldeBackPrevioustPage}>
        {' '}
        Voltar{' '}
      </button>
      <button
        type="submit"
        className="continue"
        onClick={onContinueButtonClick}
      >
        {contibueButtonContent}
      </button>
    </div>
  );
}
