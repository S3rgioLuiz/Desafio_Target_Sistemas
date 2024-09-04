const fs = require('fs'); 
fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  let faturamento = JSON.parse(data);
  
  let maior=0, menor=Infinity, soma=0, util=0;

  faturamento.forEach(dia => {
    if(dia.valor > maior) maior = dia.valor;
    if(dia.valor > 0) {
      util++;
      soma += dia.valor;
      if(dia.valor < menor) menor = dia.valor;
    }
  });
  console.log("Menor Faturamento do Mês: "+ 
    menor +"\nMaior Faturamento do Mês: "+ 
    maior +"\nMédia de Faturamento do Mês: "+ soma/util);
});
