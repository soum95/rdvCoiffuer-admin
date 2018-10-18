var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let serviceSchema =  new Schema({
 
  name: {
      type :String ,
      required: true,
       
       minlength: 1

  },
 description : {
    type: String,
    required: true,

    minlength: 1
  },
  price : {
     type: String,
     required: true,
   
     minlength: 1
   },
 path : {
    type: String,
    required: false,
    
    
  }},{

    collection: 'services'


});


module.exports = mongoose.model('serviceSchema',serviceSchema);