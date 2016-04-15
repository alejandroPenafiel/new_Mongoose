var newMongoose = require('../models/new_mongoose.server.model.js');

exports.list = function(req, res){
	var query = newMongoose.find();

	query.sort({ createdOn: 'desc'}).limit(12).exec(function(err, results){
		res.render('index', {title: 'New Mongoose - List', notes: results});
	});
};

exports.create = function(req, res){
	var entry = new newMongoose({
		memberName: req.body.memberName,
		project: req.body.project,
		workYesterday: req.body.workYesterday,
		workToday: req.body.workToday,
		impediment: req.body.impediment
	});

	entry.save(function(err){
		if(err){
			var errMsg = 'There is an error in your note';
			res.render('newnote', {title: 'newMongoose - New Note (error)', message: errMsg});
		} else {
			console.log('Note saved!');
			res.redirect(301, '/');
		};
	});

};

exports.getNote = function(req, res){
	res.render('newnote', {title: 'New Mongoose - New Note'});
};