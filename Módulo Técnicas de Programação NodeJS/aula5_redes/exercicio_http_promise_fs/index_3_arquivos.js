//Pacotes necessários
const http = require('http');
const fsPromise = require('fs').promises;
const path = require('path');

// função que fará a leitura dos 3 arquivos .txt e devolverá uma promise
async function readerText() {

    try {
        const folderPath = path.join(__dirname, 'txt_files');
        const files = await fsPromise.readdir(folderPath);
        const readFiles = files.map(textFile => {
            const filePath = path.join(__dirname, 'txt_files', textFile);
            return fsPromise.readFile(filePath, 'utf-8');
            });
            return Promise.all(readFiles);
        } catch (err) {
            throw new Error('error in reader', err);
        }
};

// criação do servidor
const server = http.createServer();

// recebimento de requisão e resposta de acordo com método e url com async por conta
// da promise
server.on('request', async (req, res) => {
    const { method, url } = req;

    // instanciando a promise do conteúdo dos arquivos com await para retorno imediato
    const allText = await readerText();

    if (method === 'GET' && url === '/html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(
        `<body>
            <h1>Lista de Compras<h1>
            <ul>
                <li>${allText[0]}</li>
                <li>${allText[1]}</li>
                <li>${allText[2]}</li>
            <ul>
        </body>
        `);
        res.end();
    } else if (method === 'GET' && url === '/json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'aplication/json');
        res.write(JSON.stringify({
            listaDeCompras: allText
        }));
        res.end();
    }
});

server.listen(8080);
