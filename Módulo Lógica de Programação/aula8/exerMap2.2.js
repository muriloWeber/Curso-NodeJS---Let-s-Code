

const x = [3,4,7,1,5];

const y = [4,3,1];

const z = y.map (function(y, index) {return y * x[index]});

console.log(z);