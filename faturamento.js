const fs = require("fs");
const path = require("path");

function lerArquivoJSON(caminho) {
  try {
    const dados = fs.readFileSync(caminho, "utf-8");
    return JSON.parse(dados);
  } catch (erro) {
    console.error("Erro ao ler o arquivo JSON:", erro);
    return null;
  }
}
function processarDados(dados) {
  if (!dados || !Array.isArray(dados)) {
    console.error("Dados inválidos ou ausentes.");
    return;
  }

  const faturamentoValido = dados.filter((dia) => dia.valor > 0);

  const menorFaturamento = Math.min(
    ...faturamentoValido.map((dia) => dia.valor)
  );
  const maiorFaturamento = Math.max(
    ...faturamentoValido.map((dia) => dia.valor)
  );

  const mediaMensal =
    faturamentoValido.reduce((soma, dia) => soma + dia.valor, 0) /
    faturamentoValido.length;

  const diasAcimaDaMedia = faturamentoValido.filter(
    (dia) => dia.valor > mediaMensal
  ).length;
  console.log(
    `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`
  );
  console.log(`Menor faturamento diário: ${menorFaturamento}`);
  console.log(`Maior faturamento diário: ${maiorFaturamento}`);
}

const caminhoArquivo = path.join(__dirname, "dados.json");
(async () => {
  const dados = await lerArquivoJSON(caminhoArquivo);
  console.log("----------");
  console.log("dados");
  console.log(dados);
  if (dados) {
    console.log("dados");
    processarDados(dados);
  }
})();
