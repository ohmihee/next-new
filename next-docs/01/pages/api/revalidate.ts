import type { NextApiRequest, NextApiResponse  } from "next";

export const handler = async (
    req: NextApiRequest, res: NextApiResponse
) => {
    if(req.query.secret !== process.env.MY_SERCRET_TOKEN) {
        return res.status(401).json({message: 'Invalid token'})
    }
    try {
        await res.unstable_revalidate('/path-to-revalidate')
        return res.json({ revalidated: true })
    } catch(e) {
        return res.status(500).send('Error revalidating')
    }

}

export default handler;