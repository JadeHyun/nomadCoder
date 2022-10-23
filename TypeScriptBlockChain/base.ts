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
