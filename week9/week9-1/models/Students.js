const mongoose=require('mongoose')


const studentschema=new mongoose.Schema({
    roll:{
        type:String,
        required:true,
        unique:true
    },
    name:String,
    className:String
});

module.exports=mongoose.model('Student', studentschema);


