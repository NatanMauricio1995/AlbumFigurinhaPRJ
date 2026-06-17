import {

    figurinhas,

    adicionarFigurinha

} from "../data/figurinhas";

export function listarFigurinhas(){

    return figurinhas;

}

export function salvarFigurinha(figurinha){

    adicionarFigurinha(figurinha);

}