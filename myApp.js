let express = require('express');
let app = express();



app.get('/',function(req,res){

  

  res.sendFile(__dirname + "/views/index.html");
  
  })


   
  app.use('/public', express.static(__dirname +   "/public"));
  app.get("/json",function(req,res){

    
    if (process.env.VAR_NAME === "uppercase") {
  response = "Hello World".toUpperCase();
} else {
  response = "Hello World";
}
    
  })
  

































 module.exports = app;
