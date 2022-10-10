

const express = require("express")

const expressEdge = require('express-edge');
const path = require("path")
const app= new express()


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shahanarshad86:powersoft19@shahan.zyyftyn.mongodb.net/test')





app.use(express.static('public'))
app.use(expressEdge.engine)
//app.set('views','${__dirname}/views')
//app.use(express.static(path.join(__dirname + '../public')));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');

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

app.get('/home',(req,res)=>{

res.render('index')


})


   app.get('/new',(req,res)=>{   //will route to create.edge file if request comes
    res.render('create')
    } 
    )


    app.get('/index',(_req,res)=>{

        res.render('index')
        
        
        })


app.get('/about',(req,res)=> {   // routing for the about page
//   res.sendfile(path.resolve(__dirname,'pages/about.html'))
res.render('about')
})
    app.get('/post',(req,res)=> {   //routing for the post page
       res.render('post')
})    
app.get('/contact',(req,res)=> {   //routing for the contact page
           // res.sendfile(path.resolve(__dirname,'pages/contact.html'))
           res.render('contact')
})  

//hello   
//this is test commit;
app.listen(4000,()=> {
console.log('App listening on port 4000');
})
