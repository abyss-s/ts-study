# 👻TypeScript Study

## 설치 및 실행

```bash
npm init
npm i @types/node@20.8.0
npm i -g typescript@latest
npx tsc --init
tsc
```

## 컴파일러 옵션 설정

- target : 컴파일 결과 생성되는 자바스크립트 코드의 버전 결정, ESNext는 최신 자바스크립트를 의미함
- module : 컴파일 결과 생성되는 자바스크립트 코드의 모듈 시스템 결정
- outDir : 컴파일 결과 생성되는 자바스크립트 파일들의 위치 결정
- strict : 엄격한 타입 검사 여부 설정
  - `"strictNullChecks": false` : 어떤 타입의 변수든 null 값을 자유롭게 할당 가능
- moduleDetection : 모든 타입스크립트 파일(.ts)에 export 키워드를 자동으로 추가하여 격리된 모듈로 취급되도록 만드는 옵션
- include : tsc로 컴파일 할 타입스크립트 파일의 범위 설정

> tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "outDir": "dist",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

## 포스팅
- [타입스크립트 시작하기](https://tomymoon.tistory.com/154)




---
참고: [Onebite TypeScript](https://ts.winterlood.com/)
