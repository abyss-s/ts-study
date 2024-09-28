// 기본 타입 간의 호환성
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "해피",
  color: "brown",
  breed: "poodle", // 추가 프로퍼티로 인해 조건이 더 붙어버림
};

animal = dog; // 가능
// dog = animal // 불가능
// -> Animal은 슈퍼셋, Dog는 서브셋

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let book2: ProgrammingBook = {
  name: "책",
  price: 10000,
  skill: "typescript",
};

book = book2; // 다운캐스팅

let book3: Book = {
  name: "책",
  price: 10000,
  // skill: "typescript",
};

// 초과 프로퍼티 검사: 객체 리터럴 전달 시 발동