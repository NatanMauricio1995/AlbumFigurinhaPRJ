const API_URL = "http://localhost:8080/api/users";

export async function login(nome: string, senha: string) {

    console.log("====================================");
    console.log("Iniciando login...");
    console.log("Usuário digitado:", nome);
    console.log("Senha digitada:", senha);

    const response = await fetch(API_URL);

    console.log("Status da resposta:", response.status);

    if (!response.ok) {
        throw new Error("Erro ao conectar ao servidor.");
    }

    const usuarios = await response.json();

    console.log("Usuários recebidos:");
    console.table(usuarios);

    const usuario = usuarios.find((u: any) => {

        const nomeBackend = u.nome.trim().toUpperCase();
        const nomeDigitado = nome.trim().toUpperCase();

        const usuarioOk = nomeBackend === nomeDigitado;
        const senhaOk = u.senha === senha;

        console.log("-------------------------------");
        console.log("Comparando com:", u.nome);
        console.log("Nome backend :", nomeBackend);
        console.log("Nome digitado:", nomeDigitado);
        console.log("Senha backend:", u.senha);
        console.log("Senha digitada:", senha);
        console.log("Nome OK :", usuarioOk);
        console.log("Senha OK:", senhaOk);

        return usuarioOk && senhaOk;

    });

    console.log("Resultado do find:", usuario);

    if (!usuario) {

        throw new Error("Usuário ou senha inválidos.");

    }

    console.log("Login realizado com sucesso!");

    return usuario;

}