import { NextPage } from 'next';
// props 타입 https://melvingeorge.me/blog/set-types-for-functional-components-props-typescript-nextjs

interface IBlogProps {
    posts: Array<any>
}

const Blog: NextPage<IBlogProps> = ({posts}) => {
    return (
        <>
            <ul>
                {
                    posts.map((post)=>(
                        <li>{post.title}</li>
                    ))
                }

            </ul>
        </>
    )
}


export default Blog;