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

const testcase = [
  [1, 7, 3, 9, 0, 8, 5, 6, 2, 4, "B", "C", "E", "A", "E", "B"],
  [9, 0, 7, 5, 8, 4, 6, 2, 3, 1, "E", "C", "C", "B", "D", "E"],
];

const discoverCandidatePassword = (configSenha) => {
  const mapletters = {
    A: new Set([configSenha[0], configSenha[1]]),
    B: new Set([configSenha[2], configSenha[3]]),
    C: new Set([configSenha[4], configSenha[5]]),
    D: new Set([configSenha[6], configSenha[7]]),
    E: new Set([configSenha[8], configSenha[9]]),
  };
  const candidatePassword = [];
  for (let i = 10; i <= 15; i++) {
    let letter = configSenha[i];
    candidatePassword.push(mapletters[letter]);
  }
  return candidatePassword;
};

const getcombination = () => {
  let candidatePassword = discoverCandidatePassword(testcase[0]);
  let candidatePassword1 = discoverCandidatePassword(testcase[1]);
  let intersect = new Set();
  for (let j = 0; j < candidatePassword.length; j++) {
    intersect.add(
      [...candidatePassword[j]].filter((i) => candidatePassword1[j].has(i))
    );
  }
  return intersect;
};

console.log(getcombination());
