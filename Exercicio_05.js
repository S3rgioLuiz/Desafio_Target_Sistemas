let palavra = "string";

let reverso = [];

for(let contador = 0; contador < palavra.length; contador++){
   reverso[palavra.length - (contador + 1)] = palavra[contador];
}

console.log(reverso);


