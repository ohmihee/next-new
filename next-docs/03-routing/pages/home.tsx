import Link from 'next/link';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';


const Home:NextPage = () => {
    const router= useRouter()
    return (
        <>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog/hello-world">
                        <a>Blog Post</a>
                    </Link>
                </li>
            </ul>
            <button onClick={()=>router.push('/board')}>
                board
            </button>
        </>
    )
}

export default Home