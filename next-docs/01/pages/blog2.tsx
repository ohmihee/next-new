import { loadPosts } from '../lib/fetch.posts';

export const getStaticProps = async () => {
    const posts = loadPosts()

    return {
        props: {posts}
    }
}