import { useNavigate } from "react-router-dom";

import logo from "../assets/Logo.png";
import "../styles/header.css";

export default function Header() {

  const navigate = useNavigate();

  const usuario =
    localStorage.getItem("usuario")
    || "Usuário";

  function logout() {

    localStorage.removeItem("usuario");

    navigate("/login");
  }

  return (
    <header className="header">

      <div className="header-left">

        <img
          src={logo}
          alt="FiguMania"
          className="header-logo"
        />

        <span className="header-title">
          FiguMania
        </span>

      </div>

      <div className="header-right">

        <span className="usuario">
          👤 {usuario}
        </span>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Sair
        </button>

      </div>

    </header>
  );
}