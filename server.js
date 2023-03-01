// const http = require('http');
import app from './src/app.js';

const porta = process.env.PORT || 3000; //boas maneiras
/* 
const server = http.createServer((requisicao, resposta) =>{
    //o que quero devolver quando chamar meu servidor
    resposta.writeHead(200, {'Content-Type': 'text/plain'});
    resposta.end('Curso de Node');
});
*/

/*server*/app.listen( porta, () =>{
    console.log(`Servidor escutando em http://localhost:${porta}`);
}) 