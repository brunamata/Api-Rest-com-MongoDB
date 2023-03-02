import Autores from "../models/Autores.js";

class AutorController{
    static listarAutores = (requisicao, resposta) => {
        Autores.find((erro, autores) => {
            resposta.status(200).json(autores);
        });
    }

    static listarAutorPorId = (requisicao, resposta) => {
        const {id} = requisicao.params;

        Autores.findById(id, (erro, autores) =>{
            if(erro) {
                resposta.status(400).send({message: `${erro.message} - id do autor nao encontrado`});
            } else{
                resposta.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (requisicao, resposta) => {
        let autor = new Autores(requisicao.body);
        autor.save((erro) => {
            if(erro){
                resposta.status(500).send({message: `${erro.message} - falha ao cadasttrar autor.`});
            } else{
                resposta.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (requisicao, resposta) => {
        const id = requisicao.params.id;

        Autores.findByIdAndUpdate(id, {$set: requisicao.body}, (erro) => {
            if(!erro){
                resposta.status(200).send({message: `Autor ${id} atualizado com sucesso!`});
            }else{
                resposta.status(500).send({message: erro.message});
            }
        })
    }

    static excluirAutor = (requisicao, resposta) =>{
        const id = requisicao.params.id;

        Autores.findByIdAndDelete(id, erro => {
            if(erro){
                resposta.status(500).send({message: erro.message});
            }
            else{
                resposta.status(200).send({message: `Autor ${id} removido com sucesso`});
            }
        })
    }
}

export default AutorController;