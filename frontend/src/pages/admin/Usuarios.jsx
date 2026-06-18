import "../../styles/admin.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    listarUsuarios,
    pesquisarUsuarios
} from "../../services/user.service";

export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const navigate = useNavigate();
    useEffect(() => {

        carregarUsuarios();

    }, []);

    async function carregarUsuarios() {

        try {

            const dados = await listarUsuarios();

            setUsuarios(dados);

        }
        catch (erro) {

            console.error(erro);

        }

    }

    async function buscarUsuarios() {

        try {

            if (pesquisa.trim() === "") {

                carregarUsuarios();
                return;

            }

            const dados =
                await pesquisarUsuarios(pesquisa);

            setUsuarios(dados);

        }
        catch (erro) {

            console.error(erro);

        }

    }

    return (

        <div className="page">

            <div className="page-header">

                <h1>Usuários</h1>

                <button
                    onClick={() =>
                        navigate("/admin/usuario-form")
                    }
                >
                    Novo Usuário
                </button>

            </div>

            <div className="pesquisa">

                <input
                    type="text"
                    placeholder="Pesquisar usuário..."
                    value={pesquisa}
                    onChange={(e) =>
                        setPesquisa(e.target.value)
                    }
                />

                <button
                    onClick={buscarUsuarios}
                >
                    Pesquisar
                </button>

            </div>

            <table className="tabela">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Nome</th>

                        <th>Perfil</th>

                        <th>Ações</th>

                    </tr>

                </thead>

                <tbody>

                    {usuarios.map((usuario) => (

                        <tr key={usuario.id}>

                            <td>
                                {usuario.id}
                            </td>

                            <td>
                                {usuario.nome}
                            </td>

                            <td>
                                {usuario.perfil}
                            </td>

                            <td>

                                <button>
                                    Editar
                                </button>

                                <button>
                                    Excluir
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}