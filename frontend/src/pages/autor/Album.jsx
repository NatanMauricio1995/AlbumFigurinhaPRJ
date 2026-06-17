import "../../styles/album.css";
import { figurinhas } from "../../data/figurinhas";

export default function Album() {

    return (

        <div className="page">

            <h1>Meu Álbum</h1>

                <div className="cards">

                    {figurinhas.map((figurinha) => (

                        <div
                            key={figurinha.id}
                            className="card-figurinha"
                        >

                            <div
                                style={{
                                    fontSize: "60px",
                                    textAlign: "center"
                                }}
                            >
                                {figurinha.foto}
                            </div>

                            <h3>
                                #{figurinha.numero} - {figurinha.nome}
                            </h3>

                            <p>
                                Página {figurinha.pagina}
                            </p>

                    </div>

                ))}

            </div>

        </div>

        

    );
}