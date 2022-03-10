const fsPromise = require('fs').promises;
const https = require('https');
const http = require('http');
const URL = require('url');

const server = http.createServer();

function fetchPokemon(id = 1) {
    //definir URL de apontamento
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const pokeURL = `${BASE_URL}${id}`;
  
    return new Promise((resolve, reject) => {
      const req = https.request(pokeURL, res => {
        const data = [];
        //res.on é recebendo um evento de resposta
        res.on('data', chunk => {
          data.push(chunk);
        });
  
        res.on('end', () => {
          const pokemonRaw = Buffer.concat(data).toString();
          const pokemonJSON = JSON.parse(pokemonRaw);
          resolve(pokemonJSON.name);
        });
      })
  
      req.on('error', error => {
        reject(error);
      });
  
      req.end();
    });
}


server.on('request', async (req, res) => {
    const { method, url } = req;
    const { query } = URL.parse(req.url, true);
  
    if (url.startsWith('/poke')) {
      const pokemonName = await fetchPokemon(query.id);
      res.end(pokemonName);
  
    } else if (url.startsWith('/beer')) {
      beerRouter(req, res);
  
    } else {
      res.statusCode = 404;
      res.end('resource not found');
    }
  });

server.listen(8080);