let mes = [
    {
      "dia": 1,
      "diaSemana": "Segunda-feira",
      "faturamento": 1000,
      "feriado": false,
    },
    {
      "dia": 2,
      "diaSemana": "Terça-feira",
      "faturamento": 1500,
      "feriado": false,
    },
    {
      "dia": 3,
      "diaSemana": "Quarta-feira",
      "faturamento": 0,
      "feriado": true,
    },
    {
      "dia": 4,
      "diaSemana": "Quinta-feira",
      "faturamento": 1800,
      "feriado": false,
    },
    {
      "dia": 5,
      "diaSemana": "Sexta-feira",
      "faturamento": 1000,
      "feriado": false,
    },
    {
      "dia": 6,
      "diaSemana": "Sábado",
      "faturamento": 0,
      "feriado": false,
    },
    {
      "dia": 7,
      "diaSemana": "Domingo",
      "faturamento": 0.0,
      "feriado": false,
    },
    {
      "dia": 8,
      "diaSemana": "Segunda-feira",
      "faturamento": 1100,
      "feriado": false,
    },
    {
      "dia": 9,
      "diaSemana": "Terça-feira",
      "faturamento": 1600,
      "feriado": false,
    },
    {
      "dia": 10,
      "diaSemana": "Quarta-feira",
      "faturamento": 1300,
      "feriado": false,
    },
    {
      "dia": 11,
      "diaSemana": "Quinta-feira",
      "faturamento": 1700,
      "feriado": false,
    },
    {
      "dia": 12,
      "diaSemana": "Sexta-feira",
      "faturamento": 2100,
      "feriado": false,
    },
    {
      "dia": 13,
      "diaSemana": "Sábado",
      "faturamento": 0,
      "feriado": false,
    },
    {
      "dia": 14,
      "diaSemana": "Domingo",
      "faturamento": 0,
      "feriado": false,
    },
    {
      "dia": 15,
      "diaSemana": "Segunda-feira",
      "faturamento": 1400,
      "feriado": false,
    },
    {
      "dia": 16,
      "diaSemana": "Terça-feira",
      "faturamento": 1800,
      "feriado": false,
    },
    {
      "dia": 17,
      "diaSemana": "Quarta-feira",
      "faturamento": 1200,
      "feriado": false,
    },
    {
      "dia": 18,
      "diaSemana": "Quinta-feira",
      "faturamento": 1900,
      "feriado": false,
    },
    {
      "dia": 19,
      "diaSemana": "Sexta-feira",
      "faturamento": 2200,
      "feriado": false,
    },
    {
      "dia": 20,
      "diaSemana": "Sábado",
      "faturamento": 0,
      "feriado": false,
    },
    {
      "dia": 21,
      "diaSemana": "Domingo",
      "faturamento": 0,
      "feriado": false,
    },
    {
      "dia": 22,
      "diaSemana": "Segunda-feira",
      "faturamento": 1500,
      "feriado": false,
    },
    {
      "dia": 23,
      "diaSemana": "Terça-feira",
      "faturamento": 1400,
      "feriado": false,
    },
    {
      "dia": 24,
      "diaSemana": "Quarta-feira",
      "faturamento": 1600,
      "feriado": false,
    },
    {
      "dia": 25,
      "diaSemana": "Quinta-feira",
      "faturamento": 0,
      "feriado": true,
    },
    {
      "dia": 26,
      "diaSemana": "Sexta-feira",
      "faturamento": 2000,
      "feriado": false,
    },
    {
      "dia": 27,
      "diaSemana": "Sábado",
      "faturamento": 0,
      "feriado": false,
    },
    {
      "dia": 28,
      "diaSemana": "Domingo",
      "faturamento": 0,
      "feriado": false,
    },
    {
      "dia": 29,
      "diaSemana": "Segunda-feira",
      "faturamento": 1700,
      "feriado": false,
    },
    {
      "dia": 30,
      "diaSemana": "Terça-feira",
      "faturamento": 2100,
      "feriado": false,
    }
  ]
 
let maior=0, menor=Infinity, soma=0, util=0; 

mes.forEach(dia => {
    if(dia.faturamento > maior)
        maior=dia.faturamento;
    if(dia.faturamento < menor)
        menor=dia.faturamento;
    if(dia.diaSemana != "Sábado" && dia.diaSemana != "Domingo" && dia.feriado == false){
        soma+=dia.faturamento;
        util++;
    }
});

console.log("Menor Faturamento do Mês: "+ 
    menor +"\nMaior Faturamento do Mês: "+ 
    maior +"\nMédia de Faturamento do Mês: "+ soma/util);
 

