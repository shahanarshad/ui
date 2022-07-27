

const express = require("express")

//const expressEdge = require('express-edge');
const path = require("path")
const app= new express()

app.use(express.static('public'))
//app.use(expressEdge)
//app.set('views','${__dirname}/views')


app.get('/index',(req,res)=> {     //routing for the home page
res.sendfile(path.resolve(__dirname,'pages/index.html'))
})
app.get('/home',(req,res)=> {     //routing for the home page
    res.render('index')
    })


    app.get('/home',(req,res)=> {     //routing for the home page
        res.sendfile(path.resolve(__dirname,'pages/index.html'))
        })

app.get('/about',(req,res)=> {   // routing for the about page
    res.sendfile(path.resolve(__dirname,'pages/about.html'))
})
    app.get('/post',(req,res)=> {   //routing for the post page
        res.sendfile(path.resolve(__dirname,'pages/post.html'))
})    
app.get('/contact',(req,res)=> {   //routing for the contact page
            res.sendfile(path.resolve(__dirname,'pages/contact.html'))
})  

//hello

app.listen(4000,()=> {
console.log('App listening on port 4000');
})
