// return값은 추론이 가능하므로 생략가능
function func(a: number, b: number): number {
  return a + b;
}

function func_notype(a: number, b: number) {
  return a + b;
}

// 화살표 함수도 마찬가지. 생략가능
const add = (a: number, b: number): number => a + b;
const add_notype = (a: number, b: number) => a + b;

// 매개변수 기본값 설정하기
function introduce(name = '영주') {
  console.log(`이름: ${name}`);
}

// 만약 기본값과 다른 타입의 매개변수를 넣으면 에러
// function introduce_err(name: number = '영주') {
//   console.log(`이름: ${name}`);
// }

// 지정해둔 함수에 다른 타입 인수를 전달해도 에러
// introduce(1);

/* 선택적 매개변수 */
// 선택적 매개변수는 필수 매개변수 앞에 올수 없다.
function introduce2(name = '영주', tall?: number) {
  console.log(`이름: ${name}`);
  console.log(`키: ${tall}`);
}
introduce2('영주', 164); // undefined와 union 된 값으로 자동 추론됨.
introduce2('영주');

// 타입 좁히기
function introduce3(name = '영주', tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === 'number') {
    console.log(`tall : ${tall + 10}`);
  }
}

// 나머지 매개변수
// rest: 개별 요소들을 반복 가능한 값(배열, 객체 등)으로 묶어줌
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

// 나머지 매개변수의 길이 고정도 가능 => 튜플 타입 이용
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
