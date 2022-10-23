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
