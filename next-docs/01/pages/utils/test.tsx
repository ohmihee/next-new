// this app shows what next.js bundels for the client-side with ist new ssg
// support this editor supports typescript syntax

import Cookies from 'cookies';
import Mysql from 'mysql2';
import Link from 'next/link';
import SQL from 'sql-template-strings';
import type {NextPage} from 'next';

const pool = Mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'project_test'
});

interface ITestProps {
    projects: Array<any>
}

export const Test: NextPage<ITestProps> = ({projects}) => {
    console.log(projects)
    return (
        <>
        {projects.map((ele)=>(
            <p>
                {ele.id}
                {ele.password}
            </p>
        ))}
        </>
    )
};

export const getServerSideProps = async ({req, res}: any)  => {
    const userId = new Cookies(req, res).get('user_id');
    const projects = await new Promise((resolve, reject) => {
        pool.query(
            SQL`SELECT id, bot_id, password from user`,
            (err,result) => (err?reject(err): resolve(result))
        )
    });
    return {
        props: {
            projects
        }
    }
}

export default Test
 