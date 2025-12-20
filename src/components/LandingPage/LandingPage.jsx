import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <button className="login-button" onClick={() => navigate('/login')}>
        Login
      </button>
      <div>
        <h1 className='olamundo'>
          ola

        </h1>
      </div>
    </div>
  );
}

export default LandingPage;
