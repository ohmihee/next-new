import express from 'express';

const app = express();

app.get('/api',(req, res) => {
    const posts = [
        {id: 1, title:'title1', price:'1000'},
        {id: 2, title:'title2', price:'2000'},
        {id: 3, title:'title2', price:'2000'}
    ];
    return res.json(posts)
})

app.get('/board/:id', (req,res) => {
    const { id } = req.params;
    let posts
    if(id == '1') {
        posts = {title: 'title1', price: '1000'}
    }
    else if (id =='2') {
        posts = {title: 'title2', price: '2000'}
    }
    else  {
        posts = {title: 'title3', price: '3000'}
    }
    return res.json(posts)
} )

app.listen(3000, ()=>{
    console.log('server start 3000')
})
