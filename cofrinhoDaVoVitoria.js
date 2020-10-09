const testcase = [
  [
    [20, 25],
    [10, 5],
    [10, 10],
  ],
  [
    [0, 5],
    [12, 0],
    [0, 20],
    [17, 1],
  ],
];

const calculateDifferenceBetweenSafes = (moneyDeposit) => {
  for (let i = 0; i < moneyDeposit.length; i++) {
    let joaozinho = 0;
    let zezinho = 0;
    console.log(`Teste ${i + 1}`);
    for (let j = 0; j< moneyDeposit[i].length; j++) {
      for (let k = 0; k < moneyDeposit[i][j].length; k++) {
        if (k == 0) {
          joaozinho +=moneyDeposit[i][j][k];
        } else {
          zezinho += moneyDeposit[i][j][k];
        }
      }
     console.log(joaozinho - zezinho);
    }
  }
};

calculateDifferenceBetweenSafes(testcase);
