import { NextPage, GetStaticProps } from 'next';
// props 타입 https://melvingeorge.me/blog/set-types-for-functional-components-props-typescript-nextjs

interface IBlogProps {
   posts: Array<any>
}

const Blog: NextPage<IBlogProps> = ({posts}) => {
    console.log(posts)
    return (
        <>
            <ul>
                {
                    posts.map((post)=>(
                        <li>
                            {post.title}<br/>
                            {post.price}
                        </li>
                        
                    ))
                }

            </ul>
        </>
    )
}

// this function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
    // call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api');
    const posts = await res.json();

    // By returning {props: {posts}}, the Blog component
    // will receive 'posts' as a prop at build time
    return {
        props: {
            posts
        }
    }
}

export default Blog;
