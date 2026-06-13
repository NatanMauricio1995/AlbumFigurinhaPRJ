import { Link } from "react-router-dom";

import "../styles/footer.css";
import logo from "../assets/Logo2.png";

export default function Footer() {

    return (

        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">

                    <img
                        src={logo}
                        alt="FiguMania"
                        className="footer-logo"
                    />

                    <span>
                        © 2026 FiguMania
                    </span>

                </div>

                <div className="footer-links">

                    <Link to="/about">
                        Sobre
                    </Link>

                </div>

                <div className="footer-version">

                    Versão 1.0

                </div>

            </div>

        </footer>

    );
}