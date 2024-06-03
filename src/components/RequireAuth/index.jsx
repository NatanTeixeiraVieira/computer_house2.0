import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (JSON.parse(token)) {
      setIsAuthenticated(true);
      return;
    }

    navigate('/login');
  }, [navigate]);

  if (isAuthenticated) return children;
}
