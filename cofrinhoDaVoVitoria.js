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

const calculateDifferenceBetweenSafes = (testCase) => {
  let indexTest = 1;
  for (const Deposits of testCase) {
    let joaozinho = 0;
    let zezinho = 0;
    console.log(`Teste ${indexTest++}`);
    for (const Deposit of Deposits) {
      joaozinho += Deposit[0];
      zezinho += Deposit[1];
      console.log(joaozinho - zezinho);
    }
  }
};

calculateDifferenceBetweenSafes(testcase);
