// link do comando da solução.

// https://olimpiada.ic.unicamp.br/pratique/p2/2019/f1/soma/


const testCase = [2, 0, 1, 1, 0, 0, 8, 4, 1, 3];
const testCase1 = [0, 0, 1, 2, 3];
const testCase2 = [0, 0, 0, 0, 0, 5, 12, 0, 1, 0, 0, 0, 51, 0, 0];



const calculatePossibilite = (max, array) => {
  let possibilite = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    

    for (let j = i; j < array.length; j++) {
      sum += array[j];
      if (sum == max) {
        possibilite++;
      }
    }
  }
  return possibilite;
};

console.log(calculatePossibilite(5, testCase,));
console.log(calculatePossibilite(5, testCase1,))
console.log(calculatePossibilite(5, testCase2,))

