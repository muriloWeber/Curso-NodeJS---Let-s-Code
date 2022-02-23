function randomNumberBetween(min = 2000, max = 7000) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
/*
Criar função que que retorna uma Promise com um
número aleatório após esperar x milisegundos
(criar tempo de espera e número aleatório usando randomNumberBetween)
*/

  function randomNumberAsync() {
    const tempoDeEspera = randomNumberBetween();
    //console.log(`Vamos esperar ${tempoDeEspera} milissegundos.`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const aleatorio = randomNumberBetween();
            //console.log(`numero aleatorio gerado: ${aleatorio}`);
            if (aleatorio < 0001) reject('numero muito baixo!');
            else resolve(aleatorio);
        }, tempoDeEspera);
    });
  }
  
  // chamar usando async
//   (async () => {
//       try{
//           const aleatorio = await randomNumberAsync();
//           console.log(`o valor da promise é ${aleatorio}`);
//       } catch (err) {
//           console.info(`algo deu errado`, err);
//       }
//   })();
  
  // chamar usando then/catch

//   randomNumberAsync()
//     .then(response => {
//         console.log(`O resultado then aleatório é ${response}`);
//   })
//     .catch(err => {
//         console.info(`${err}`);
    // })

    const arrayOfPromisses = [
      randomNumberAsync(),
      randomNumberAsync(),
      randomNumberAsync(),
  ];
  
  Promise
      .all(arrayOfPromisses)
      .then(results => {
          results.forEach((result, idx) => {
              console.log(`result: ${idx}: ${result}`);
          });
      });
  
  // Promise
  //     .allSettled(arrayOfPromisses)
  //     .then(result => {
  //         console.log(result);
  //     });