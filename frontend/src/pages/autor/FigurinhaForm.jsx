import { useState } from "react";
import "../../styles/album.css";

export default function FigurinhaForm() {

    const [figurinha, setFigurinha] = useState({
        nome: "",
        numero: "",
        pagina: "",
        descricao: "",
        foto: null,
        preview: "",
        tag: "Aguardando imagem..."
    });

    function alterarCampo(e) {

        const { name, value } = e.target;

        setFigurinha({
            ...figurinha,
            [name]: value
        });

    }

    function alterarImagem(e) {

        const arquivo = e.target.files[0];

        if (!arquivo) return;

        const preview = URL.createObjectURL(arquivo);

        setFigurinha({

            ...figurinha,
            foto: arquivo,
            preview,
            tag: "Pronta para gerar MD5"
        });

    }

    function salvar(e){

        e.preventDefault();

        if(
            !figurinha.nome ||
            !figurinha.numero ||
            !figurinha.pagina
        ){

            alert("Preencha todos os campos obrigatórios.");

            return;
        }

        console.log(figurinha);

        alert("Figurinha cadastrada!");

        setFigurinha({
            nome: "",
            numero: "",
            pagina: "",
            descricao: "",
            foto: null,
            preview: "",
            tag: "Aguardando imagem..."
        });

    }

    function cancelar() {

        setFigurinha({
            nome: "",
            numero: "",
            pagina: "",
            descricao: "",
            foto: null,
            preview: "",
            tag: "Aguardando imagem..."
        });

    }

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

            <form className="form" onSubmit={salvar}>

                <div>

                    <label className="form-label">
                        Nome
                    </label>

                    <input
                        type="text"
                        name="nome"
                        value={figurinha.nome}
                        onChange={alterarCampo}
                        placeholder="Heatblast"
                        required
                    />

                </div>

                <div>

                    <label className="form-label">
                        Número
                    </label>

                <input
                    type="number"
                    name="numero"
                    value={figurinha.numero}
                    onChange={alterarCampo}
                    placeholder="1"
                    min="1"
                    required
                />

                </div>

                <div>

                    <label className="form-label">
                        Página
                    </label>

                    <input
                        type="number"
                        name="pagina"
                        value={figurinha.pagina}
                        onChange={alterarCampo}
                        placeholder="1"
                        min="1"
                        required
                    />

                </div>

                <div>

                    <label className="form-label">
                        Descrição
                    </label>

                    <textarea
                        rows="5"
                        name="descricao"
                        value={figurinha.descricao}
                        onChange={alterarCampo}
                        placeholder="Descrição da figurinha"
                    />

                </div>

                <div>

                    <label className="form-label">
                        Foto
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={alterarImagem}
                        required
                    />

                </div>

                {
                    figurinha.preview && (

                        <div
                            style={{
                                marginTop:20,
                                textAlign:"center"
                            }}
                        >

                            <img

                                src={figurinha.preview}

                                alt="Preview"

                            style={{

                                width:200,
                                height:200,
                                objectFit:"cover",
                                borderRadius:12,
                                border:"2px solid #444"
                            }}

                            />

                        </div>

                    )
                }

                <div>

                    <label className="form-label">
                        Tag MD5
                    </label>

                    <input
                        type="text"
                        placeholder="Gerado automaticamente"
                        value={figurinha.tag}
                        disabled
                    />

                </div>

                <button
                    type="reset"
                    className="secondary-button"
                >
                    Cancelar
                </button>

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