function ex1() {
    function makeArray(n) {
        if (n === 1) {
            return [1];
        }
        return [...makeArray(n - 1), n];
    }

    console.log(makeArray(10));

    function makeReverseArray(n) {
        if (n === 1) {
            return [1];
        }
        return [n, ...makeReverseArray(n - 1)];
    }

    console.log(makeReverseArray(5));

    function makeArrayTCO(n, arr = []) {
        if (n === 1) {
            return [1, ...arr];
        }

        return makeArrayTCO(n - 1, [n, ...arr]);
    }
    console.log("TCO1", makeArrayTCO(10));
}

function loopFibonacci(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
            result = [...result, i];
        } else {
            result = [...result, result[i - 2] + result[i - 1]];
        }
    }
    return result[n];
}

// console.log(loopFibonacci(5));
// console.log(loopFibonacci(7));
// console.log(loopFibonacci(15));

function recursiveFibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(recursiveFibonacci(7));

const memoizedFibonacci = memoized(function (n) {
    if (n <= 1) return n;

    return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

// console.log("5=", memoizedFibonacci(5)); // 5
// console.log("7=", memoizedFibonacci(7)); // 13
// console.log("15=", memoizedFibonacci(15)); // 610
// console.log("🚀  runCnt-memo:", runCnt);

function memoized(fn) {
    const cache = {};

    return function (k) {
        return cache[k] ?? (cache[k] = fn(k));
    };
}
