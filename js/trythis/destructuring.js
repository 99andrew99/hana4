function exP() {
    // 다음 arr의 첫 번째 원소와 두 번째 원소를 swap 해보세요.
    // ( [a, b] = [b, a]; )

    // const arr = [1,2];

    // <이 부분을 작성하시오>;
    // console.log(arr);
    // // 출력결과: [2, 1]

    const arr = [1, 2];

    // 배열의 시작 주소가 const. 주소가 바뀔 수는 없다..
    // 그렇기에 arr = [3, 4]; 는 에러난다.

    [arr[0], arr[1]] = [arr[1], arr[0]];
    console.log("🚀 ~ arr:", arr);
}

ex4();

function ex1() {
    //     user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
    // (Function signature를 3개 이상으로 표현하기)
    function f1(user) {
        console.log(user.id, user.name);
    }
    function f2({ id, name }) {
        console.log(id, name);
    }
    const f3 = ({ id, name }) => {
        console.log(id, name);
    };

    const hong = { id: 1, name: "Hong" };
    const lee = { id: 2, name: "Lee" };
    f1(hong);
    f2(lee);
    f3(hong); // ⇒ 1, 'Hong'
}

function ex2() {
    // 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

    const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

    const { id, name, addr } = user;
    const userInfo = { id, name, addr };
    console.log(userInfo);
    // 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}
}

function ex3() {
    // 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. (destructuring 활용)

    const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
    // cf. const id1 = arr[0][0].id; // Bad
    const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

    console.log(id1, id2, id3);
    // 출력결과: 1 2 3
    // console.log(id1);
}

function ex4() {
    // 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.

    const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };

    // function getValueExceptInitial(k) {
    //   const (가) = user;
    //   const (나) = [...val];
    //   return (다);
    // }

    function getValueExceptInitial(k) {
        const { [k]: val } = user;
        const [, ...result] = val;
        // console.log(result);
        return result.join("");
    }

    console.log(getValueExceptInitial("name")); // 'ong'
    console.log(getValueExceptInitial("passwd")); // 'yz'
    console.log(getValueExceptInitial("addr")); // 'eoul'
}
