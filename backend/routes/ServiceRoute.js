const express = require('express');
const app = express();
const ServiceRoute = express.Router();
let Service = require('../models/serviceSchema');

// Defined store route
ServiceRoute.route('/add').post(function (req, res) {
  let service = new Service(req.body);
  service.save()
    .then(service => {
    res.status(200).json(service);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
ServiceRoute.route('/').get(function (req, res) {
    Service.find(function (err, services){
    if(err){
      console.log(err);
    }
    else {
      res.json(services);
    }
  });
});

// Defined delete | remove | destroy route
ServiceRoute.route('/delete/:id').get(function (req, res) {
    Service.findByIdAndRemove({_id: req.params.id}, function(err, service){
        if(err) res.json(err);
        else res.json(req.params.id);
    });
});

module.exports = ServiceRoute;
