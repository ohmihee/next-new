import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(post)
    const allPostsData = fileNames.map(fileName => {
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data
        }
    });
    return allPostsData.sort((a,b) => {
        if(a.data< b.data) {
            return 1
        } else {
            return -1
        }
    })

}
