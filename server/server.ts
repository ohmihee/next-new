import express from 'express';

const app = express();

app.get('/api',(req, res) => {
    const posts = [
        {title:'title1', price:'1000'},
        {title:'title2', price:'2000'}
    ]
    return posts
})

app.listen(3000, ()=>{
    console.log('server start 3000')
})
