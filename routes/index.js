var express = require('express');
var router = express.Router();
var newMongooseCtrl = require('../controllers/new_mongoose.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  return newMongooseCtrl.list(req,res);
});

router.get('/newnote', function(req, res){
	return newMongooseCtrl.getNote(req, res);
});

router.post('/newnote', function(req, res){
	return newMongooseCtrl.create(req, res);
});

module.exports = router;
