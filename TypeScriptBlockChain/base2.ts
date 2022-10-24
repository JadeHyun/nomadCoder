// (function) typeof call signature

type Plus = (a: number, b: number) => number;
// 함수의 시그니처 만드는 방법.
// 타입인스턴스를 만들었으니 인수와 반환값의 타입을 정의해준 샘이다.
const add: Plus = (a, b) => a + b;
// add 함수의 타입을 이런식으로 지정해 주는것. 그게 바로 함수시그니쳐 이다.
// 타입을 먼저 위에서 정의하고, 함수에서는 정의된 함수만 타입에 적용시키면 되는 형식.
// 정상작동 & a와b의 타입은 number 결과값의 타입은 number

// (function) typeof polymorphism
