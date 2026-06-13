import "../../styles/album.css";

export default function FigurinhaForm() {

    return (

        <div className="page">

            <h1>Nova Figurinha</h1>

            <form className="form">

                <input
                    type="text"
                    placeholder="Nome"
                />

                <input
                    type="text"
                    placeholder="Categoria"
                />

                <input
                    type="file"
                />

                <button>
                    Salvar
                </button>

            </form>

        </div>

    );
}