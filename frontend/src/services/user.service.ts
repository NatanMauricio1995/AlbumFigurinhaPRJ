const API_URL = "http://localhost:8080/api/users";

export async function listarUsuarios() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Erro ao carregar usuários.");
    }

    return await response.json();

}