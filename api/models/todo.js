var mongoose = require("mongoose") ;

var todoSchema = new mongoose.Schema({
    type : { 
        type : String ,
        required : "Name cannot be blank"
    } , 
    completed : { 
        type : Boolean ,
        default : false 
    }
})
var Todo = mongoose.model('Todo' , todoSchema) ;

module.exports = Todo ; 