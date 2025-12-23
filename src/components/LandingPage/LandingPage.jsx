import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <button className="login-button" onClick={() => navigate('/login')}>
        Login
      </button>
      <div className="landing-container">
    <header className="landing-header">
      <div>
      <h1>Bem-vindo ao MotivaGames!</h1>
      <h2>Descubra, jogue e motive-se com nossa plataforma de jogos.</h2>
    </div>
    </header>
    <main className="landing-main">
      <section className="landing-features">
        <h3>Recursos</h3>
          <h4>Jogos motivacionais exclusivos</h4>
          <img src="https://cdn.dribbble.com/userupload/42346351/file/original-3861e12764d32a1a5ad6e907674fe7a2.gif" id="firstgif" alt="jogos-motivacionais" />
          <h4>Comunidade ativa</h4>
          <img src="https://miro.medium.com/v2/1*Vq0sQ79QIZV6V1R-t7qtmw.gif" id="secondgif" alt="comunidade-ativa" />
          <h4>Desafios diários</h4>
          <img src="https://c.tenor.com/p322zJ_osRkAAAAC/tenor.gif" id="thirdgif" alt="desafios-diarios" />
      </section>
      <section className="landing-cta">
        <button onClick={() => navigate('/login')} className="landing-btn">Entrar</button> 
      </section>
      <section className="landing-cta">        
        <button onClick={() => navigate('/sobre')} className="landing-btn secondary">Saiba Mais</button>
      </section>
    </main>
    <footer className="landing-footer">
      <p>&copy; 2025 MotivaGames. Todos os direitos reservados.</p>
    </footer>
      </div>
    </div>
  );
}

export default LandingPage;
