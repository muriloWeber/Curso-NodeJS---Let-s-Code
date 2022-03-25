const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const beerRouter = require('./beer');

app.use(bodyParser.json());

app.use((req, res, next) => {
    req.melhorEscola = 'lets code';
    next();
});

app.use('/beer', beerRouter);
// app.get('/', (req, res) => {
//     res.send('I got it!')
// });

// app.post('/', (req, res) => {
//     const body = req.body;

//     res.json({
//         received_at: new Date().toISOString(),
//         'message-from-body': body.message,

//     });
// });

app.listen(8080);