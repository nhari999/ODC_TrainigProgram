const express = require('express')
const app =express()
const Model = require("./Model/User")
const FormModel = require('./Model/Form');
const cors = require('cors');
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/OrangeDB")
app.get('/msg',(req,res)=>{
    res.send("Welcome To Authentication !");
});
app.post('/insert', async (req, res) => {
    try {
        const { Username, Email, Password, Role } = req.body;
            const existingUser = await Model.findOne({ Email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email Already Exists !' });
        }
        const newUser = new Model({
            Username,
            Email,
            Password,
            Role
        });
      await newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.post('/CreateForm', async (req, res) => {
    try {
      const { name, startDate, reminderDate, coaches } = req.body;  
      const newForm = new FormModel({
        name,
        startDate,
        reminderDate,
        coaches
      });
      await newForm.save();  
      res.status(201).json({ message: "Form data inserted successfully", form: newForm });
    } catch (error) {
      console.error("Error inserting form data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
app.post('/Login' , async (req,res)=>{
    const User = await Model.findOne({
        Email : req.body.Email,
        Password :req.body.Password,
    })
    if(User){
            const token=jwt.sign(
            {
                Email:User.Email,
                Password:User.Password,
            }
            ,"SecretToken")
        return res.json({status:"ok",User:token})
    }
    else{
        return res.json({status:"Error Occured User Not Found !",User:false})
    }

})
const port = 4000;
app.listen(port , ()=>{
    console.log(`Server Is Running On Port ${port}`)
});
