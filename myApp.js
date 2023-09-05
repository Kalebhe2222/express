let express = require('express');
let app = express();



app.get('/',function(req,res){

  

  res.sendFile(__dirname + "/views/index.html");
  
  })


   
  app.use('/public', express.static(__dirname +   "/public"));
  app.get("/json",function(req,res){

    
       app.use('/process.env.VAR_MESSAGE_STYLE', express.static(__dirname +   "/process.env.VAR_MESSAGE_STYLE"));
    if( process.env.VAR_MESSAGE_STYLE == "uppercase"){
       res.json({"message": "HELLO JSON"});
    }else{
           res.json({"message": "Hello json"});
      
    }
    
  })
  

































 module.exports = app;
