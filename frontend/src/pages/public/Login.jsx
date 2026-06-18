import "../../styles/login.css";
import logo from "../../assets/Logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { login } from "../../services/auth.service";

export default function Login() {

    const navigate = useNavigate();

    const [erro, setErro] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        setErro("");

        const usuarioDigitado =
            e.target.usuario.value;

        const senhaDigitada =
            e.target.senha.value;

        const usuario = await login(
                usuarioDigitado,
                senhaDigitada
            );
            try {

                const usuario = await login(
                    usuarioDigitado
                        .trim()
                        .toUpperCase(),
                    senhaDigitada
                );

                localStorage.setItem(
                    "usuario",
                    usuario.nome
                );

                localStorage.setItem(
                    "perfil",
                    usuario.perfil
                );

                const perfil =
                    usuario.perfil
                        .trim()
                        .toUpperCase();

                switch (perfil) {

                    case "ADMIN":
                        navigate("/admin/dashboard");
                        return;

                    case "AUTOR":
                        navigate("/autor/dashboard");
                        return;

                    case "COLECIONADOR":
                        navigate("/colecionador/dashboard");
                        return;

                    default:
                        setErro("Perfil inválido.");
                }

            }
            catch (error) {

                setErro(error.message);

            }


       
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