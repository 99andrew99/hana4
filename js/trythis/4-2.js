// 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
// // Math.sqrt() 사용, 무리수만 출력!
// 2 1.414
// …
// 7 2.646
// …
// 10 3.162

// 기본 문제
for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i).toFixed(3) % 1 !== 0) {
        console.log("무리수임");
        console.log(Math.sqrt(i).toFixed(3));
    } else {
        console.log("무리수 아님");
        console.log(Math.sqrt(i).toFixed(3));
    }
}

// 추가 문제
// 추가문제) 주어진 값의 sqrt 값을 출력하고,
// 1 큰 수가 무리수가 아닐 때 까지 sqrt 값을 출력하는 함수를 작성하시오.

// ex1)  printIrr(5);
// 5 2.236
// 6 2.449
// 7 2.646
// 8 2.828

// ex2) printIrr(9)
// 9 3.000
// 10 3.162
// 11 3.317
// 12 3.464
// 13 3.606
// 14 3.742
// 15 3.873

console.log("===============추가 문제1===================");
printIrr(5);
console.log("===============추가 문제2===================");
printIrr(9);

function printIrr(num) {
    do {
        if (Math.sqrt(num + 1).toFixed(3) % 1 !== 0) {
            console.log(num, Math.sqrt(num).toFixed(3));
        } else {
            console.log(num, Math.sqrt(num).toFixed(3));
            break;
        }
        num += 1;
    } while (true);
}
