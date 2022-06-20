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

## SSG
SSG 방식은 다시 데이터가 없는 경우와, 데이터가 존재하는 경우로 나뉜다.
데이터가 없는 경우는 단순하게 빌드시 한 페이지당 하나의 HTML파일을 생성한다고 생각하면 된다.
중요한 것은 데이터가 있는 경우이다.
### 페이지 콘텐츠 : getStaticProps 사용
### 페이지 경로 : getStaticPaths, getStaticProps 사용

