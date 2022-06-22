import {useRouter} from 'next/router'
import Link from 'next/link'

const Board = () => {
    const router = useRouter()
    const { id } = router.query;

    return (
        <>
            <h1>Board: {id}</h1>
            <ul>
                <li>
                    <Link 
                        href="/board/[id]/[comment]" 
                        as={`/board/${id}/first-comment`}>
                        <a>First comment</a>
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/board/[id]/[comment]" 
                        as={`/board/${id}/second-comment`}>
                        <a>Second comment</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Board