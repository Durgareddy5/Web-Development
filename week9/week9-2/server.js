const mongoose = require("mongoose");
const User = require("./models/User");
const express=require('express');
const app=express();


async function run() {
  try {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb1");
    console.log("Connected to MongoDB");


    
    const user = new User({
      name: "Durga Prasad Reddy",
      email: "durga@example.com",
      addresses: [
        { street: "123 Main St", city: "New York", country: "USA" },
        { street: "456 Elm St", city: "Boston", country: "USA" }
      ]
    });


    
    await user.save();
    console.log("User saved successfully!");


    
    const users = await User.find();
    console.log("All Users:", users);


  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}



run();


app.listen(5050, ()=>{
    console.log('Server running on port 5050');
})