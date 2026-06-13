import { useNavigate } from "react-router-dom";

import "../styles/header.css";
import logo from "../assets/Logo.png";

export default function Header() {

    const navigate = useNavigate();

    const usuario =
        localStorage.getItem("usuario")
        || "Usuário";

    function logout() {

        localStorage.removeItem("usuario");
        localStorage.removeItem("perfil");

        navigate("/login");
    }

    const iniciais = usuario
        .split(" ")
        .map(nome => nome[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    return (

        <header className="header">

            <div className="header-left">

            <img
                src={logo}
                alt="FiguMania"
                className="header-logo"
            />

                <div className="header-brand">

                    <span className="header-title">
                        FiguMania
                    </span>

                    <span className="header-sub">
                        Álbum Virtual
                    </span>

                </div>

            </div>

            <div className="header-right">

                <div className="header-xp">
                    ⭐ Colecionador
                </div>

                <span className="header-username">
                    {usuario}
                </span>

                <div className="header-avatar">
                    {iniciais}
                </div>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    🚪 Sair
                </button>

            </div>

        </header>

    );
}