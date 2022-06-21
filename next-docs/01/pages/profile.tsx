import {useEffect, useState} from 'react';

type Data =typeof initData;
const initData = {
    name: null,
    bio: null
}

const Profile = () => {
    const [data, setData] = useState<Data>(initData);
    const [isLoading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        fetch('/api/profile-data')
            .then((res) => res.json())
            .then((data)=>{
                setData(data)
                setLoading(false)
            })
    },[])

    if(isLoading) return <p>Loading ... </p>
    if (!data) return <p>No Profile data</p>

    return (
        <>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
        </>
    )
}

export default Profile