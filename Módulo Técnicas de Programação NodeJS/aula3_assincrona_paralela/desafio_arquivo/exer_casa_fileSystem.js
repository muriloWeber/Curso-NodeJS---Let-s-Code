// Criar 3 arquivos .txt com algum valor dentro
// Ler esses arquivos e colocar o conteúdo deles num 4º arquivo

// Bônus:
// Deletar os 3 primeiros arquivos // unsync

const fs = require('fs');
const path = require('path');
const filesPath = [path.join(__dirname, 'file1.txt'), path.join(__dirname, 'file2.txt'),
path.join(__dirname, 'file3.txt')];
let data = '';

filesPath.forEach((f) => {
    data = data.concat(`${fs.readFileSync(f, 'utf-8')}\n\n`);
});
console.log('Arquivos originais lidos.\n');

fs.writeFileSync('amigoPunk.txt', data);
console.log(`Conteúdo dos arquivos originais escritos em amigoPunk.txt\n`);

filesPath.forEach((file) => {
    fs.unlinkSync(file);
});
console.log(`Arquivos originais apagados.\n`);
