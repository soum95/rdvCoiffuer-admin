
const multer = require('multer');
const path   = require('path');

/** Storage Engine */
const storageEngine = multer.diskStorage({
  destination: '../frontend/public/uploads',
  filename: function(req, file, fn){
    fn(null,  new Date().getTime().toString()+'-'+file.fieldname+path.extname(file.originalname));
  }
}); 

//init

const upload =  multer({
  storage: storageEngine
}).single('file');




module.exports = upload;

