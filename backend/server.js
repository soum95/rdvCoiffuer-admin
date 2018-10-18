// 
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    const app = express();
    var config= require('./db');
    const mongoose = require('mongoose');
    const users = require('./routes/UserRoute'); 
    const passport = require('passport');
const serviceroutes = require('./routes/ServiceRoute');
const employeeroutes = require('./routes/EmployeeRoute');
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);
app.use(passport.initialize());
require('./passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));    
app.use(bodyParser.json());
    app.use(cors());
    app.use('/users', users);
   

app.use('/services', serviceroutes);
app.use('/employees', employeeroutes);
const port = process.env.PORT || 5000;
    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });