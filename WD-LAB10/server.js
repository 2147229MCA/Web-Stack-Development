const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const vehicles = require("./AuctionV.json");


const app = express();
const port = 3000; 

app.use(express.urlencoded({ extended: true }));


var load = () => JSON.parse(fs.readFileSync('AuctionV.json'));

app.set("view engine","ejs");

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/vlist', (req, res) => {
  res.render('testangular');
})

app.post('/', (req, res) => {
  try{
    console.log("inside add");
    console.log(req.body);
    let newvehicle = {
      "V_id": req.body.vid,
        "reg_no": req.body.regid,
        "carmake": req.body.carid,
        "model": req.body.modelid,
        "type": req.body.typeid,
        "fueltype": req.body.fuelid,
        "purchase_year": req.body.yearid,
        "past_services": req.body.pastid
    }
    console.log(newvehicle);


    vehicles['Vehicles'].push(newvehicle);
    // STEP 3: Writing to a file
    fs.writeFile("AuctionV.json", JSON.stringify(vehicles,null,4), err => { 

    if(err){
        console.error(err);
    }
    console.log(vehicles)
    console.log("Done writing"); // Success
    });

    res.send("successfuly added!")

  }catch{
    res.send("Error in adding the data!")
  }
})

app.get('/vehicles', (req, res) => {
  res.send(load());
})


app.listen(port, () => {
  console.log(`LAU app listening on port ${port}`)
});


