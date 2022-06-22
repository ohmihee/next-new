// baseurl 설정 https://nextjs.org/docs/advanced-features/module-path-aliases
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string,
  id: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {id}= req.query
    if (req.method === 'GET') {
        return res.status(200).json({name: 'mihee', id : id})
    }
    if (req.method === 'POST') {
        return res.status(200)
    }
}
