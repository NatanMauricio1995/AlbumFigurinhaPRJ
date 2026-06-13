import "../../styles/album.css";

export default function NovaFigurinha() {

    return (

        <div className="page">

            <h1>Adicionar Figurinha</h1>

            <form className="form">

                <input
                    type="text"
                    placeholder="Código"
                />

                <button>
                    Adicionar
                </button>

            </form>

        </div>

    );
}