// 대수타입이란?
// 여러개의 타입을 합성해서 새롭게 만들어 낸 타입

// 1. 합집합(union)
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];


type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = { // 포함되지 않아 불가능
//   name: "",
// };

// 2. 교집합(intersection)
let variable: number& string;
// number와 string 타입을 모두 만족하는 타입은 존재하지 않음 -> never

// 객체에서 교집합 사용하기: 프로퍼티를 모두 포함해야 함!
type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};


