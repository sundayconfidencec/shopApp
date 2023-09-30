
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const cors = require("cors");

const server = express();
// const handleError = (req,res,next)=>{
//     console.log("Error page executed");
//     next();
// }

server.use(bodyParser.json());
server.use(cors());

server.use(userRoutes);
//server.get("*",handleError,(req,res)=>{res.send("404 page")})


mongoose.connect("mongodb+srv://shopApp:234567891@cluster0.6e8egnx.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true}).then(result => {

    server.listen(8082, "localhost",()=>{console.log("server is ready")});
}).catch(err=> console.log(err));