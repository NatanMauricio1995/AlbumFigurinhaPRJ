import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/splash.css";
import logo from "../../assets/Logo.png";

export default function Splash() {
    const [percentual, setPercentual] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const intervalo = setInterval(() => {

            setPercentual((valor) => {

                if (valor >= 100) {

                    clearInterval(intervalo);

                    setTimeout(() => {
                        navigate("/login");
                    }, 500);

                    return 100;
                }

                return valor + 1;
            });

        }, 30);

        return () => clearInterval(intervalo);

    }, [navigate]);

    return (
        <div className="splash-page">
            <div className="splash">

                <img
                    src={logo}
                    alt="FiguMania"
                    className="logo"
                />

                <p className="subtitulo">
                    Seu álbum de figurinhas digital
                </p>
                
                <p className="texto">
                    Carregando coleção...
                    <span className="percentual">
                        {percentual}%
                    </span>
                </p>

                <div className="barra">

                    <div
                        className="progresso"
                        style={{
                            width: `${percentual}%`
                        }}
                    />

                </div>

                <span className="versao">
                    Versão 1.0
                </span>

                <div className="equipe">
                    Arthur Maia Rangel •
                    Pedro Cancella Oliveira •
                    Natan Mauricio Santos
                </div>
            </div>
        </div>
    );
}