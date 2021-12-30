/*
Crie uma classe ControleRemoto cujo atributo é televisão (isso é, recebe um objeto da classe do exercício 4). 
Crie métodos para aumentar/diminuir volume, trocar o canal e sintonizar um novo canal, que adiciona um novo canal à lista de canais 
(somente se esse canal não estiver nessa lista).
*/
const prompt = require("prompt-sync")({ sigint: true });
let dataAtual = new Date ();
let horaAtual = dataAtual.getHours();
const byCanal = canal => canaisBlok => canaisBlok.canal === canal;


class Televisor {
    constructor(fabricante, modelo, password) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.canalAtual = 0;
        this.listaCanais = [];
        this.canaisProibidos = [70];
        this.password = password.toString();
        this.canaisBlok = [{canal: 25, hrInicio: 17, hrFim: 18}];
        this.volume = 99;
    }
}

class ControleRemoto {
    constructor(televisor){
       if(televisor instanceof Televisor) {
        this.televisor = televisor;
       }  
    }

    sintonizar (canal) {
        (this.televisor.listaCanais.includes(canal)) ? console.log("Canal já sintonizado.") : this.televisor.listaCanais.push(canal);
        
    }

    trocarCanal (canal) {
        if (this.televisor.canaisProibidos.includes(canal)) {
            let userInput = prompt("Digite a senha: ");
            let end = 0;
            if(userInput !== this.televisor.password) {
                while (userInput !== this.televisor.password && end === 0) {
                    userInput = prompt("Senha inválida. Digite a senha novamente ou s para sair: ")
                    if (userInput === "s") {
                        end = 1;
                    } else if (userInput === this.televisor.password) {
                        this.televisor.canalAtual = canal
                    }
                }
            } else {
                this.televisor.canalAtual = canal;
            }
        } else if (this.televisor.canaisBlok.findIndex(byCanal(canal)) > -1) {
            let indiceCanalBlok = this.televisor.canaisBlok.findIndex(byCanal(canal));
            if(this.televisor.canaisBlok[indiceCanalBlok].hrFim < this.televisor.canaisBlok[indiceCanalBlok].hrInicio) {
                if(horaAtual >= this.televisor.canaisBlok[indiceCanalBlok].hrInicio) {
                    console.log(`Canal está bloqueado das ${this.televisor.canaisBlok[indiceCanalBlok].hrInicio}hs às ${this.televisor.canaisBlok[indiceCanalBlok].hrFim}hs.`);
                }
            } else if (horaAtual >= this.televisor.canaisBlok[indiceCanalBlok].hrInicio && horaAtual < this.televisor.canaisBlok[indiceCanalBlok].hrFim) {
                console.log(`Canal está bloqueado das ${this.televisor.canaisBlok[indiceCanalBlok].hrInicio}hs às ${this.televisor.canaisBlok[indiceCanalBlok].hrFim}hs.`);
            } else {
                this.televisor.canalAtual = canal
            }

        } else {
           (this.televisor.listaCanais.includes(canal)) ? this.televisor.canalAtual = canal : console.log("O canal que você deseja trocar ainda não está sintonizado neste televisor.");
        }
    }


    aumentarVolume () {
        if((this.televisor.volume + 1) > 100) throw "Volume deve estar entre 0 e 100."
        this.televisor.volume++
    }

    diminuirVolume () {
        if((this.televisor.volume - 1) < 0) throw "Volume deve estar entre 0 e 100."
        this.televisor.volume--
    }

    incluirBlok (canal, hrInicio, hrFim) {
        this.televisor.canaisBlok.push({canal: canal, hrInicio: hrInicio, hrFim: hrFim})
    }

    editarBlok (canal, hrInicio, hrFim) {
        if(this.televisor.canaisBlok.findIndex(byCanal(canal)) > -1) {
            let indiceCanalBlok = this.televisor.canaisBlok.findIndex(byCanal(canal));
            this.televisor.canaisBlok[indiceCanalBlok] = {canal: canal, hrInicio: hrInicio, hrFim: hrFim};

        } else {
            console.log(`Canal ${canal} não está na lista de canais bloqueados.`)
        }
    }
}

const tv = new Televisor ("LG", "4K", 123);
const control = new ControleRemoto(tv);

control.sintonizar(10);
control.trocarCanal(25);
control.incluirBlok(10, 11, 15);
console.log(tv);
control.editarBlok(10, 12, 16);
control.editarBlok(11, 0, 6);
control.aumentarVolume();

console.log(tv);