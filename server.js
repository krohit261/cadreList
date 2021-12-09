const express = require('express');
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 8000;
const jsonData = require('./data.json');
console.log(jsonData['DETAILS'][0])

app.use(express.json());
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));



app.get('/',(req,res) => {
  var data = {
    "DETAILS":[]
  }

  for(i=0;i<jsonData["DETAILS"].length;i++){
    if(jsonData["DETAILS"][i]["Distname"] == req.query.dist && jsonData["DETAILS"][i]["Tchcat_Desc"] == req.query.desig){
      data["DETAILS"].push(jsonData["DETAILS"][i]);
    }
  }

  res.send(data);
})

app.listen(PORT, ()=>{
  console.log('listening on prot 8000');
})