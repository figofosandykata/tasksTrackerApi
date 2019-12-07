const mongoose=require('mongoose')
const {url}=require('./server')
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.set('debug', true)

module.exports=mongoose