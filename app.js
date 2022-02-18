const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; 

//to encode the data passed through url using POST request
app.use(express.urlencoded({ extended: true }));

//To set the view engine and hence access the html(stored as ejs files) pages stored in the views folder with ease
app.set("view engine","ejs");


var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    //#region  
    password: "2000",
    //#endregion
    database:"auction",
});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');   
});

/////////// Index page display
app.get('/',(req, res)=>{
    res.render('index');
});

/////////// Displaying the data
app.get('/display',(req, res)=>{
    con.connect(function(err) {
        if (err) throw err;

        con.query("SELECT * FROM auction.seller", function (err, result, fields) {
          if (err) throw err;
    
          res.render('display',{data:result});
        });
      });
});

///////////  adding the data
app.get('/add', (req, res) => {
    res.render('add');
})

app.post('/add', (req, res) => {
    con.connect(function(err){
        if(err) throw err;
        console.log("inside add");
        let data = {
            s_id : req.body.idid,
            username : req.body.fid,
            s_name : req.body.lid,
            password : req.body.addid,
            email : req.body.add2id,
            phone_no : req.body.add3id,
            company_name : req.body.add4id,
        }
        var sql = `INSERT INTO seller SET ? `;

        
        console.log(data);

        con.query(sql, [data], function (err, result) {  
            if (err) throw err;  
            console.log("Number of records inserted: " + result.affectedRows)});  
        

    res.redirect('display');
    });
});


app.get('/update', (req, res) => {

    con.connect(function(err){
        if(err) throw err;
        console.log("inside update");
        var sql = "UPDATE `auction`.`seller` SET `s_name` = 'Jzon', `username` = 'jargon', `company_name` = 'BTMbtm', WHERE (`s_id` = '101');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
          });
    })
    res.redirect('display');
});

app.get('/delete', (req, res) => {

    con.connect(function(err){
        if(err) throw err;
        console.log("inside update");
        var sql = "DELETE FROM `auction`.`seller` WHERE (`s_id` = '104');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
          });
    })
    res.redirect('display');
});

app.get('/datajson',(req,res)=>{
    con.connect(function(err) {
        if (err) throw err;

        con.query("SELECT * FROM auction.seller", function (err, result, fields) {
          if (err) throw err;
    
          res.send(result);
        });
      });
})


/////////////// listening to port /////////////////////////////
app.listen(port, () => {
    console.log(`LAU app listening on port ${port}`);
});