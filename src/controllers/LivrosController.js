import Livros from "../models/Livros.js";

class LivroController{
    static listarLivros = (requisicao, resposta) => {
        Livros.find().populate('autor') 
        .exec((erro, livros) => {
            resposta.status(200).json(livros);
        });
    }

    static listarLivroPorId = (requisicao, resposta) => {
        const {id} = requisicao.params;

        Livros.findById(id)
        .populate('autor', 'nome')
        .exec((erro, livros) =>{
            if(erro) {
                resposta.status(400).send({message: `${erro.message} - id do livro nao encontrado`});
            } else{
                resposta.status(200).send(livros);
            }
        })
    }

    static listarLivroPorEditora = (requisicao, resposta) => {
        const {editora} = requisicao.query;

        Livros.find({'editora': editora}, {}, (erro, livros) =>{
            resposta.status(200).send(livros);
        })
    }

    static cadastrarLivro = (requisicao, resposta) => {
        let livro = new Livros(requisicao.body);
        livro.save((erro) => {
            if(erro){
                resposta.status(500).send({message: `${erro.message} - falha ao cadasttrar livro.`});
            } else{
                resposta.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (requisicao, resposta) => {
        const id = requisicao.params.id;

        Livros.findByIdAndUpdate(id, {$set: requisicao.body}, (erro) => {
            if(!erro){
                resposta.status(200).send({message: `Livro ${id} atualizado com sucesso!`});
            }else{
                resposta.status(500).send({message: erro.message});
            }
        })
    }

    static excluirLivro = (requisicao, resposta) =>{
        const id = requisicao.params.id;

        Livros.findByIdAndDelete(id, erro => {
            if(erro){
                resposta.status(500).send({message: erro.message});
            }
            else{
                resposta.status(200).send({message: `Livro ${id} removido com sucesso`});
            }
        })
    }
}

export default LivroController;