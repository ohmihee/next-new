import type {GetServerSideProps, NextPage } from 'next';

interface IPageProps {
    data: {
        title: string,
        price: string
    }
}

export const Page: NextPage<IPageProps> = ({data}) => {
    console.log('data === ', data)
    return (
        <>
            {data.title}
            {data.price}
        </>
    )
}



export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost:3000/board/1');
    const data = await res.json();
    return {
        props:{
            data
        }
    };
    // will be passed to the page component as props
}

export default Page