var mongoose = require("mongoose") ; 

mongoose.set('debug' , true) ;
mongoose.connect("YOU DB URL" ,  { useNewUrlParser: true }) ;

mongoose.Promise = Promise ;

module.exports.Todo = require("./todo") ;
