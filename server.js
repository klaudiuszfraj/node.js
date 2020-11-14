const express = require('express');
const articleRouter = require('./routes/articles.js');

const app = express();

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);


app.get('/', (req, res) => {
    const articles = [
        {
            title: 'test title',
            date: new Date(),
            description: 'test description'
        },
        {
            title: 'test title2',
            date: new Date(),
            description: 'test description2'
        },
    ]
    res.render('index', {articles});
})


app.listen(5000);