const Post = require('../models/post');

//Database'den tüm postları getirerek anasayfaya gönder
const home = async (req, res) => {
    // console.log(process.env.API_KEY);
    const posts = await(await Post.find({})).reverse();//burada yenı eklenenlerın en ustte olması ıcın reverse fonksıyonu kullanıldı.
    res.render('/',{posts});
}

//about sayfası içeriğini getir
const about = (req, res) => {
    res.render('/about');
}

//post ekleme sayfasının içeriğini getir
const addPost = (req, res) => {
    res.render('/add_post');
}



module.export = {
    home,
    about,
    addPost,

}