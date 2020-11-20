// Pulo do gato

const testCase = [
  { input: [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1], output: 8 },
  { input: [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1], output: -1 },
  { input: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], output: 6 },
  { input: [1, 0, 1, 1, 0], output: -1 },
];

const pulo = (escalas) => {
  let posicao = 0;
  let pulos = 0;
  while (posicao != escalas.length - 1) {
    if (escalas[posicao] === 0) {
      return -1;
    }
    if (posicao + 2 < escalas.length && escalas[posicao + 2] === 1) {
      posicao = posicao + 2;
    } else if (posicao + 1 < escalas.length && escalas[posicao + 1] === 1) {
      posicao = posicao + 1;
    } else {
      return -1;
    }
    pulos++;
  }

  return pulos;
};

for (const test of testCase) {
  const s = pulo(test.input);
  console.log(`${s},esperado ${test.output}`);
}
