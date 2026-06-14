import { useState } from "react";

import "../../styles/album.css";

import { albuns } from "../../data/albuns";

export default function ConfiguracaoAlbum() {

    const [album, setAlbum] =
        useState(albuns[0]);

    function alterarCampo(e) {

        const { name, value } = e.target;

        setAlbum({
            ...album,
            [name]: value
        });
    }

    return (

        <div className="page">

            <div className="page-header">

                <div>

                    <h1 className="page-title">
                        Configurações do Álbum
                    </h1>

                    <div className="page-sub">
                        Personalize o álbum principal
                    </div>

                </div>

            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 400px",
                    gap: "30px"
                }}
            >

                <form className="form">

                    <div>

                        <label className="form-label">
                            Nome
                        </label>

                        <input
                            type="text"
                            name="nome"
                            value={album.nome}
                            onChange={alterarCampo}
                        />

                    </div>

                    <div>

                        <label className="form-label">
                            Descrição
                        </label>

                        <textarea
                            rows="4"
                            name="descricao"
                            value={album.descricao}
                            onChange={alterarCampo}
                        />

                    </div>

                    <div>

                        <label className="form-label">
                            Total de Páginas
                        </label>

                        <input
                            type="number"
                            name="totalPaginas"
                            value={album.totalPaginas}
                            onChange={alterarCampo}
                        />

                    </div>

                    <div>

                        <label className="form-label">
                            Cor Primária
                        </label>

                        <input
                            type="color"
                            name="corPrimaria"
                            value={album.corPrimaria}
                            onChange={alterarCampo}
                        />

                    </div>

                    <div>

                        <label className="form-label">
                            Cor Secundária
                        </label>

                        <input
                            type="color"
                            name="corSecundaria"
                            value={album.corSecundaria}
                            onChange={alterarCampo}
                        />

                    </div>

                    <div>

                        <label className="form-label">
                            URL da Capa
                        </label>

                        <input
                            type="text"
                            name="capa"
                            value={album.capa}
                            onChange={alterarCampo}
                        />

                    </div>

                </form>

                <div
                    className="card-detalhe"
                    style={{
                        borderColor:
                            album.corPrimaria
                    }}
                >

                    <img
                        src={album.capa}
                        alt={album.nome}
                    />

                    <div className="card-detalhe-body">

                        <div
                            className="card-detalhe-nome"
                            style={{
                                color:
                                    album.corPrimaria
                            }}
                        >
                            {album.nome}
                        </div>

                        <div className="card-detalhe-sub">
                            {album.descricao}
                        </div>

                        <div
                            className="detalhes"
                        >

                            <div className="item">
                                📖 {album.totalPaginas} páginas
                            </div>

                            <div className="item">
                                🖼 {album.totalFigurinhas} figurinhas
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}