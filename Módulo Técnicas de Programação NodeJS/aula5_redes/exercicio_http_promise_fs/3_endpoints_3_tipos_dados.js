const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const { method, url } = req;

    if (method === 'PUT' && url === '/foo') {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/xml');
        res.end(
            'Recebendo text/xml'
        );
    } else if (method === 'OPTIONS' && url === '/baz') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(
        `<body>
            <h1>Opções:<h1>
            <ul>
                <li>GET</li>
                <li>PUT</li>
                <li>OPTIONS</li>
            <ul>
        </body>
        `);
        res.end();
    } else if (method === 'GET' && url === '/bar') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'aplication/json');
        res.write(JSON.stringify({
            method: 'GET',
            action: 'only retrieves data'
        }));
        res.end();
    };
});

server.listen(8080);