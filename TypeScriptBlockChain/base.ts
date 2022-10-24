const player: {
  name: string;
  age?: number;
  // player 객체에서 age라는 키값을 안쓸수도 있다. 이럴때 사용하는게 ? 이다.
  // ?를 붙임으로써 age 가 없으면 undefined 가 된다.
} = {
  name: "jun",
  // age:29
};

type Player = {
  name: string;
  age?: number;
};

const newPlayer = (name: string): Player => {
  return { name };
};
// 타입스크립트에서 화살표함수 사용하는 방법.

//----------------------------- readonly 읽기전용. --------------------------------------
let drink: readonly string[] = ["water", "juice", "coffee", "beer"];
// drink.push("tea");
// readonly 를 타입쪽에 적용시키고, 적용된 변수는 수정이 안되고 읽기만 가능하다.

//----------------------------- Tuple ---------------------------------------------------
// array 를 생성한다.
// 최소한의 길이를 갖는다. 특정 위치에 특정 타입이 있어야 한다.

const developer: [string, number, boolean] = ["jun", 29, true];
// 배열을 생성할 때 특정 값이 특정 위치에 타입을 지정할 수 있다.
// developer 라는 변수는 3개의 값이 필요함으로 최소한의 길이가 3이 되고, 첫번째 값은 문자타입, 두번째는 숫자, 세번째는 불리언 타입이여야 한다.
// 값이 3개가 넘어가면 에러를 보여준다.

// ---------------------------- typeof unknown ------------------------------------------
let result: unknown;
// unknown 타입은 typescript에서 타입을 보호해준다.

// let add = result + 1;
// error 발생. 이유는 result 의 타입은 unknown 이기 때문이다.
// 만약 unknown 을 사용하게 될 경우 조건문으로 빼면 된다.

if (typeof result === "string") {
  // 해당 조건문을 통과하면 그때부터 result 의 타입은 string 이 된다.(타입추론)
  result = "result type is string";
} else if (typeof result === "number") {
  // 해당 조건문을 통과하면 그때부터 result 의 타입은 number 가 된다. (타입추론)
  result + 1;
}

//----------------------------- typeof never -----------------------------------------
// never 타입은 함수가 반환값이 없어야 할 때 사용하면 좋다.
function hello(): never {
  return "world";
  // 타입이 never 일 경우 return 에서 에러가 발생하는것을 확인할 수 있다.
}

// 만약 에러를 반환하고 싶은 경우에는 이런 방식으로 에러를 반환할 수 있다.
function world(): never {
  throw new Error("hello");
}

// never을 쓸 수도 있는 상황 예시.
function value(a: string | number) {
  if (typeof a === "string") {
    let b = a.toUpperCase();
    return b;
  } else if (typeof a === "number") {
    let b = a + 1;
    return b;
  } else {
    a;
    // 여기서 a의 타입은 never 이다.
    // 따라서 else 부분은 실행되지 않는다.
  }
}
