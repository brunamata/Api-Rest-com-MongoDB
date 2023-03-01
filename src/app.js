import express from "express";
import database from "../config/dbConnect.js";
import rotas from "./routes/index.js";

database.on("error", console.log.bind(console, "erro de conexão"));
database.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

rotas(app);

/* const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]; */

/* app.get('/', (requisicao, resposta) => {
    resposta.status(200).send('Curso de Node');
}); */



export default app;
