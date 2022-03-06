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



function writeTxtFile(content) {
    const fileName = `newBeer(${content}).txt`;
    const filePath = path.join(__dirname, fileName)
    fsPromise.writeFile(filePath, content, 'utf-8')
        .then(() => console.log('arquivo criado'))
        .catch(console.err);
    return {
      control: `${new Date().toISOString()}-${fileName}`,
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