var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeeSchema =  new Schema({
 
  firstname: {
      type :String ,
      required: true,
       trim: true,
       minlength: 1

  },
 lastname : {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  job : {
     type: String,
   
     trim: true,
     minlength: 1
   },
 photo : {
    type: String,
    trim: true,
    minlength: 1
  },
  description : {
    type: String,
 
    trim: true,
    minlength: 1
  }
},{

    collection: 'employees'


});


module.exports = mongoose.model('employeeSchema',employeeSchema);