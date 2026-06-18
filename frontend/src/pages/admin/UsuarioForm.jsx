import "../../styles/admin.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { salvarUsuario } from "../../services/user.service";

export default function UsuarioForm() {

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [perfil, setPerfil] = useState("ADMIN");
    const [erro, setErro] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        setErro("");

        try {

            await salvarUsuario({

                nome: nome.trim(),

                senha: senha.trim(),

                perfil: perfil

            });

            alert("Usuário cadastrado com sucesso!");

            navigate("/admin/usuarios");

        }
        catch (error) {

            setErro(
                error instanceof Error
                    ? error.message
                    : "Erro ao salvar usuário."
            );

        }

    }

    return (

        <div className="page">

            <h1>Novo Usuário</h1>

            {erro && (

                <div className="login-error">
                    {erro}
                </div>

            )}

            <form
                className="form"
                onSubmit={handleSubmit}
            >

                <label>

                    Nome

                    <input
                        type="text"
                        value={nome}
                        onChange={(e) =>
                            setNome(e.target.value)
                        }
                        required
                    />

                </label>

                <label>

                    Senha

                    <input
                        type="password"
                        value={senha}
                        onChange={(e) =>
                            setSenha(e.target.value)
                        }
                        required
                    />

                </label>

                <label>

                    Perfil

                    <select
                        value={perfil}
                        onChange={(e) =>
                            setPerfil(e.target.value)
                        }
                    >

                        <option value="ADMIN">
                            Administrador
                        </option>

                        <option value="AUTOR">
                            Autor
                        </option>

                        <option value="COLECIONADOR">
                            Colecionador
                        </option>

                    </select>

                </label>

                <div className="acoes">

                    <button
                        type="submit"
                    >
                        Salvar
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            navigate("/admin/usuarios")
                        }
                    >
                        Cancelar
                    </button>

                </div>

            </form>

        </div>

    );

}