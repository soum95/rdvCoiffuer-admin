var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let photoSchema =  new Schema({
 
 
  name: { 
    type: String 
  },
  picture : { 
    type: String 
  } 

},{
    collection: 'photos'
});


module.exports = mongoose.model('photo',photoSchema);