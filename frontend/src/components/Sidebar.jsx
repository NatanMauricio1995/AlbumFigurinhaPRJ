import {
    Link,
    useLocation
} from "react-router-dom";

import "../styles/sidebar.css";

export default function Sidebar({ perfil }) {

    const location =
        useLocation();

    const menus = {

        admin: [
            {
                nome: "Dashboard",
                rota: "/admin/dashboard",
                icone: "📊"
            },
            {
                nome: "Usuários",
                rota: "/admin/usuarios",
                icone: "👥"
            },
            {
                nome: "Novo Usuário",
                rota: "/admin/usuario-form",
                icone: "➕"
            }
        ],

        autor: [
            {
                nome: "Dashboard",
                rota: "/autor/dashboard",
                icone: "📊"
            },
            {
                nome: "Álbuns",
                rota: "/autor/album",
                icone: "📚"
            },
            {
                nome: "Nova Figurinha",
                rota: "/autor/figurinha-form",
                icone: "🖼️"
            }
        ],

        colecionador: [
            {
                nome: "Dashboard",
                rota: "/colecionador/dashboard",
                icone: "📊"
            },
            {
                nome: "Meu Álbum",
                rota: "/colecionador/album",
                icone: "📘"
            },
            {
                nome: "Adicionar Figurinha",
                rota: "/colecionador/nova-figurinha",
                icone: "➕"
            }
        ]

    };

    return (

        <aside className="sidebar">

            <span className="sidebar-section-label">
                Navegação
            </span>

            {menus[perfil]?.map(item => (

                <Link
                    key={item.rota}
                    to={item.rota}
                    className={
                        location.pathname === item.rota
                            ? "menu-item active"
                            : "menu-item"
                    }
                >

                    <span>
                        {item.icone}
                    </span>

                    {item.nome}

                </Link>

            ))}

            <div className="sidebar-progress">

                <div className="progress-box">

                    <div className="progress-header">

                        <span className="progress-label">
                            Álbum
                        </span>

                        <span className="progress-pct">
                            60%
                        </span>

                    </div>

                    <div className="progress-track">

                        <div
                            className="progress-fill"
                            style={{
                                width: "60%"
                            }}
                        />

                    </div>

                    <div className="progress-counts">

                        <span>
                            120 obtidas
                        </span>

                        <span>
                            200 total
                        </span>

                    </div>

                </div>

            </div>

        </aside>

    );
}