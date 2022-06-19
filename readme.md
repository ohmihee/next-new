# next.js란
리엑트 프레임워크이다.
* 리엑트는 사용자 인터페이스 즉 화면을 구현하는 javascript 라이브러리이다.
* 웹개발시 고려해야할 사항
- User Interface
- Routing
- Data Fetching
- Rendering
- 배포 환경
- 성능
- 확장성
* html은 초기 페이지 콘텐츠를 보여주고, DOM은 자바스크립트 코드의 실행이 반영된 페이지 콘텐츠를 보여준다.

# 기본 세팅
html문서에서 리엑트 사용
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

yarn create next-app --typescript
or
npx create-next-app --typescript

# 실행
ReactDOM.render()를 통해 화면을 구현해낼 수 있다.
* JSX 문법 : ui를 구현하는 것으로, 자바스크립트 구문의 확장이다. 쉽게 이야기하면 자바스크립트에서 html에서 사용되는 태그 등을 사용할 수 있도록 한 것이라 할 수있다. 브라우저는 jsx문법을 이해하지 못하므로, 바벨과 같은 자바스크립트 컴파일러가 필요하다.
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

- 리엑트에서 컴포넌트 명칭의 첫글자는 반드시 대문자이어야 한다.
- 컴포넌트의 렌더링되는 영역에서 자바스크립트 문법을 사용하기 위해서는 중괄호{}안에 넣어 사용해야 한다.

* jsx구문 타입스크립트 등은 유용하지만 브라우저가 이해하지 못하기 때문에 브라우저가 이해할 수 있는 언어인 자바스크립트로 컴파일하는 과정이 필요하다.

# 번들링이란?
기본적으로 애플리케이션은 여러 파일들로 이루어지는데, 번들링은 파일들을 최적화된 번들로 병합하는 과정을 의미한다. 번들링을 통해 사용자가 웹 페이지 방문시 파일 요청 수를 최소화하도록 할 수 있다.
https://nextjs.org/learn/foundations/how-nextjs-works/bundling


참고 사이트
https://nextjs.org/learn/foundations/how-nextjs-works/buildtime-and-runtime
https://nextjs.org/learn/basics/create-nextjs-app/setup
https://babeljs.io/
https://nextjs.org/docs/getting-started
https://vercel.com/docs/concepts/projects/overview