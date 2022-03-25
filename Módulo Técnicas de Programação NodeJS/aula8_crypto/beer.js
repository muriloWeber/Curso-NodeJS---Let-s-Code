const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('dentro do router de /beer' + '\n' + req)
});

// app.get('/', (req, res) => {
//     res.send('I got it!')
// });

router.post('/', (req, res) => {
    const body = req.body;

    res.json({
        received_at: new Date().toISOString(),
        'message-from-body': body.message,

    });
});

module.exports = router;