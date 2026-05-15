const mongoose =require('mongoose');
const {Schema, model}=mongoose;

const studentSchema=new Schema({
    roll:{type:String, required:true, unique:true},
    name:String,
    className:String
});

const Student=model('Student', studentSchema);


module.exports=Student;