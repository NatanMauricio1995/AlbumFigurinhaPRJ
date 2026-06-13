import { usuarios } from "../../data/usuarios";
import { albuns } from "../../data/albuns";
import { figurinhas } from "../../data/figurinhas";

export default function Dashboard() {

    return (

        <div className="page">

            <h1>
                Dashboard Administrativo
            </h1>

            <div className="cards">

                <div className="card-figurinha">
                    <h2>
                        {usuarios.length}
                    </h2>

                    <p>
                        Usuários
                    </p>
                </div>

                <div className="card-figurinha">
                    <h2>
                        {albuns.length}
                    </h2>

                    <p>
                        Álbuns
                    </p>
                </div>

                <div className="card-figurinha">
                    <h2>
                        {figurinhas.length}
                    </h2>

                    <p>
                        Figurinhas
                    </p>
                </div>

            </div>

        </div>

    );
}