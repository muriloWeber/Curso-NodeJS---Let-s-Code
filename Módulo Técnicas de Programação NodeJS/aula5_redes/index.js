const http = require('http');

const server = http.createServer();

// server.on('request', (req, res) => {
//     res.write('Ola mundo!');
//     res.end();
// });

server.on('request', (req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'aplication/json');
        res.end(JSON.stringify({
            linguagem: 'javascript',
            programa: 'boraSerTech',
        }));
    };
});

server.on('request', (req, res) => {
    const { method, url } = req;

    if (method === 'POST' && url === '/teste') {
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/html');
        res.end(
           'Hello World!'
        );
    };
});

server.listen(8080, () => {
    console.log(`escutando em http://localhost:8080/teste`);
  });
  
