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

# Data Fetching
useSWR, useEffect 등을 통해 특정 요소에 대해 클라이언트 측 렌더링을 사용하도록 할 수 있다.

# 렌더링
Next.js는 기본적으로 SSR(Server Side Rendering)이다. 즉 서버에서 모든 페이지가 렌더링되어 클라이언트에 보내진다.
CSR(Client Side Rendering)은 클라이언트에서 렌더링 작업이 이루어지기 때문에 렌더링 작업이 완료되기 전까지 사용자에게는 빈페이지가 표시되는 문제가 있다. 
* getServerSideProps : 서버 측 렌더링 페이지를 구현하도록 해줌, 요청시에 데이터를 가져오는 방식.
* getStaticProps : 정적 페이지를 생성할 때 사용되며, 렌더링은 서버에서 이루어진다. 서버 측 렌더링과 다른 점은 런타임에 서버가 없다는 점이다. 빌드시 콘텐츠가 생성된 후, html이 cdn에 저장된 후 각 요청에 재사용된다. 데이터를 사용한 정적 페이지 생성이 가능하다. 빌드시에 데이터를 가져오는 방식

# CDN (콘텐츠 전송 네트워크: Content Delivery Network) 
: 본 서버와 클라이언트에 사이에 여러 중간 지점을 두고 정적 콘텐츠를 저장하여, 사용자가 새로운 요청시 사용자와 가장 가까운 위치의 CDN이 캐시된 결과를 응답해주게 된다. 
이와 같은 방식은 CDN을 통해 사용자는 응답을 받으므로, 서버의 부하는 줄여주고, 사용자는 가장 가까운 위치의 CDN에서 캐시된 결과를 응답받으므로 더욱 빠르게 작업이 가능하다.
# EDGE 
: CDN의 상위 개념이 EDGE라 할 수 있다. CDN은 단순 정적 페이지만 캐싱하는 반면, EDGE는 캐싱과 코드 실행 모두를 수행할 수도 있다.

# 기본 앱 만들기
블로그만들기 https://github.com/vercel/next-learn/blob/master/basics/dynamic-routes-starter/components/layout.js#L46
* webpack : 번들러, webpack을 사용하면 번들링된다.
* Babel : Babel을 사용하여 컴파일된다.

# 렌더링 종류
- SSR (Server Side Rendering) : 각 요청에 대해 HTML을 생성하는 사전 렌더링 방식
- CSR (Client Side Rendering)
- SSG (Static Site Generation): 빌드 시 HTML을 생성하는 사전 렌더링 방식

## 사전 렌더링
next.js는 기본적으로 모든 페이지를 사전에 렌더링한다. 
브라우저에서 페이지 로드시 해당 자바스크립트 코드가 실행된다.

# .scss, sass, .module.scss, module.sass 등을 통해 sass를 사용할 수 있다.

* YAML Front Matter는 gray-matter 라이브러리를 사용하여 구문 분석할 수 있다.

참고 사이트
https://nextjs.org/learn/foundations/how-nextjs-works/buildtime-and-runtime
https://nextjs.org/learn/basics/create-nextjs-app/setup
https://babeljs.io/
https://nextjs.org/docs/getting-started
https://vercel.com/docs/concepts/projects/overview# next
