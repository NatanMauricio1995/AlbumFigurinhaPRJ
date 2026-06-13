import "../styles/about.css";
import logo from "../assets/Logo.png";

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
                    Sistema Web para gerenciamento
                    de álbuns de figurinhas,
                    desenvolvido como trabalho da
                    disciplina IST P1 - 2026/01.
                </p>

                <h2>Equipe</h2>

                <ul className="integrantes">
                    <li>Arthur Maia Rangel</li>
                    <li>Pedro Cancella Oliveira</li>
                    <li>Natan Mauricio Santos</li>
                </ul>

                <div className="info">
                    <p>
                        <strong>Versão:</strong> 1.0
                    </p>

                    <p>
                        <strong>Semestre:</strong> 2026/01
                    </p>
                </div>

            </div>

        </div>
    );
}