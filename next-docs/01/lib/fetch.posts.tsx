export const loadPosts = async () => {
    const res = await fetch('http://localhost:3000/api');
    const data = res.json();
    return data;
}

