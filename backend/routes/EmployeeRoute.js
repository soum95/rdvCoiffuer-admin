const express = require('express');
const app = express();
const EmployeeRoute = express.Router();
const multer = require('multer');
const parser = require('parser'); 
const path = require('path');
const cloudinary = require("cloudinary");
let Photo= require('../models/photo');

const cloudinaryStorage = require("multer-storage-cloudinary");
// Require Post model in our routes module
let Employee = require('../models/Employee');


cloudinary.config({ 
  cloud_name: "rdvcoiff", 
  api_key: "233929268798847", 
  api_secret: "y5-YAjgUSeTh2gv4qvxfswsdH3I"
});



let fileStoredName = '';
// Require Post model <in our routes module

// Defined store route
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
      cb(null, '../frontend/public/uploads')
	} 
})
var upload = multer({
	storage: storage, 
	fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
})

// route file 
EmployeeRoute.route('/file')
	.post(upload.single('file'), function (req, res) {
 		cloudinary.config({ 
  cloud_name: "rdvcoiff", 
  api_key: "233929268798847", 
  api_secret: "y5-YAjgUSeTh2gv4qvxfswsdH3I"
});

		  cloudinary.uploader.upload(req.file.path, function(result) { 
			  var photo = new Photo();
				photo.name = req.body.name;
				photo.picture = result.url;
		 	  photo.save(function(err, photos){
				if(err) 
				  res.send(err);
				res.json({ message: 'photographed place created.'});
				console.log("d",photos.picture);
				fileStoredName= photos.picture; 
			  }); })

	})
EmployeeRoute.route('/add').post(function (req, res) {
	const a ={
	firstname:req.body.firstname,
	lastname:req.body.lastname,
	job:req.body.job,
	description:req.body.description,
	img:fileStoredName
	}
	let employee = new Employee(a);
	employee.save()
		.then(employee => {
			res.status(200).json(employee);
		})
		.catch(err => {
			res.status(400).send("unable to save to database");
		});
});
 
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
  