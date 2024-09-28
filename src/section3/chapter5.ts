// 타입 추론
let a = 10;
let b = "hi";
let c = {
  id: 1,
  name: "이영주",
  profile: {
    nickname: "abyss-s",
  },
};

// 구조 분해 할당
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

// 함수는 반환값 기준으로 추론
function func() {
  return "hello";
}

// 주의해야 할 상황 정리
// 1. 초기화 되지 않은 변수 => any 타입의 진화
let d; // 암묵적 any로 추론됨
d = 10;
d.toFixed(); // 이 시점에서는 숫자로 추론되어 에러가 발생하지 않음

d = "hello";
d.toUpperCase(); // 이 시점에서는 문자열로 추론되어 에러가 발생하지 않음
// d.toFixed();

// 2. const 상수의 추론
const num = 10; // 숫자 리터럴 10
const str = "hello"; // 문자열 리터럴

// 최적 공통 타입
let arr = [1, "string"]; // (string | number)[] 타입으로 추론됨
