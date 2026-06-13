import "../../styles/login.css";
import logo from "../../assets/Logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { usuarios } from "../../data/usuarios";

export default function Login() {

    const navigate = useNavigate();

    const [erro, setErro] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        setErro("");

        const usuarioDigitado =
            e.target.usuario.value;

        const senhaDigitada =
            e.target.senha.value;

        const usuario = usuarios.find(
            u =>
                u.usuario === usuarioDigitado &&
                u.senha === senhaDigitada
        );

        if (!usuario) {

            setErro(
                "Usuário ou senha inválidos."
            );

            return;
        }

        localStorage.setItem(
            "usuario",
            usuario.nome
        );

        localStorage.setItem(
            "perfil",
            usuario.perfil
        );

        if (usuario.perfil === "admin") {
            navigate("/admin/dashboard");
            return;
        }

        if (usuario.perfil === "autor") {
            navigate("/autor/dashboard");
            return;
        }

        navigate("/colecionador/dashboard");
    }

    return (

        <div className="login-page">

            <div className="login-card">

                <img
                    src={logo}
                    alt="FiguMania"
                    className="login-logo"
                />

                <h1 className="login-title">
                    Bem-vindo
                </h1>

                <p className="login-sub">
                    Entre para acessar seu álbum
                </p>

                {erro && (

                    <div className="login-error">
                        {erro}
                    </div>

                )}

                <form
                    onSubmit={handleSubmit}
                >

                    <div className="campo">

                        <label>
                            Usuário
                        </label>

                        <input
                            type="text"
                            name="usuario"
                            placeholder="Digite seu usuário"
                            required
                        />

                    </div>

                    <div className="campo">

                        <label>
                            Senha
                        </label>

                        <input
                            type="password"
                            name="senha"
                            placeholder="Digite sua senha"
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Entrar
                    </button>

                </form>

                <div className="login-link">

                    Usuários de teste:

                    <br />

                    <span>
                        admin / 123
                    </span>

                    {" • "}

                    <span>
                        autor / 123
                    </span>

                    {" • "}

                    <span>
                        colecionador / 123
                    </span>

                </div>

            </div>

        </div>

    );
}