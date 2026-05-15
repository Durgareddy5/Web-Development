const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./models/User');


async function run(){
    try{
      await mongoose.connect("mongodb://127.0.0.1:27017/testdb1");

      console.log("MongoDB Connected");

      const user=new User({
        name:"Durga",
        email:"durga@example.com",
        addresses:[
        { street: "123 Main St", city: "New York", country: "USA" },
        { street: "456 Elm St", city: "Boston", country: "USA" }
        ]
      });

      await user.save();
      console.log('User created Successfully');

      const users=await User.find();
      console.log("All Users: ", users);

    }catch(err){
      console.log(err);
    }finally{
      await mongoose.disconnect();
      console.log("MongoDB disconnected");
    }
}

run();


