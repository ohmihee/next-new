import Link from 'next/link';
import type { NextPage } from 'next';

interface IPostsProps {
    posts: Array<any>
}

// const Posts:NextPage<IPostsProps> = ({posts}) => {
//     return (
//         <>
//             <ul>
//                 {posts.map((post)=>(
//                     <li key={post.id}>
//                         {/* encodeURIComponent(string)  
//                             // 출처 https://opentutorials.org/course/50/190
//                             uri로 데이터 전달을 위한 문자열 인코딩을 위해 사용
//                         */}
//                         <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
//                             <a>{post.title}</a>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
            
//         </>
//     )
// }

const Posts:NextPage<IPostsProps> = ({posts}) => {
    return (
        <>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <Link href={({
                            pathname: '/blog/[slud]',
                            query: {slud : post.slud}
                        })}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            
        </>
    )
}
export default Posts