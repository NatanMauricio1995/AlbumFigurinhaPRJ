const API_URL = "http://localhost:8080/api/users";

export async function listarUsuarios() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Erro ao carregar usuários.");
    }

    return await response.json();

}

export async function pesquisarUsuarios(nome: string) {

    const response = await fetch(
        `${API_URL}?nome=${encodeURIComponent(nome)}`
    );

    if (!response.ok) {
        throw new Error("Erro ao pesquisar usuários.");
    }

    return await response.json();

}

export async function salvarUsuario(usuario: any) {

    const response = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(usuario)

    });

    if (!response.ok) {
        throw new Error("Erro ao salvar usuário.");
    }

    return await response.json();

}