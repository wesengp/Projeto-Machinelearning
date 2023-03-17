/* Desafio da string invertida*/

const prompt = require('prompt-sync')();

let nome = (prompt("Informe o nome que quer ser invertido: ")) 
let nomeInvertido = "";

for(let i = nome.length - 1; i >= 0; i--){
  nomeInvertido += nome[i];
}

console.log(nomeInvertido);
