var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema =  new Schema({
 
  name: {
      type :String ,
      required: true,
       minlength: 1

  }
});


module.exports = mongoose.model('photos',photoSchema);