/*
entrada 1 ;

1 7 3 9 0 8 5 6 2 4 B C E A E B
9 0 7 5 8 4 6 2 3 1 E C C B D A

Teste 1
3 8 4 7 2 9

A 1 7  4# 
B 3 9  1#  6#
C 0 8  2#
D 5 6  
E 2 4  3# 5#


A 9 0  6#
B 7 5  4#
c 8 4  2# 3#
D 6 2  5#
E 3 1  1#

pega os numeros da primeira letra digitada.
e compara com os dados da segunda digitada ate que reste apenas 1 numero que
se  repita em todos os casos, quando encontramos passamos para a proxima posição 

*/

const discoverCandidatePassword = (mapPassword) => {
  const mapletters = {
    A: new Set([mapPassword[0], mapPassword[1]]),
    B: new Set([mapPassword[2], mapPassword[3]]),
    C: new Set([mapPassword[4], mapPassword[5]]),
    D: new Set([mapPassword[6], mapPassword[7]]),
    E: new Set([mapPassword[8], mapPassword[9]]),
  };
  const candidatePassword = [];
  for (let i = 10; i <= 15; i++) {
    let letter = mapPassword[i];
    candidatePassword.push(mapletters[letter]);
  }
  return candidatePassword;
};

const getcombination = (password) => {
  let candidates = [];
  for (let i = 0; i < password.length; i++) {
    candidates[i] = discoverCandidatePassword(password[i]);
  }
  let fixedCandidate = [];
  let rotativeCandidate = [];
  fixedCandidate = candidates[0]
    for (let j = 1; j < candidates.length; j++) {
      rotativeCandidate = candidates[j];
      for (let j = 0; j <rotativeCandidate.length; j++) {   
        fixedCandidate[j]=(
          [...fixedCandidate[j]].filter((i) => rotativeCandidate[j].has(i))
        );
      }
    }
  return fixedCandidate;
};

const testcase = [
  [1, 7, 3, 9, 0, 8, 5, 6, 2, 4, "B", "C", "E", "A", "E", "B"],
  [9, 0, 7, 5, 8, 4, 6, 2, 3, 1, "E", "C", "C", "B", "D", "A"],
];

const testcase2 = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "B", "C", "D", "D", "E", "E"],
  [1, 3, 5, 4, 6, 8, 7, 9, 0, 2, "E", "B", "C", "D", "C", "D"],
  [3, 2, 0, 4, 5, 9, 7, 6, 8, 1, "A", "C", "D", "D", "E", "C"],
];
console.log (getcombination(testcase));
console.log (getcombination(testcase2));
