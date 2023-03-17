const prompt = require('prompt-sync')();
function verificaFibonacci(num) {
    let a = 0;
    let b = 1;
  
    while (b <= num) {
      if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
      }
  
      const temp = b;
      b = a + b;
      a = temp;
    }
  
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
  
  console.log(verificaFibonacci(13)); // O número 13 pertence à sequência de Fibonacci.
  console.log(verificaFibonacci(6)); // O número 6 não pertence à sequência de Fibonacci.
  