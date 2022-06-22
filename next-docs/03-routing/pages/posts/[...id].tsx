// [...]이런 식으로 파일명을 할 경우 동적 경로를 확장할 수 있다.
// 즉 posts/1/2 는 12  posts/1/content는 1content로 경로가 확장된다.
import { useRouter} from 'next/router'

const Post = () => {
    const router = useRouter()
    const {id} = router.query
    console.log(router)
    //posts/1/2를 하면
    // id : ['1','2']
    return (
        <>
            <h1>Post: {id}</h1>
           
        </>
    )
}

export default Post