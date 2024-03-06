//Node 3.parti yazılımlarını import et
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
//const expressFileUpload = require('express-fileupload');


//Node 1. parti yazılımlarını import et
const Post = require('./models/post');
//const methodOverride = require('method-override');

//const pageRouter = require('./router/pageRouter');
const postController = require('./controller/postController');
const pageController = require('./controller/pageController');



//MongoDB ile bağlantı kur
mongoose.connect('mongodb://localhost/cleanblog-test-db');//varsa baglantı kurar yoksa da kendısı yaratacaktır.


//gerekli Template Engine dosyasını belirt ve public klasörünü varsayılan yap
app.set('view engine', 'ejs');
app.use(express.static('temp'));//public



//URL de gelecek bilgileri parçala  ve JSON objesine çevir
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// app.use(
//   methodOverride('_method', {
//     methods: ['POST', 'GET'],
//   })
// );


//ROUTES
//Gelen isteğe göre gerekli yönlendirmeleri yap
//app.use('/',pageRouter); //bu kısmı app.get den app use cevırdık cunku burada request ve response arasında bır ıslem yapılıyor yanı bır mıddleware ıslemı yapmıs oluyoruz.
app.get('/',pageController.home);
app.get('/about',pageController.about);
app.get('/addPost',pageController.addPost);
app.post('/new-post',postController.newPost);
app.get('/posts/:id',postController.getPage);



// app.get('/',pageController.home);
// app.get('/about',pageController.about);
// app.get('/addPost',pageController.addPost);
// app.post('/new-post',postController.newPost);
// app.get('/posts/:id',postController.getPage);





// app.get('/about', (req, res) => {
//     res.render('about');
// }) page controller kımına alındı 
// app.get('/add_post', (req, res) => {
//     res.render('add_post');
// })

// app.post('/new-post', async (req, res) => {
//     await Post.create(req.body)
   //console.log(req.body);//istekte bulunulan body 
//     res.redirect('/');//yönlendirme yapar.  

// })

// app.get('/posts/:id', async (req, res) => {//parametre olarak gonderılen id yi yakalarız.
   //console.log(req.params.id);
//     const id = req.params.id;
//     const posts = await Post.find({_id : id});//bulunulan id ye gore postları getırır.
//     console.log(posts);
//     res.render('post.ejs',{posts});

    
    
// })

//server hangi portta çalışacağını belirt
app.listen(process.env.PORT || 5000, () => {
    console.log('port çalıştı 3000');
})