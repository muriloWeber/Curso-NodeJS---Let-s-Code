/*
O array abaixo consiste em uma matriz cujas linhas são compostas por 3 dados de usuários de uma rede social: id, 
e-mail e país de origem, nessa ordem.

Para ficar melhor de utilizar os dados dessa matriz, utilize a função map para transformá-la em um array de objetos 
com os campos id, email e country.
*/

const customers = [
    [1, 'isidro_von@hotmail.com', 'Switzerland'],
    [2, 'frederique19@gmail.com', 'Micah Sanford'],
    [3, 'fredy54@gmail.com', 'Tunisia'],
    [4, 'braxton29@hotmail.com', 'Egypt'],
    [5, 'josh_batz60@gmail.com', 'Serbia'],
    [6, 'emie_corkery82@yahoo.com', 'Brazil']
];

const customersObj = customers.map(function (x) {
    return {
    id: x[0],
    email: x[1],
    country: x[2]
    }
});

console.log(customersObj);

