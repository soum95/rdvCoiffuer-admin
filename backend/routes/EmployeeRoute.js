const express = require('express');
const app = express();
const EmployeeRoute = express.Router();
const multer = require('multer');
const parser = require('parser');
const cloudinary = require("cloudinary");
var Photo= require('../models/photos');
const cloudinaryStorage = require("multer-storage-cloudinary");
// Require Post model in our routes module
let Employee = require('../models/employeeSchema');

var upload = multer({ dest : '../frontend/public/uploads'}).single('photo');
EmployeeRoute.route('/api/photo').post( function(req,res){
	upload(req, res, function(err){		
		if(err){ return res.end("Error")};
		console.log(req);
		res.end("file uploaded")

		cloudinary.config({ 
	      cloud_name: "rdvcoiff", 
	      api_key: "233929268798847", 
	      api_secret: "y5-YAjgUSeTh2gv4qvxfswsdH3I"
	    });

    cloudinary.uploader.upload(req.file.path, function(result) { 
      console.log(result.url);
        //create an urembo product
        var Employee = new Employee();
        
          Employee.photo = result.url;
          
        //save the product and check for errors
        Employee.save(function(err, employees){
          if(err) 
            res.send(err);
          res.json({ message: 'photographed place created.'});
          console.log(employees);
         
        });
    });

   });	
});

EmployeeRoute.route('api/photo').get( function(req, res){
     Employee.find(function( err, employees){
     	if(err)
     		res.send(err);
     	res.json(employees);
     });
});

EmployeeRoute.route('/add').post(function (req, res) {
    let employee = new Employee(req.body);
   employee.save()
      .then(employee=> {
      res.status(200).json(employee);
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
  
  // Defined get data(index or listing) route
 EmployeeRoute.route('/')
     .get(function (req, res) {
      Employee.find(function (err, employees){
      if(err){
        console.log(err);
      }
      else {
        res.json(employees);
      }
    });
  });
  EmployeeRoute.route('/delete/:id').get(function (req, res) {
    Employee.findByIdAndRemove({_id: req.params.id}, function(err, employee){
        if(err) res.json(err);
        else res.json(req.params.id);
    });
});






  
  
  
  module.exports = EmployeeRoute;
  // EmployeeRoute.route('/api/photo').post(parser.single("image"), (req, res) => {
  //   console.log(req.file) // to see what is returned to you
  //   const image = {};
  //   image.url = req.file.url;
  //   image.id = req.file.public_id;
  //   Image.create(image) // save image information in database
  //     .then(newImage => res.json(newImage))
  //     .catch(err => console.log(err));
  // });