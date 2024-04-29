# 프로젝트 - asia 24.03.22

## react + typescript 사용하여 웹 페이지 만들기

- 포트폴리오 및 react와 타입스크립트 연습, 아버지 가게 웹페이지 만들기

## 현재 사용된 스택, 라이브러리

- React, Typescript, styled-components, react-router-dom, react-dom

## 특이 사항 (참조 사이트는 따로 정리)

- 예전에 캐러셀을 구현할 때는 라이브러리를 사용하였는데, 이번에는 라이브러리를 사용하지 않고 구글링을 통해 캐러셀을 구현 하였다.👍

- 캐러셀을 구현하면서 useRef 부분에서 많은 시간을 쓰게되었는데 useRef 사용 후 useEffect 부분에서 .current가 never 타입이 나오면서 에러가 발생했다.

  - 해결 방법 : 함수 표현식의 경우 아무것도 return하지 않을 경우 never 타입이 자동으로 return 타입으로 할당되기 때문에 useRef에 값을 화살표 함수로 넣어 never 타입이 자동으로 들어가게(?) 하여 해결하였다. (이 부분에 대해서는 다시한번 알아볼 필요가 있을것 같다.)

- 구글링을 하여 많은 블로그들을 접해보면서 styled-component를 좀 더 편하고 유용하게 사용하는 법을 배우면서 이 프로젝트에 적용 중

- 다른 분들이 먼저 만들어본 기능이나 코드 작성법도 보고 참조하면서 몸에 익히는게 중요한 것 같다.👍

- react를 사용하면서 Outlet을 처음 알게되어 사용중인데 중첩 라우팅을 해야할 때 굉장히 좋은 것같다.👍

- 코드를 구현하는 도중에 원인 모를 에러가 발생하여 같은 레포에 새로 작성하여 올릴 예정 ㅠㅠ

## 타입스크립트를 이용한 간단한 쇼핑몰 UI 및 기능 만들기

1. 로고 클릭시 홈 화면으로 이동
2. 다크모드
3. 로그인 및 회원가입
4. 주문내역 확인
5. 장바구니
6. 메인화면
7. 캐러셀
8. 결제하기
9. 마이페이지

### 진행하며 생겼던 문제점들

1. product를 뿌릴때 key값을 지정하지않으면 에러가 발생하지만 key값을 지정해줌으로서 에러가 없어진다.
2. react-query로 데이터가져오기(https://youtu.be/-ifcPnXHn8Q?feature=shared&t=6425)참조
3. react-toastify로 에러 창 띄우기
4. Store.tsx에서 case "CART_ADD_ITEM" 부분에서 에러가 발생했는데 케이스 내부를 캡슐화 하여 해결함
(https://stackoverflow.com/questions/50752987/eslint-no-case-declaration-unexpected-lexical-declaration-in-case-block)
5. SignPage에서 isLoading 부분이 any타입으로 에러가 났었는데 userHooks.ts에서 @tanstack/react-query를 5 버전에서 4 버전으로 다운그레이드하여 해결함
6. PostMan으로 APi 통신 확인
7. Paypal 연동중 main.tsx에서 <PayPalScriptProvider options>의 옵션의 값에서 오류가 났는데 버전을 7.8.2버전으로 다운그레이드하여 해결함
8. Paypal로 연동한 이유는 결제 시스템을 테스트 해보려고 구글링을 하던 중 Paypal로 데모 연동을 할 수 있다는걸 알게되어 진행함


### 앞으로 해볼것

- React.js가 아닌 Next.js를 사용하여 코드 작성 연습
- 타입스크립트 사용은 계속
- 쇼핑몰 기능 업데이트

### Next.js를 사용하려는 이유

1. 리액트는 CSR 방식으로 작동하는데 클라이언트 측에서 모든 화면을 렌더링하여 처음에는 빈HTML을 받게 된다. 즉, 첫 페이지 접속 시에 로딩시간이 SSR에 비해 느리다는 단점이 있다.
2. 검색 엔진 최적화(SEO)에 취약하다. - 검색 결과에 잘 노출되지 못한다.(쇼핑몰은 검색 결과 노출에 민감한 부분)
3. 넷플릭스, 우버, 트위치 등등 많은 기업에서도 Next.js를 사용하고 있다.
4. 현재 프론트엔드 개발자가 프론트만 담당하는 일보단 Next.js를 사용하여 풀스택 웹 개발을 하는 추세이다.
5. Next.js를 사용하면 백엔드 서버를 따로 할 필요없이 api기능을 사용할 수 있기 때문에 편리하다.
