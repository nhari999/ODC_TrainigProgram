const express = require('express')
const app =express()
const Model = require("./Model/User")
const cors = require('cors');
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/OrangeDBVersion0")
app.get('/msg',(req,res)=>{
    res.send("Welcome To Authentication !");
});
const jwt = require('jsonwebtoken');
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'SecretToken');
    req.user = decoded; // Set user object in request for further processing
    next(); // Proceed to next middleware
  } catch (error) {
    return res.status(403).json({ error: 'Unauthorized: Invalid token' });
  }
};

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Authenticated user', user: req.user });
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

app.get('/statistics', authenticateToken, async (req, res) => {
    try {
      // Fetch data from the 'statistic' collection
      const statistics = await Statistic.find({}, { _id: 0, year: 1, userGain: 1 });
      
      // If data found, send it as response
      if (statistics.length > 0) {
        return res.status(200).json({ statistics });
      } else {
        return res.status(404).json({ error: 'No statistics found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

const port = 4000;
app.listen(port , ()=>{
    console.log(`Server Is Running On Port ${port}`)
});
