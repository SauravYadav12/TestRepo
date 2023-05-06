const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const empRoute = require('./routes/employee');
const employee = require('./controllers/employee')

app.set('view engine', ejs);
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.get('/', employee.getHome);
app.post('/create', employee.createEmployee);
app.get('/filter', employee.filterEmployee);


mongoose.connect('mongodb+srv://itechsaurav:Saurav_1286@testdbcluster.wjvstc3.mongodb.net/').then(()=>{
    console.log("Succesfully Connected to DB");
}).catch((error)=>{
    console.log(error);
})
app.listen(4000,()=>{
    console.log('server at 4000');
});