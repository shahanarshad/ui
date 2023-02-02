const express = require("express")
const expressEdge = require('express-edge');

const app = new express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shahanarshad86:powersoft19@shahan.zyyftyn.mongodb.net/Post')
const Post = require('./database/models/Post')
app.use(express.static('public'))
app.use(expressEdge.engine)

const bodyParser = require('body-parser')
const fileUpload=require('express-fileupload')
const createPostController = require("./controllers/createPost");
const createHomeController= require("./controllers/homePage");
const createStoreController=require("./controllers/storePost");
const createContactController=require("./controllers/contactPage");
const createUserController=require("./controllers/createUser");
const getPostController=require("./controllers/getPost");
const customM=require('./middleware/storePost');
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use('/post/store',customM)
app.get("/post/new", createPostController);
app.get('/index', createHomeController);

app.get('/about', (req, res) => {   // routing for the about page   page was deleted in lecture 35 by author
    //   res.sendfile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})
app.get('/post/:id', getPostController);
app.get("/auth/register",createUserController);
app.post('/post/store', createStoreController);
app.get('/contact', createContactController);
app.listen(4000, () => {
    console.log('App listening on port 4000');
})
