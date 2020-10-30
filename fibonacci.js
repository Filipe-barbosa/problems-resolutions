// 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584

const fibonacci = (x) => {
    let penultimo = 0
    let ultimo = 1
    let aux = 0
    console.log(penultimo)
    console.log(ultimo)
    for (let i = 0; i < x - 1; i++) {
        aux = penultimo
        penultimo = ultimo
        ultimo = aux + penultimo
        console.log(ultimo)
    }
    //return ultimo
}

//função recursiva 
const fib = (x) => {
    if (x == 0) {
        return 0
    }
    if (x == 1) {
        return 1
    }
    return fib(x-1)+ fib(x-2)
}

/*
 f(0)= 0
 f(1)=1
 f(2)= f(1) + F(0)= 1
 f(3)= f(2)+f(1) = 1+1 = 2
 f(4)= f(3)+ f(2)= 2+ 1 = 3
 f(5)= f(4) + f(3)= 3+ 2 = 5
 f(6)= f(5) + f(4)= 5 +3 = 8
*/
//fibonacci(4)
console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))