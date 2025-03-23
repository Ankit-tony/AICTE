const express = require("express");
const cors = require("cors");
const connect = require("./connect.js");
const app = express();
const signup = require("./routes/signup.js");
const login = require("./routes/login.js");
app.use(express.json());
app.use(cors());
connect();

app.use("/signup",signup);
app.use("/login",login);

app.listen(4000,()=>{
    console.log("Hello world");
});