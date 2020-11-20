/*Dado duas listas com números inteiros e um inteiro X, retornar os pares de números das listas cuja a soma é igual a X
 */

const testCase = [5, 3, 8, 10, 8, 5, 0];
const searchForValue = { 3: true, 5: true, 0: true, 7: true };

const sumOfPairs = (value) => {
  for (const comparation of testCase) {
    let expedResult = value - comparation;
    if (searchForValue[expedResult]) {
      console.log(comparation, expedResult);
    }
  }
};
sumOfPairs(3);
