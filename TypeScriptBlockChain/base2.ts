// ---------------------------------- (function)  call signature ----------------------------------

type Plus = (a: number, b: number) => number;
// 함수의 시그니처 만드는 방법.
// 타입인스턴스를 만들었으니 인수와 반환값의 타입을 정의해준 샘이다.
const add: Plus = (a, b) => a + b;
// add 함수의 타입을 이런식으로 지정해 주는것. 그게 바로 함수시그니쳐 이다.
// 타입을 먼저 위에서 정의하고, 함수에서는 정의된 함수만 타입에 적용시키면 되는 형식.
// 정상작동 & a와b의 타입은 number 결과값의 타입은 number

//---------------------------------- (function)  overloading ----------------------------------
// 오버로딩이란 함수가 서로다른 call signature 를 가지고 있을 때 발생한다.
// 완벽하지는 않지만, 적당한 예시.
type Minus = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const calculator: Minus = (a, b, c?: number) => {
  if (c) return a - b - c;
  return a - b;
};

// calculator 함수는 Minus 라는 타입을 갖는다.
// Minus 타입에는 두가지가 있는데, 하나는 인자가 2개, 하나는 인자가 3개이다.
// 기존 자바스크립트는 인자를 2개만 있어도 작동되는데 문제가 없으나,
// 타입스크립트의 경우 앞서 타입으로 call signature 를 선언했고,
// 인자의 경우 두개만 필요할 경우엔 선택적프로퍼티(?:)를 사용하여 타입을 지정해 주는것이 좋다.

//---------------------------------- (function)  polymorphism ----------------------------------
// call signature 를 사용하는데, 여러 타입을 사용할 경우 각 타입을 하나하나 지정해주는 번거로움이 생긴다.
// 이를 간소화 하기 위해 다형성(polymorphism)을 사용한다.

type SuperPrint = {
  (backNumber: number[]): void;
  (backNumber: boolean[]): void;
  (backNumber: string[]): void;
};

type LegendPrint = {
  <PlaceHolder>(nickNames: PlaceHolder[]): void;
};

type FinallyPrint = {
  <T>(arr: T[]): T;
};

type CollaborationPlaceHolder = <T, M>(a: T[], b: M) => T;

const superPrint: SuperPrint = (number) => {
  number.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, false, true]);
superPrint(["true", "2", "3"]);

const legendPrint: LegendPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

legendPrint([1, 2, 3, 4]);
legendPrint([true, false, true]);
legendPrint(["h", "e", "l", "l", "o"]);
legendPrint([1, 2, 3, true, false, "hello"]);

const finallyPrint: FinallyPrint = (arr) => arr[0];

const a = finallyPrint([1, 2, 3, 4]);
const b = finallyPrint(["hello", "world"]);
const c = finallyPrint([true, false, true, true]);
const d = finallyPrint([1, "hello", true]);

const collaborationPlaceHolder: CollaborationPlaceHolder = (a, b) => a[0];

collaborationPlaceHolder([1, 2, 3], "");
collaborationPlaceHolder(["hello"], "world");
collaborationPlaceHolder([true], false);
collaborationPlaceHolder([], [1, 2, 3, "hello", true]);
