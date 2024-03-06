const Post = require('../models/post');


const newPost =  async (req, res) => {
    await Post.create(req.body)
    //console.log(req.body);//istekte bulunulan body 
    res.redirect('/');//yönlendirme yapar.  

}

const getPage = async (req, res) => {//parametre olarak gonderılen id yi yakalarız.
    //console.log(req.params.id);
    const id = req.params.id;
    const posts = await Post.find({_id : id});//bulunulan id ye gore postları getırır.
    //console.log(posts);
    res.render('/post.ejs',{posts});

}
module.export = {
   newPost,
   getPage,
}

