let express = require('express');
let app = express();
let dotenv = require('dotenv').config();


app.get('/', function(req, res) {



  res.sendFile(__dirname + "/views/index.html");

})



app.use('/public', express.static(__dirname + "/public"));
app.get("/json", function(req, res) {
  
var  message = process.env['VAR_MESSAGE_STYLE']
if (   message == "uppercase"){
    res.json = ({"message": "HELLO JSON"});
  
}else{
  res.json = ({"message": "Hello json"});
}
  

})
module.exports =app;











































module.exports = app;
