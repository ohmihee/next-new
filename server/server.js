"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api', (req, res) => {
    //console.log(req.params.id)
    console.log('들어오니');
    const posts = [
        { id: 1, title: 'title1', price: '1000' },
        { id: 2, title: 'title2', price: '2000' },
        { id: 3, title: 'title2', price: '2000' }
    ];
    console.log(posts);
    return res.json(posts);
});
app.get('/board/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params.id);
    let posts;
    if (id == '1') {
        posts = { title: 'title1', price: '1000' };
    }
    else if (id == '2') {
        posts = { title: 'title2', price: '2000' };
    }
    else {
        posts = { title: 'title3', price: '3000' };
    }
    return res.json(posts);
});
app.listen(3000, () => {
    console.log('server start 3000');
});
