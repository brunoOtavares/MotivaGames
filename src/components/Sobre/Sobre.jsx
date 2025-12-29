import Header from '../Header/Header';
import './Sobre.css';

function Sobre() {
  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard-content">
        <div className="sobre-container">
          <h1>Campeonato de Games Motivacional</h1>
          
          <section className="sobre-section">
            <p className="sobre-description">
              O <strong>Campeonato Games 2026</strong> é um campeonato em grupo com foco em zerar o máximo de jogos.
            </p>
            <p className="sobre-description">
              A ideia é simples: <strong>quem zerar mais jogos em 2026 ganha um jogo de graça</strong>
            </p>
          </section>

          <section className="sobre-section">
            <h2>📜 Regras da Competição</h2>
            <ul className="regras-lista">
              <li>Só vale zerar jogos diferentes.</li>
              <li>Jogos curtos são permitidos, mas devem ter no mínimo 3 horas de duração.</li>
              <li>DLCs não contam como jogo zerado.</li>
              <li>Não vale jogo de "achar gatinho na Steam" (ouviu, Marcos 👀).</li>
              <li>Jogos de emuladores ou muito antigos estão liberados.</li>
              <li>Sempre que zerar um jogo, é obrigatório tirar uma foto sua na frente da tela com o jogo zerado (print não vale).</li>
              <li>Não pode iniciar o jogo pela metade — tem que jogar do começo.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Sobre;
