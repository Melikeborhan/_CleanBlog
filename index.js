const express = require('express');

const app = express();
app.set('view engine', 'ejs');


app.use(express.static('temp'));


app.get('/', (req, res) => {

    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/add_post', (req, res) => {
    res.render('add_post');
})
app.get('/post', (req, res) => {
    res.render('post');
})

const port = 3000;

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});