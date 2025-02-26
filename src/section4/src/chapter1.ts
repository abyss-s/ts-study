/*
 * 함수 표현식(Function Type Expresion)
 * - 함수 타입을 함수 별칭과 함께 별도로 지정할 수 있다.
 *
 * - type Add = (a: number, b: number) => number;
 * - const add: Add = (a, b) => a + b;
 */

// 여러개의 함수가 동일한 타입을 갖는 경우 요긴하다.
// const add = (a: number, b: number) => a + b;
// const sub = (a: number, b: number) => a - b;
// const mutiply = (a: number, b: number) => a * b;
// const divide = (a: number, b: number) => a / b;

/*
 * 타입 주석: 동일한 타입의 함수가 추가되어도
 * 타입 주석을 정의하여 유지보수에 용이하도록 할 수 있다.
 */
type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mutiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/*
 * 호출 시그니쳐(Call Signinature)
 * - 함수의 매개변수와 반환 타입을 정의하는 방법
 */
// type Operation2 = {
//   (a: number, b: number): number;
// };
type Operation2 = {
  (a: number, b: number): number;
  name: String; // 호출 시그니쳐와 일반 property를 함께 정의할 수 있다.
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mutiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add(1, 2);
add2.name; // 하이브리드 타입: 함수이자 일반 객체.
