const fs = require('fs');
const path = require('path');

// __dirname, __filename
const filePath = path.join(__dirname, 'file.txt');

// Opção 1 - readFile - assíncrono
// No método fs.readFile(), podemos ler podemos ler um arquivo de maneira assíncrona 
// sem bloqueio
fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log('Retornou dados do readFile ' + data);
});

// OPÇÃO 2 readFileSync - Sincrono
// no método fs.readFileSync(), podemos ler arquivos de maneira síncrona, ou seja,
// estamos dizendo ao node.js para bloquear outros arquivos paralelos.
const data = fs.readFileSync(filePath, 'utf-8');
console.log(`\nRetorno do readFile: `, data);

// OPÇÃO 3 promises.readFile - Assíncrono
// Basicamente, uma vez que uma promise é chamada, ela inicia em pending state (pendente).
// Isto significa que a função caller (que chamou a promise) continua sua execução enquanto
// espera pela promise terminar seu próprio processamento e retornar ao caller com algum feedback.
fs.promises
    .readFile(filePath, 'utf-8')
    .then((res) => {
        console.log('Isso tá acontecendo dentro da Promise\n', res);
});

// READDIR
// O método fs.readdir() é usado para ler de forma assíncrona o conteúdo de um 
// determinado diretório
fs.readdir(__dirname, (err, data) => {
    console.log(data);
});


fs.readdir(__dirname, (err, files) => {
    files.forEach(f => {
        const fPath = path.join(__dirname, f);
        fs.stat(fPath, (_, fileStats) => {
            console.log(`File: ${f}\t isFile: ${fileStats.isFile()}`);
        })
    });
});