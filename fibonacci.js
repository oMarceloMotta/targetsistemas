const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function verificaFibonacci(numero) {
  let a = 0,
    b = 1;
  while (a <= numero) {
    if (a === numero) {
      return true;
    }
    [a, b] = [b, a + b];
  }
  return false; // O número não pertence à sequência
}

rl.question(
  "Digite um número para verificar se pertence à sequência de Fibonacci: ",
  (value) => {
    const numeroInformado = parseInt(value, 10);
    if (isNaN(numeroInformado))
      console.log("Por favor, insira um número válido.");

    if (verificaFibonacci(numeroInformado))
      console.log(
        `O número ${numeroInformado} pertence à sequência de Fibonacci.`
      );
    else
      console.log(
        `O número ${numeroInformado} NÃO pertence à sequência de Fibonacci.`
      );

    rl.close();
  }
);
