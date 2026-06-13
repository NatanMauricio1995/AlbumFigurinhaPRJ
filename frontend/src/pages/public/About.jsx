import "../../styles/about.css";
import logo from "../../assets/Logo.png";

export default function About() {

    return (

        <div className="about-page">

            <div className="about-card">

                <div className="about-header">

                    <img
                        src={logo}
                        alt="FiguMania"
                        className="about-logo"
                    />

                    <h1 className="about-title">
                        FiguMania
                    </h1>

                    <p className="descricao">
                        Álbum de Figurinhas Virtual desenvolvido
                        como trabalho da disciplina PRJ - 2026/01.
                        O sistema permite o gerenciamento de
                        usuários, álbuns e figurinhas através
                        de diferentes perfis de acesso.
                    </p>

                </div>

                <div className="info-box">

                    <div className="info-box-title">
                        Equipe de Desenvolvimento
                    </div>

                    <div className="membro">

                        <div className="membro-avatar">
                            AM
                        </div>

                        <div className="membro-info">

                            <div className="membro-nome">
                                Arthur Maia Rangel
                            </div>

                            <div className="membro-cargo">
                                Desenvolvedor
                            </div>

                        </div>

                    </div>

                    <div className="membro">

                        <div className="membro-avatar">
                            PC
                        </div>

                        <div className="membro-info">

                            <div className="membro-nome">
                                Pedro Cancella Oliveira
                            </div>

                            <div className="membro-cargo">
                                Desenvolvedor
                            </div>

                        </div>

                    </div>

                    <div className="membro">

                        <div className="membro-avatar">
                            NM
                        </div>

                        <div className="membro-info">

                            <div className="membro-nome">
                                Natan Mauricio Santos
                            </div>

                            <div className="membro-cargo">
                                Desenvolvedor
                            </div>

                        </div>

                    </div>

                </div>

                <div className="info-box">

                    <div className="info-box-title">
                        Informações do Projeto
                    </div>

                    <div className="detalhes">

                        <div className="item">
                            📦 Versão 1.0
                        </div>

                        <div className="item">
                            🎓 Semestre 2026/01
                        </div>

                        <div className="item">
                            ⚛ React + Vite
                        </div>

                        <div className="item">
                            ☕ Backend Java
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}