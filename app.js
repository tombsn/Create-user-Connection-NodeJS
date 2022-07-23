//Permit to use variable environment
require("dotenv").config();

//--------- Core ------------//
const express = require('express')
const app = express();


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//-------------------------------------Security------------------------------------//
var allowCors = function (req,res,next){
  res.header("Access-Control-Expose-Headers", "Authorization");next();}
app.use(allowCors);
//-------------------------------------Routers-------------------------------------//

//Ping
app.use("/", express.Router().get(
    "/",
    async(req, res) => {
        return res.status(200).json({message : 'server up'});
    })
);

//User
app.use('/', require('./routes/route'))

module.exports = app;