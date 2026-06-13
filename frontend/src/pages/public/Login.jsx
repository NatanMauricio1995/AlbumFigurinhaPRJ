import "../styles/login.css";
import logo from "../assets/Logo.png";

export default function Login() {

    function handleSubmit(e) {
        e.preventDefault();

        const usuario =
            e.target.usuario.value;

        const senha =
            e.target.senha.value;

        console.log(usuario);
        console.log(senha);

        alert("Login realizado com sucesso!");
    }

    return (
        <div className="container">

            <div className="card">

                <img
                    src={logo}
                    alt="FiguMania"
                    className="logo"
                />

                <h1>Bem-vindo</h1>

                <form
                    id="loginForm"
                    onSubmit={handleSubmit}
                >

                    <div className="campo">
                        <label>Usuário</label>

                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu usuário"
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Senha</label>

                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>

                    <button type="submit">
                        Entrar
                    </button>

                </form>

                <a href="#" className="link">
                    Esqueci minha senha
                </a>

            </div>

        </div>
    );
}