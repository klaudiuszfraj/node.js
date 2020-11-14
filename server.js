const express = require('express');
const articleRouter = require('./routes/articles.js');

const app = express();

app.set('view engine', 'ejs');
app.use('/articles', articleRouter);


app.get('/', (req, res) => {
    const articles = {
        title: 'test title',
        date: Date.now,
        description: 'test description'
    }
    res.render('index', {articles});
})



app.listen(5000);