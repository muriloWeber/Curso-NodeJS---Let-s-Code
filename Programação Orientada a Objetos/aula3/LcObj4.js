/*
Crie uma classe Televisor cujos atributos são:

a. fabricante;

b. modelo;

c. canal atual;

d. lista de canais; e

e. volume.

Faça métodos para aumentar/diminuir volume, trocar o canal e sintonizar 
um novo canal, que adiciona um novo canal à lista de canais (somente se esse canal não estiver 
nessa lista). No atributo lista de canais, devem estar armazenados todos os canais já sintonizados 
dessa TV.

Obs.: O volume não pode ser menor que zero e maior que cem; só se pode trocar para um canal que já 
esteja na lista de canais.

Lista de canais proibidos - somente ser acessados por senha - fazer bloqueio por horário (módulo Date do node que pega a hora atual)
*/

class Televisor {
    constructor(fabricante, modelo, canalAtual) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.canalAtual = canalAtual;
        this.listaCanais = [canalAtual];
        this.volume = 99;
    }

    sintonizar (canal) {
        (this.listaCanais.includes(canal)) ? console.log("Canal já sintonizado") : this.listaCanais.push(canal);
        
    }

    trocarCanal (canal) {
        (this.listaCanais.includes(canal)) ? this.canalAtual = canal : console.log("O canal que você deseja trocar ainda não está sintonizado neste televisor");
    }

    aumentarVolume () {
        if((this.volume + 1 > 100)) throw "Volume deve estar entre 0 e 100"
        return this.volume++
    }

    diminuirVolume () {
        if(this.volume - 1 < 0) throw "Volume deve estar entre 0 e 100"
        return this.volume--
    }

    imprimir () {
        return console.log(JSON.stringify(`Fabricante: ${this.fabricante} - Modelo: ${this.modelo} - Canais Sintonizados: ${this.listaCanais}`))
    }
}

const tv = new Televisor ("lg", "4k", 12);

tv.sintonizar(10);
tv.trocarCanal(5);
tv.aumentarVolume();

tv.imprimir();
