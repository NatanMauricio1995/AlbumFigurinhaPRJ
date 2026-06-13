import "../../styles/about.css";
import logo from "../../assets/Logo.png";

export default function About() {
    return (
        <div className="container">

            <div className="card">

                <img
                    src={logo}
                    alt="FiguMania"
                    className="logo"
                />

                <h1>FiguMania</h1>

                <p className="descricao">
                    Álbum de Figurinhas Virtual desenvolvido
                    como trabalho da disciplina PRJ - 2026/01.
                </p>

                <div className="info-box">

                    <h3> Equipe de Desenvolvimento</h3>

                    <div className="membro">
                        Arthur Maia Rangel
                    </div>

                    <div className="membro">
                        Pedro Cancella Oliveira
                    </div>

                    <div className="membro">
                        Natan Mauricio Santos
                    </div>

                </div>

                <div className="detalhes">

                    <div className="item">
                        <strong>Versão:</strong> 1.0
                    </div>

                    <div className="item">
                        <strong>Semestre:</strong> 2026/01
                    </div>

                </div>

            </div>

        </div>
    );
}