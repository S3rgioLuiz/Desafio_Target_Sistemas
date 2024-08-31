function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    
    if (numero === a || numero === b) 
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    
    
    let proximo = a + b;
    while (proximo <= numero) {
        if (proximo === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}


const numero = 4; 
const resultado = pertenceFibonacci(numero);
console.log(resultado);
