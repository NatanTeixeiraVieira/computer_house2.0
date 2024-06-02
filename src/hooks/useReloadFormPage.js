import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useReloadFormPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const confirmationMessage = 'Tem certeza que deseja sair?';
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    const handleUnload = () => {
      localStorage.setItem('shouldRedirect', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('unload', handleUnload);
    };
  }, []);

  useEffect(() => {
    const shouldRedirect = localStorage.getItem('shouldRedirect');
    if (shouldRedirect === 'true') {
      localStorage.removeItem('shouldRedirect');
      navigate('/');
    }
  }, [navigate]);
};
