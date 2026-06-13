import { albuns } from "../../data/albuns";
import { figurinhas } from "../../data/figurinhas";

export default function Dashboard() {

    return (

        <div className="page">

            <h1>
                Dashboard do Autor
            </h1>

            <div className="cards">

                <div className="card-figurinha">
                    <h2>
                        {albuns.length}
                    </h2>

                    <p>
                        Meus Álbuns
                    </p>
                </div>

                <div className="card-figurinha">
                    <h2>
                        {figurinhas.length}
                    </h2>

                    <p>
                        Minhas Figurinhas
                    </p>
                </div>

            </div>

        </div>

    );
}