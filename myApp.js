let express = require('express');
let app = express();



app.get('/',function(req,res){

  

  res.sendFile(__dirname + "/views/index.html");
  
  })


   
  app.use('/public', express.static(__dirname +   "/public"));
  app.get("/json",function(req,res){

      app.use('/env', express.static(__dirname +   "/env"));
    var a = process.env.MESSAGE_STYLE;
    if(a == uppercase){
       res.json({"message": "HELLO JSON"});
    }else{
           res.json({"message": "Hello json"});
      
    }
    
  })
  

































 module.exports = app;
