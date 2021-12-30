class Quadrado{
  constructor(base, altura){
    if(isNaN(base) || isNaN(altura)) throw "Valores inválidos";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }

  calcularArea(){
    return this.base * this.altura;
  }

  mudarAltura(novaAltura){
    this.altura = novaAltura
  }

  duplicarParaDireita() {
    this.base = this.base*2;
  }

  duplicarParaBaixo() {
    this.altura = this.altura*2;
  }

  imprimir() {
    return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "red"}'></div>`
  }
}


const quadrado = new Quadrado(3, 5);
document.write(quadrado.imprimir());
console.log(quadrado);
quadrado.mudarAltura(10);
console.log(quadrado);