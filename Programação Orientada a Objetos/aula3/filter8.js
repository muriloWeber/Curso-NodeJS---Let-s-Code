/*
Utilize o método filter para determinar quais restaurantes estão abertos no horário atual.
*/

const restaurantes = [
    {
      nome: 'Pizzaria do Mario',
      horario_abertura: 14,
      horario_fechamento: 23
    },
    {
      nome: 'Churrascaria do Ronaldo',
      horario_abertura: 11,
      horario_fechamento: 14,
    },
    {
      nome: 'Bar do Zeca',
      horario_abertura: 12,
      horario_fechamento: 2,
    },
    {
      nome: 'Doceria da Mara',
      horario_abertura: 8,
      horario_fechamento: 20,
    },
]

const actualDate = new Date ('December 08, 2021 16:11:30');
const actualHour = actualDate.getHours();

const byHours = function (x) {
    if(x.horario_fechamento < x.horario_abertura) {
        if(actualHour >= x.horario_abertura || actualHour < x.horario_fechamento) {
            return true;
        } else {
            return false;
        }
    } else if (actualHour > x.horario_abertura && actualHour < x.horario_fechamento) {
         return true;
    } else {
        return false;
    }
}

const openResto = restaurantes.filter(byHours);

console.log(openResto);