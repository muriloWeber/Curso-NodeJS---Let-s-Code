/*
O módulo time possui a função time.sleep(x), que faz seu programa “dormir” por x segundos. Utilizando essa função, 
crie uma classe Cronômetro e faça um programa que cronometre o tempo.
*/

class Timer{
    constructor(time){
        this.time = time;
    }

    sleep(time) {
        setTimeout(() => console.log("Wake Up!"), this.time * 1000)
    }

    print() {console.log(JSON.stringify(`O tempo programado para o Timer é de ${this.time} segundos.`))}
}

const chronometer = new Timer(10);
console.log("Sleeping...");
chronometer.sleep();

chronometer.print();