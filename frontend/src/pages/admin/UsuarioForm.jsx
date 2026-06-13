import "../../styles/admin.css";

export default function UsuarioForm() {

    return (

        <div className="page">

            <h1>Novo Usuário</h1>

            <form className="form">

                <input
                    type="text"
                    placeholder="Nome"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <select>

                    <option>
                        Administrador
                    </option>

                    <option>
                        Autor
                    </option>

                    <option>
                        Colecionador
                    </option>

                </select>

                <button>
                    Salvar
                </button>

            </form>

        </div>

    );
}