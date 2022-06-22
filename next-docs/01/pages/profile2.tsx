import useSWR from 'swr';

//const fetcher = (...args) => fetch(...args).then((res)=>res.json())

const Profile2 = () => {
    const fetcher = async (url: string) =>
        fetch (url).then((res)=>res.json())
    const {data, error} = useSWR('/api/profile-data', fetcher)

    if(error) return <> Failed to load</>
    if(!data) return <>Loading ... </>

    return (
        <>
            <h1>{data.name}</h1>
        </>
    )
}


export default Profile2
