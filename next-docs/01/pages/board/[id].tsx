import type { NextPage, GetStaticPaths, GetStaticProps} from 'next';
interface IBoardProps {
    post: {
        id: number | string,
        title: string,
        price: string
    }
}

const BoardDetail: NextPage<IBoardProps> = ({post}) => {
    console.log(post)
    return (
        <>
            <p>{post.title}</p>
            <p>{post.price}</p>
        </>
    )
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api');
    const posts = await res.json();

    // get the paths we want to pre-render based on posts
    const paths = posts.map((post : any) => ({
        params: {
            id: post.id.toString()
        }
    }));
    return { paths, fallback: false}
    // fallback이 false인 경우 path가 존재하지 않는 곳으로 접근할 경우 404페이지를 보여줌.
    // true인 경우에는 데이터없이 페이지가 렌더링 되어 에러가 나게 된다.
};
// 아래 중요 =========
// 계속 paths가 잡히지 않는 것으로 나왔는데 id의 타입의 숫자여서 그랬다. string 타입으로 바꾸어 주니 정상적으로 처리 되었다.


export const getStaticProps: GetStaticProps<any> = async ({params}) => {
    const res = await fetch(`http://localhost:3000/board/${params.id}`);
    const post = await res.json();
    return {
        props: {
            post
        }
    }
}

export default BoardDetail;