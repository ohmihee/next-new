// api https://nextjs.org/docs/api-routes/api-middlewares
// baseurl 설정 https://nextjs.org/docs/advanced-features/module-path-aliases
// req 내장 미들웨어
// req.cookies
// req.query
// req.body
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name?: string,
  error?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
        if (req.method === 'GET') {
            return res.status(200).json({name: 'mihee'})
        }
        if (req.method === 'POST') {
            return res.status(200)
        }
    }catch(e){
        res.status(500).send({error:'failed to fetch data'})
    }
}
