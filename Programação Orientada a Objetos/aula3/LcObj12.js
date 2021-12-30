/*
Crie uma classe Data cujos atributos são dia, mês e ano. 
Implemente métodos _ repr _ e para comparação: igualdade (==) e desigualdades (!=, <=, >=, < e >).
*/

class Data {
    constructor(dia, mes, ano) {
        if(isNaN(dia) || isNaN (mes) || isNaN(ano)) throw "Os atributos da classe devem ser números."
        if(dia <= 0 || dia > 31 || mes <= 0 || mes > 12) throw "Dia ou mês inválido."
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    print () {return console.log(JSON.stringify(`${this.dia}/${this.mes}/${this.ano}`))}

    isEqual (data) {
        if (data instanceof Data) {
            return (this.dia === data.dia && this.mes === data.mes && this.ano === data.ano) ? true : false;
        } else {
            throw "O parâmetro do método deve ser da classe Data."
        }
    }

    isDiferent (data) {
        if(data instanceof Data) {
            return (this.dia !== data.dia || this.mes !== data.mes || this.ano !== data.ano) ? true : false;
        } else {
            throw "O parâmetro do método deve ser da classe Data."
        }

    }

    biggerOrEqual (data) {
        if(data instanceof Data) {
            if(this.ano > data.ano) {
                return true;
            } else if (this.ano === data.ano) {
                if (this.mes > data.mes) {
                    return true;
                } else if (this.mes === data.mes) {
                    if (this.dia >= data.dia) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            throw "O parâmetro do método deve ser da classe Data."
        }
    }

    smallerOrEqual (data) {
        if(data instanceof Data) {
            if(this.ano < data.ano) {
                return true;
            } else if (this.ano === data.ano) {
                if(this.mes < data.mes) {
                    return true;
                } else if (this.mes === data.mes) {
                    if(this.dia <= data.dia) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            throw "O parâmetro do método deve ser da classe Data"
        }
    }

    isBigger (data) {
        if(data instanceof Data) {
            if(this.ano > data.ano) {
                return true;
            } else if (this.ano === data.ano) {
                if(this.mes > data.mes) {
                    return true;
                } else if (this.mes === data.mes) {
                    if(this.dia > data.dia) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            throw "O parâmetro do método deve ser da classe Data."
        }
    }

    isSmaller (data) {
        if(data instanceof Data) {
            if(this.ano < data.ano) {
                return true;
            } else if (this.ano === data.ano) {
                if(this.mes < data.mes) {
                    return true;
                } else if (this.mes === data.mes) {
                    if(this.dia < data.dia) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false
            }
        } else {
            throw "O parâmetro do método deve ser da classe Data."
        }
    }
}

const data1 = new Data(22, 12, 2021);
const data2 = new Data(25, 12, 2021);

data1.print();

console.log(data1.biggerOrEqual(data2));
console.log(data1.smallerOrEqual(data2));