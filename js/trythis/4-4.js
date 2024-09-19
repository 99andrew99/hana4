// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)

// 0.21354 + 0.1   // 0.31354000000000004
// 0.14 + 0.28     // 0.42000000000000004
// 0.34 + 0.226    // 0.5660000000000001
// function addPoints(a, b) {...}

// addPoints(0.21354, 0.1)   // 0.31354
// addPoints(0.14, 0.28)     // 0.42
// addPoints(0.34, 0.226)    // 0.566

//기존 출력
console.log(0.21354 + 0.1);
console.log(0.14 + 0.28);
console.log(0.34 + 0.226);

//함수 출력
addPoints(0.21354, 0.1);
addPoints(0.143, 10.28);
addPoints(0.34, 0.226);

function addPoints(a, b) {
    //소수점 자리수 계산을 위한 문자열 형변환
    strA = a + "";
    strB = b + "";

    // 소수점 자리수 계산
    pointLen =
        strA.substring(strA.indexOf(".")).length - 1 >=
        strB.substring(strB.indexOf(".")).length - 1
            ? strA.substring(strA.indexOf(".")).length - 1
            : strB.substring(strB.indexOf(".")).length - 1;

    // 자리수에 따라 곱할 값
    mulV = 10 ** pointLen;

    // 정수로 만든 다음 다시 소수로 변환하고 요구 소수점 자리수에 따라 출력
    resultV = (((a + b) * mulV) / mulV).toFixed(pointLen);
    if (resultV > 1) {
        resultV -= Number(resultV);
        console.log(resultV);
    } else {
        console.log(resultV);
    }
    // console.log((((a + b) * mulV) / mulV).toFixed(pointLen));
}
