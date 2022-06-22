import type {
    NextPage, 
    GetServerSideProps,
    NextApiRequest,
    NextApiResponse
} from 'next'

interface ICacheProps {
    time: any
}
export const Cache:NextPage<ICacheProps> = ({time}) => {
    return (
        <>
            <h1>SSR Caching with next.js</h1>
            <time dateTime={time}>{time}</time>
        </>
    )

}
interface ISSRProps {
    req: any,
    res: any
}
export const getServerSideProps:GetServerSideProps = async ({
    req, res
}) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )
    return {
        props: {
            time: new Date().toISOString()
        }
    }
}

export default Cache