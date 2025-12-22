import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './Perfil.css';

function Perfil() {
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
        <img src="/vite.svg" alt="MotivaGames Logo" className="logo" onClick={() => navigate('/home')} />
        <nav>
          <button onClick={() => navigate('/home')} className="nav-button">
            Home
          </button>
          <button onClick={() => navigate('/perfil')} className="nav-button active">
            Perfil
          </button>
          <button onClick={() => navigate('/sobre')} className="nav-button">
            Sobre
          </button>
        </nav>
        <button onClick={handleLogout} className="nav-button logout">
          Sair
        </button>
      </header>
      <main>
        <h1 className='fonte'> Ola mundo </h1>
      </main>
    </div>
  );
}

export default Perfil;
