const mongoose = require('mongoose')

const User = new mongoose.Schema({
    Username: { type: String, require: true },
    Email: { type: String, require: true ,unique:true},
    Password: { type: String, require: true },
    Role: { type: String, require: true },
},
    { collection: "User" }
)
const Model = mongoose.model("User",User);
module.exports = Model;


