import { useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <header className="dashboard-header">
      <img src="/vite.svg" alt="MotivaGames Logo" className="logo" onClick={() => navigate('/home')} />
      <nav>
        <button 
          onClick={() => navigate('/home')} 
          className={`nav-button ${location.pathname === '/home' ? 'active' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => navigate('/perfil')} 
          className={`nav-button ${location.pathname === '/perfil' ? 'active' : ''}`}
        >
          Perfil
        </button>
        <button 
          onClick={() => navigate('/sobre')} 
          className={`nav-button ${location.pathname === '/sobre' ? 'active' : ''}`}
        >
          Sobre
        </button>
        <button 
          onClick={() => navigate('/usuarios')} 
          className={`nav-button ${location.pathname === '/usuarios' ? 'active' : ''}`}
        >
          Usuários
        </button>
      </nav>
      <button onClick={handleLogout} className="nav-button logout">
        Sair
      </button>
    </header>
  );
}

export default Header;
