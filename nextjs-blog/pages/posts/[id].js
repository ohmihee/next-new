// import Layout from '../../components/Layout';
// import { getAllPostIds, getPostData } from '../../lib/posts';

// export default function Post ({postData}) {
//     return (
//         <Layout>
//             {postDate.title}
//             <br/>
//             {postData.id}
//             <br/>
//             {postData.date}
//         </Layout>
//     )
// }

// export async function getStaticPaths () {
//     const paths = getAllPostIds();
//     return {
//         paths,
//         fallback: false
//     }

// }

// export async function getStaticProps({params}) {
//     const postData = getPostData(params.id);
//     return {
//         props: {
//             postData
//         }
//     }
// }
// Add this import
import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';

export default function Post({ postData }) {
  return (
    <Layout>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      {/* Keep the existing code here */}
      <Date dateString={postData.date}/>
    </Layout>
  );
}