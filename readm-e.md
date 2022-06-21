https://nextjs.org/docs/getting-started
# 설치
npx create-next-app --typescript
or
yarn create next-app --typescript

# 수동 설치
npm i next react react-dom
package.json
"scripts": {
  "dev": "next dev", // 개발 모드에서 next.js를 실행
  "build": "next build", // 배포용 애플리케이션을 빌드시 실행
  "start": "next start", // 배포용 서버 시작을 실행
  "lint": "next lint" /
}
- pages, public 폴더 생성

# 렌더링
Next.js는 기본적으로 SSR과 SSG를 통한 Pre-rendering 방식을 취한다. Next
* SSR (Server Side Rendering) : 각 요청에 의해 렌더링이 서버에서 이루어진다.
* SSG (Static Site Generation) : 빌드시 서버에서 렌더링이 이루어지며, 이를 CDN(Content Delivery Networ)에서 캐싱해둔 후 사용자가 요청시 가장 가까운 곳에 위치한 CDN을 통해 재사용한다.
=> Next.js는 각 페이지마다 어떠한 렌더링 방식을 취할지 선택할 수 있다. 때문에 각 페이지의 특성에 따라 적절한 렌더링 방식을 취하여, 리소스 낭비를 막고, 최적의 사용자 경험을 제공할 수 있다.
일반적으로 SSG를 이용시 CDN에 캐싱된 정적 파일을 재사용할 수 있으므로, 성능적인 면에서 SSG를 이용한 렌더링방식을 유용하다. 때문에 기본적으로는 SSG방식을 취하고 데이터별로 다른 화면의 구현이 필요한 경우에는 SSR방식을 취하는 것이 좋다.
=> Pre-Rendering 방식 이외에도 필요하다면, CSR 방식을 취할 수 도 있다.

정적 예시
https://nextjs.org/docs/basic-features/pages

## SSG (static site generation)
SSG 방식은 다시 데이터가 없는 경우와, 데이터가 존재하는 경우로 나뉜다.
데이터가 없는 경우는 단순하게 빌드시 한 페이지당 하나의 HTML파일을 생성한다고 생각하면 된다.
중요한 것은 데이터가 있는 경우이다.
### 페이지 콘텐츠 : getStaticProps 사용
### 페이지 경로 : getStaticPaths, getStaticProps 사용

#### 외부 데이터 가져오는 경우 : getStaticProps 
pre-rendering방식으로 동일한 파일에서 export된 async 함수를 형태로 사용한다. getStaticProps를 통해 빌드시 호출되어 가져온 데이터를 페이지의 props로 전달할 수 있다. 
- 페이지가 사전 렌더링되어 빠르게 화면을 구현해야 하는 경우
- 데이터가 공개적으로 캐시되어도 상관없는 경우
=> next-docs/01/pages/blog.tsx 파일 참고

#### 동적페이지에 외부 데이터 가져오는 경우 : 
ex) posts/[id].tsx와 같이 설정하여 페이지가 동적으로 구현되는 경우

** 가능하면 정적생성을 이용하는 것이 좋다. 한번 빌드하고 나면 CDN에 캐싱해둔후 재사용할 수 있으므로, 더욱 빠른 페이지 렌더링이 가능하다.
데이터와 상관없이 모든 사용자에게 동일한 화면을 보여주는 페이지인 경우 정적생성되는 방식을 취하는 것이 유리하다. 
또한 클라이언트측 렌더링을 추가하여 정적생성 페이지에 추가 데이터를 불러오는 것도 가능하다.

### SSR (Server Side Rendering) 또는 동적 렌더링
SSR 방식인 경우 사용자의 각 요청에 따라 페이지가 생성된다.
export와 async, getServerSideProps를 통해 구현한다.

#### getServerSideProps
매 업데이트 되는 등 데이터의 변화가 많은 페이지인 경우 getServerSideProps를 통해 SSR방식으로 구현한다. getServerSideProps의 가장 큰 특징은 빌드때가 아닌 사용자의 매 요청시에 렌더링이 이루어진다는 것이다.
getServerSideProps는 페이지 파일에서만 가능하다.
// getServerSideProps에 getStaticPaths를 사용해서는 안 된다.
// getServerSideProps는 기본적으로 빌드 시 렌더링된 페이지를 사용자가 요청시 표시해준다.

### 클라이언트측에서 데이터 가져오기 
~ 페이지를 미리 렌더링할 필요는 없지만, 데이터가 계속 업데이트되는 페이지인 경우

// 렌더링 참고 사이트 
// https://velog.io/@devstone/Next.js-100-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-feat.-initialProps-webpack-storybook


