import "../../styles/admin.css";

export default function Usuarios() {

    const usuarios = [
        {
            id: 1,
            nome: "Arthur Maia Rangel",
            perfil: "Administrador"
        },
        {
            id: 2,
            nome: "Pedro Cancella Oliveira",
            perfil: "Autor"
        },
        {
            id: 3,
            nome: "Natan Mauricio Santos",
            perfil: "Colecionador"
        }
    ];

    return (
        <div className="page">

            <div className="page-header">

                <h1>Usuários</h1>

                <button>
                    Novo Usuário
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

                    {usuarios.map(usuario => (

                        <tr key={usuario.id}>

                            <td>{usuario.id}</td>

                            <td>{usuario.nome}</td>

                            <td>{usuario.perfil}</td>

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