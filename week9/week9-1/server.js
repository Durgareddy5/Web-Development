const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(cors());
const Student=require('./models/Students');


mongoose.connect('mongodb://127.0.0.1:27017/studentDB123')
.then(()=>console.log('connected'))
.catch((err)=>console.log(err));


app.post('/students', async (req , res)=>{
    try{
       const student=new Student(req.body);
       await student.save();
       console.log('student added');
        res.status(201).json(student);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.get('/students', async (req, res)=>{
    const students=await Student.find();
    console.log(students);
    res.json(students);
});


app.get('/students/:rollno', async (req, res)=>{
    const student=await Student.findOne({roll:req.params.rollno});
    if(!student) return res.status(404).json({message:"No student found"});
    res.json(student);
});

app.put('/students/:rollno', async (req, res)=>{
    const student=await Student.findOneAndUpdate(
        {roll:req.params.rollno},
        req.body,
        {new:true}
    );
    res.json(student);
});

app.delete('/students/:rollno', async (req, res)=>{
    const student=await Student.findOneAndDelete({roll:req.params.rollno});
    res.json({message:"Student Deleted"});
});



app.listen(3000, ()=>console.log('server running on 3000'));