const API_URL = "http://localhost:8080/api/users";

export async function login(nome: string, senha: string) {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Erro ao conectar ao servidor.");
    }

    const usuarios = await response.json();

    const usuario = usuarios.find(
        (u: any) =>
            u.nome
                .trim()
                .toUpperCase() ===
            nome
                .trim()
                .toUpperCase() &&
            u.senha === senha
    );

    if (!usuario) {
        throw new Error("Usuário ou senha inválidos.");
    }

    return usuario;
}