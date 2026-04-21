const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/studentDemo")
   .then(()=>console.log("MongoDB Connnected"))
   .catch(err=>console.log(err));


const Student=require('./models/Students');

app.post("/students", async (req, res)=>{
    try{
        const student=new Student(req.body);
        await student.save();
        res.status(201).json(student);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

app.get('/students/', async(req, res)=>{
    const students=await Student.find();
    res.json(students);
});

app.get('/students/:roll', async(req, res) => {
     const student=await Student.findOne({roll:req.params.roll});
     if(!student) return res.status(404).json({message:"Not Found"});
     res.json(student);
});

app.put('/students/:roll', async(req, res)=>{
    const student=await Student.findOneAndUpdate(
        {roll:req.params.roll},
        req.body,
        {new:true}
    );
    res.json(student);
});


app.delete("/students/:roll", async(req, res)=>{
    await Student.findOneAndDelete({roll:req.params.roll});
    res.json({message:"Student Deleted"});
});

app.listen(5050, ()=>{
    console.log("Server running on port 5050");
});

