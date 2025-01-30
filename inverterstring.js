const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inverterString(str) {
  let invertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }

  return invertida;
}

// Entrada do usuário
rl.question("Digite uma string para inverter: ", (entrada) => {
  console.log("String invertida:", inverterString(entrada));
  rl.close();
});
