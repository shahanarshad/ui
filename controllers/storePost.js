const path = require("path")
const Post=require('../database/models/Post')

module.exports=(req,res)=>{

    const {image}=req.files
    image.mv(path.resolve(__dirname,'..','public/posts',image.name),(error)=>{
        Post.create({
            ...req.body,
            image:'/posts/2.jpg'   //image.name is the name of the image uploaded, we are storing the image in the database.
        }, (error, post) => {
            console.log(error, post)
            res.redirect('/index')
        });


    })


}