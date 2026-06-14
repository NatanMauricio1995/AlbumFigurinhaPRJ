import "../../styles/album.css";

export default function FigurinhaForm() {

    return (

        <div className="page">

            <div className="page-header">

                <div>

                    <h1 className="page-title">
                        Nova Figurinha
                    </h1>

                    <div className="page-sub">
                        Cadastro de figurinhas do álbum
                    </div>

                </div>

            </div>

            <form className="form">

                <div>

                    <label className="form-label">
                        Nome
                    </label>

                    <input
                        type="text"
                        placeholder="Heatblast"
                    />

                </div>

                <div>

                    <label className="form-label">
                        Número
                    </label>

                    <input
                        type="number"
                        placeholder="1"
                    />

                </div>

                <div>

                    <label className="form-label">
                        Página
                    </label>

                    <input
                        type="number"
                        placeholder="1"
                    />

                </div>

                <div>

                    <label className="form-label">
                        Descrição
                    </label>

                    <textarea
                        rows="5"
                        placeholder="Descrição da figurinha"
                    />

                </div>

                <div>

                    <label className="form-label">
                        Foto
                    </label>

                    <input
                        type="file"
                    />

                </div>

                <div>

                    <label className="form-label">
                        Tag MD5
                    </label>

                    <input
                        type="text"
                        placeholder="Gerado automaticamente"
                        disabled
                    />

                </div>

                <button
                    className="login-btn"
                    type="submit"
                >
                    Salvar Figurinha
                </button>

            </form>

        </div>

    );
}