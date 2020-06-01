//jshint esversion:6

const express=require("express");
const app=express();

app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.get("/music",function(req,res){
  res.sendFile(__dirname+"/music.html");
})

app.get("/contact",function(req,res){
  res.sendFile(__dirname+"/contact.html");
})

app.listen(process.env.PORT || 3000,function(){
  console.log("Server started at port 3000");
})
