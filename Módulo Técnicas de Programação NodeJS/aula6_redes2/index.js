// Receber o tipo de cerveja como body(pode ser text mesmo)
// Qual método http que cria?
// Pegar o body escrever em um arquivo e responder que deu certo

const http = require('http');
const fsPromise = require('fs').promises;
const path = require('path');

const server = http.createServer();

function getBodyFunction(req) {
    return new Promise((resolve, reject) => {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('error', err => {
            reject(err);
        });
        req.on('end', () => {
            const bodyAsStr = (
                Buffer
                    .concat(body)
                    .toString()
            );
            resolve(bodyAsStr);
        });
    });
}



async function writeTxtFile(content) {
    const fileName = `newBeer(${content}).txt`
    await fsPromise.writeFile(fileName, content);
    return {
      control: `${new Date().toISOString()}-newBeer(${content}).txt`,
      fileName: fileName,
      content,
    };
}

server.on('request', async (req, res) => {
    if (req.method === 'POST') {
        const body = await getBodyFunction(req);
        const writeBody = await writeTxtFile(body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(writeBody));
    }
});

server.listen(8080);