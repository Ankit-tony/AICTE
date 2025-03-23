const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        require : true,
        type : String
    },
    email : {
        require : true,
        type : String,
        unique : true
    },
    password : {
        require : true,
        type : String
    }
})

const user=mongoose.model("Users",userSchema);

module.exports = user;