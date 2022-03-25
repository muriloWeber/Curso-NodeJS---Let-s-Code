const aes256 = require('aes256');
const senha = 'letscode2022';
const mensagem = 'Bora Node.js';

const decryptedMessage = (
    aes256.decrypt(
        senha,
        `SLSNLsMKtcBRhq2Ppyu4TYDxtVk2nZ4hQq7CMsRFbMamJQSGK4NBwA==`,
    )
);

console.log(decryptedMessage);

const encryptedMessage = aes256.encrypt(senha, mensagem);

console.log(encryptedMessage);