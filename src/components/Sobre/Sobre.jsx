import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './Sobre.css';

function Sobre() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <nav>
          <button onClick={() => navigate('/home')} className="nav-button">
            Home
          </button>
          <button onClick={() => navigate('/perfil')} className="nav-button">
            Perfil
          </button>
          <button onClick={() => navigate('/sobre')} className="nav-button active">
            Sobre
          </button>
          <button onClick={handleLogout} className="nav-button logout">
            Sair
          </button>
        </nav>
      </header>
      <main className="dashboard-content">
        <h1>Sobre</h1>
      </main>
    </div>
  );
}

export default Sobre;
