import Livros from "../models/Livros.js";

class LivroController{
    static listarLivros = (requisicao, resposta) => {
        Livros.find((erro, livros) => {
            resposta.status(200).json(livros);
        });
    }
}

export default LivroController;