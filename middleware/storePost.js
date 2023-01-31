module.exports=(req,res,next)=>{

    if(!(req.files && req.files.image)||!req.body.username||!req.body.title ||!req.body.subtitle || !req.body.content)
    {
        return res.redirect('/post/new')
    }
    
    next()  //this function is called to tell express to move to handle browser request.
    




}