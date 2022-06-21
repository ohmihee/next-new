// Incremental Static Regeneration
// 일정한 간격에 의해 페이지를 새롭게 정적생성한다.

import { rmSync } from 'fs';
import type{ GetStaticProps, NextPage } from 'next'

interface IRePageProps {
    posts: Array<any>
}

export const RePage:NextPage<IRePageProps> = ({posts}) => {
    console.log(posts)
    return (
        <>
            {
                posts.map((post)=>(
                    <p key={post.id}>
                        {post.id}
                        <br/>
                        {post.title}

                    </p>
                ))
            }
        </>
    )
}

// this function gets called at build time on server-side
// it may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api');
    const posts = await res.json();

    return {
        props: {
            posts
        },
        // Next.js will attemp to re-generate the page;
        // - When a request comes in
        // - At mose once every 10 seconds
        revalidate: 10
        // revalidate 개념 다시 확인
        // revalidate를 위와 같이 설정할 경우 웹사이트의 모든 사용자는 10초간 동일한 버전의 사이트를 보게된다.
        // 10초이후 다른 사용자가 다시 요청시 이전의 캐시는 무효화되고 다시 페이지를 캐싱하고, 이후 위의 과정을 반복한다.
        // 새로운 요청이 없는 경우 캐시는 유지된다.
        // 기본값은 false로 false인 경우 요청시에만 페이지를 재검증한다.
    }
}

// the function gets called at build time on server-side
// it may be called again, on a serverless function, if
// ths path has not benn generated
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api');
    const posts = await res.json();
    // get the paths we want to pre-render based on posts
    const paths = posts.map((post: any) =>({
        params: {
            id: post.id.toString()
        }
    }));

    // we'll pre-render only these paths at build time.
    // {fallback : blocking} will server-render pages
    // on-demand if the path doesnt exist
    return { paths, fallback: 'blocking'}
}

export default RePage