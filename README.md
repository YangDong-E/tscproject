# 타입스크립트 공부 및 포트폴리오 

## 예시 폴더 - restaurant

### tsconfig

1. node는 자바스크립트를 이해하지만, 타입스크립트는 이해를 하지 못하기 때문에 컴파일을 해주어야 한다.
2. 브라우저에서는 자바스크립트를 이해한다. 타입스크립트는 사람이 작성하며 편의를 위해서 만들고 작성하기 때문이다.
3. 그 작업을 tsc 명령어가 실행하게 된다.
4. tsconfig.json 파일을 작성하여 타입스크립트에서 자바스크립트로 변환할 때 필요한 설정 값들을 지정해줄 수 있다.

- compilerOptions : 컴파일 옵션
- "outDir" : 컴파일하고 난 후 파일들을 어디에 넣을지 정함
- "target" : 자바스크립트의 어떤 버전으로 컴파일을 할지 지정 (es6 , es5)
- "module" : 보통 일반적으로 node에서 쓰는 자바스크립트는 (commonjs) 사용 리액트에서 사용하려면 (esnext)
- "lib" : 어떤 라이브러리를 사용할지 지정("es6","dom") 인경우 es6와 javascript dom 사용

5. tsconfig를 이용하여 컴파일을 할 때 cmd + shift + B를 눌러서 build를 실행시키면된다.


## 프로젝트 만들기 (React, typescript) 

1. npx create-react-app (프로젝트이름) --template typescript 를 사용하여 타입스크립트기반의 리액트 프로젝트를 생성해준다.
2. App.tsx에서 타입스크립트 관련된 설정이 되어있지 않기 때문에 function App() 부분을 타입스크립트화 시킨다.React.FC는 React에서 지정해준 함수컴포넌트 -> const App:React.FC = () => {} 
3. 모든 함수형 컴포넌트에는 작성이 필요한 것 같다.
4. 타입스크립트에서는 타입에 관해 굉장히 스트립하다. 
5. data같은 많은 타입의 정보나 객체를 사용하는 타입은 타입을 만들어서 지정해줄 수 있다.
6. 보통 타입을 만들 때는 model이라는 폴더를 만들어서 타입만 넣어준다.


## 타입 만들기 (model 디렉토리 - resturant.ts 참조)

타입을 만들 때는 두가지 방법이 있다.
interface, type
크게 다른 점은 없지만 사용되는 메서드가 다르다.
props의 경우 props의 타입을 따로 만들어주기도 한다.
데이터이름뒤에 ?를 붙여서 있을 수도 없을 수도 있는 데이터를 사용하여 Omit을 사용해서 빼는 상황을 안 만들수도있다.(데이터이름?:타입) - 단점: 반드시 필요한 부분에서도 ?가 붙어있으므로 없을때 문제를 발생시키지 않는다.주의해서 사용

1. interface

- interface 타입이름 {
    데이터이름: 타입;
}

2. type으로 작성

- type 타입이름 = {
    데이터이름: 타입;
    데이터이름: 타입;
    데이터이름: 타입;
    데이터이름 :{
        데이터이름: 타입,
        데이터이름: string,
        데이터이름: number,
    };
    데이터이름: {
        데이터이름: 타입,
        데이터이름: string,
        데이터이름: number,
    }[]         []를 붙이는 이유는 배열타입일때 가장 뒤에 붙여준다.
}

## useState를 타입스크립트에서 사용

1. <> 제네릭 문법을 사용하여 useState는 함수이기 때문에 함수를 부를때 들어가는 타입을 정해준다.
2. set 부분을 사용하거나 useState뒤에 오는 변수 모두가 타입이 맞아야 에러가 발생하지 않기 때문에 더욱 좋다.
3. 제네릭 문법은 React.FC 컴포넌트에도 사용이 가능하다. React.FC<타입> 

## props(Store.tsx)

1. props로 값이나 데이터를 보낼수도 있지만, 함수를 보낼수도 있다.
2. 값을 보낼 때는 값:타입으로 보내고 함수를 보낼 때는 함수명(props:타입):return값의 타입으로 보낸다.


## extends(BestMenu.tsx)

1. extends는 확장이라는 느낌으로 BestMenu.tsx에서는 OwnProps 타입을 지정해주는데, 이미 정해져있는 model/restaurant.ts에 Menu라는 타입을 그대로 가져와서 사용이 가능하다.
2. 그 후 뭔가 추가할 (데이터:타입) 값이 필요하면 {}안에 바로 추가하면된다.
3. 반복해서 타입을 입력하지않아 코드의 양과 실수를 줄일 수 있다.

## Number와 number의 차이

Number type은 interface type이고 number는 원시 type이다.
그래서 명확하게는 두개가 서로 다른 타입이고, 보통 number를 사용하는 것을 권고하고있다.

