import type { NextPage } from 'next';

interface IUserProps {
    data:{
        title: string,
        price: string
    }
}

export const User: NextPage<IUserProps> = ({data}) => {
    //console.log(data)
    return (
        <>
            {/* {data.title}
            {data.price} */}
        </>
    )
};


// 서버 측 렌더링을 사용한 캐싱
// * 캐싱 : 캐시는 컴퓨터에서 데이터나 값 등을 미리 복사해 두어 재사용할 수 가능하게 하는 것을 의미한다.
// 캐싱할 경우 복사해둔 데이터 값을 재사용하므모 더욱 빠르게 데이터에 접근할 수 있다.
// export const getServerSideProps = async () => {
//     const res = await fetch('http://localhost:3000/board/1');
//     const data = await res.json();

//     return {
//         props: {
//             data
//         }
//     } 
// }

export const getServerSideProps = async ({req, res }: any) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    return {
        props: {}
    }
}

export default User