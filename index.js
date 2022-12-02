const express = require("express")
const expressEdge = require('express-edge');
const path = require("path")
const app = new express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shahanarshad86:powersoft19@shahan.zyyftyn.mongodb.net/Post')
const Post = require('./database/models/Post')
app.use(express.static('public'))
app.use(expressEdge.engine)

const bodyParser = require('body-parser')
const fileUpload=require('express-fileupload')
const customMiddleware=(req,res,next)=>
{
//console.log('I have been called this time')
if(!(req.files && req.files.image)||!req.body.username||!req.body.title ||!req.body.subtitle || !req.body.content)
{
    return res.redirect('/post/new')
}

next()  //this function is called to tell express to move to handle browser request.

}
//app.set('views','${__dirname}/views')
//app.use(express.static(path.join(__dirname + '../public')));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/post/store',customMiddleware)
/*app.get('/index',(req,res)=> {     //routing for the home page
res.sendfile(path.resolve(__dirname,'pages/index.html'))
})*/
/*app.get('/home',(req,res)=> {     //routing for the home page
    res.render('index.html')
    })

*/
/*app.get('/home',(req,res)=> {     //routing for the home page
    res.sendfile(path.resolve(__dirname,'pages/index.html'))
    })*/

/*app.get('/home', (req, res) => {

    res.render('index')


})*/


app.get('/post/new', (req, res) => {   //will route to create.edge file if request comes
    res.render('create')
}
)
app.get('/index', async (_req, res) => {
    const posts = await Post.find({})
    console.log(posts)
    res.render('index', {
        posts
    })
    // res.render('about')

})
app.get('/about', (req, res) => {   // routing for the about page
    //   res.sendfile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})
app.get('/post/:id', async (req, res) => {   //routing for the post page
    //    console.log(req.params)   //display the object paramas in the log
    const post = await Post.findById(req.params.id)
    res.render('post', {
        post
    })
})

app.post('/post/store', (req, res) => {  //send the data to the server
    console.log(req.files)  //the files sent in the request object are retrevied here
    const {image}=req.files
    image.mv(path.resolve(__dirname,'public/posts',image.name),(error)=>{
        Post.create({
            ...req.body,
            image:'/posts/2.jpg'   //image.name is the name of the image uploaded, we are storing the image in the database.
        }, (error, post) => {
            console.log(error, post)
            res.redirect('/index')
        });


    })

   
});

app.get('/contact', (req, res) => {   //routing for the contact page
    // res.sendfile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact')
})

//hello   
//this is test commit;
app.listen(4000, () => {
    console.log('App listening on port 4000');
})
