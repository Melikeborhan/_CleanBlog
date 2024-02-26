const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/post');


mongoose.connect('mongodb://localhost/cleanblog-test-db');//varsa baglantı kurar yoksa da kendısı yaratacaktır.


app.set('view engine', 'ejs');
app.use(express.static('temp'));



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
 
// parse application/json
app.use(express.json())


app.get('/', async (req, res) => {
   // console.log(process.env.API_KEY);
    const posts = await (await Post.find({})).reverse();//burada yenı eklenenlerın en ustte olması ıcın reverse fonksıyonu kullanıldı.
   
    res.render('index',{posts});
    
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

app.post('/new-post', async (req, res) => {
    await Post.create(req.body)
    //console.log(req.body);//istekte bulunulan body 
    res.redirect('/');//yönlendirme yapar.  

})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 3000');
});