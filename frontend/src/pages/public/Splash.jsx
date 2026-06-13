import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/splash.css";
import logo from "../../assets/Logo.png";

import "../../styles/splash.css";

export default function Splash() {

    const navigate = useNavigate();

    useEffect(() => {

        const timer = setTimeout(() => {

            navigate("/login");

        }, 3500);

        return () => clearTimeout(timer);

    }, [navigate]);

    return (

        <div className="splash-page">

            <div className="splash">

            <img
                src={logo}
                alt="FiguMania"
                className="splash-logo"
            />



                <div className="splash-barra">

                    <div className="splash-progresso" />

                </div>

                <span className="splash-status">
                    Carregando coleção...
                </span>

            </div>

            <span className="splash-versao">
                Versão 1.0
            </span>

        </div>

    );
}