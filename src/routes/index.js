//centralizar as rotas das diferentes tabelas

import express from "express";
import Livros from "./LivrosRoutes.js";
import Autores from "./AutoresRoutes.js";

const rotas = (app) =>{
    app.route('/').get((requisicao, resposta) => {
        resposta.status(200).send({titulo: "Curso de node"})
    });

    app.use(
        express.json(),
        Livros,
        Autores
    );
}


export default rotas;