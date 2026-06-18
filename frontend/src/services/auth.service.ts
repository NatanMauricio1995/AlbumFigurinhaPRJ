const API_URL = "http://localhost:8080/api/users";

export async function login(usuario: string, senha: string) {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Não foi possível conectar ao servidor.");
    }

    const usuarios = await response.json();

    const usuarioEncontrado = usuarios.find(
        (u: any) =>
            u.username === usuario &&
            u.password === senha
    );

    if (!usuarioEncontrado) {
        throw new Error("Usuário ou senha inválidos.");
    }

    return usuarioEncontrado;
}