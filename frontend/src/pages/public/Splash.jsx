import { useEffect, useState } from "react";
import "../styles/splash.css";
import logo from "../assets/Logo.png";

export default function Splash({ onFinish }) {
    const [percentual, setPercentual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setPercentual((valor) => {
                if (valor >= 100) {
                    clearInterval(intervalo);

                    setTimeout(() => {
                        onFinish();
                    }, 300);

                    return 100;
                }

                return valor + 1;
            });
        }, 30);

        return () => clearInterval(intervalo);
    }, [onFinish]);

    return (
        <div className="splash">
            <img
                src={logo}
                alt="FiguMania"
                className="logo"
            />

            <p className="texto">
                Carregando coleção...
                <span id="percentual">
                    {" "}
                    {percentual}%
                </span>
            </p>

            <div className="barra">
                <div
                    className="progresso"
                    style={{
                        width: `${percentual}%`,
                    }}
                />
            </div>

            <span className="versao">
                Versão 1.0
            </span>
        </div>
    );
}