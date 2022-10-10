const mongoose = require ('mongoose')
const Post = require('./database/models/Post')
mongoose.connect('mongodb+srv://shahanarshad86:powersoft19@shahan.zyyftyn.mongodb.net/node-js-test-blog') //node-js-test-blog will be a new database which mongodb gonna create for us.




/*
Post.create({    // Post represents the collection in our mongo db. it is an entity.  create is a asyncrohonous function

title: 'My Third blog post',
description: 'Blog2 Post description',
content: 'Shahan content.'

},(error,post)=> {   //this is a call back funtion, gets executed after document for the collection post is created in mongo db.

console.log(error,post)   

})*/


Post.find({

},(error,posts)=> { 
console.log(error,posts)
})


/*Post.findById('634359aedd5a8e161b90267f', (error,posts)=>{
console.log(error,posts)
}
)*/

 /*   Post.findByIdAndUpdate("634359aedd5a8e161b90267f",{
    title: 'this is now changed' 
    },(error,post)=>{console.log(error,post)
    })
*/
