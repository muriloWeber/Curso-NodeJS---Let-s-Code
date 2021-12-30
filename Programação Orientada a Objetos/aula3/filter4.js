/*
Utilize filter para selecionar todos os números primos do array.
*/

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const byPrime = function (num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i === 0)
            return false;
    }
    return true;
}

const primes = array.filter(byPrime);

console.log(primes);