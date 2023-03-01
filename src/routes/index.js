//centralizar as rotas das diferentes tabelas

import express from "express";
import Livros from "./LivrosRoutes.js";

const rotas = (app) =>{
    app.route('/').get((requisicao, resposta) => {
        resposta.status(200).send({titulo: "Curso de node"})
    });

    app.use(
        express.json(),
        Livros
    );
}

export default rotas;