var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
	function(val){
		return (val.length > 0 && val.toLocaleLowerCase() != 'none')
	},
	'Select a valid member name.' ];

var requiredStringValidator = [
	function(val){
		var testVal = val.trim();
		return (testVal.length > 0)
	},
	'{PATH} cannot be empty'
];

var newMongooseSchema = new Schema({
	memberName: {
		type: String,
		required: true,
		validate: memberNameValidator
	},
	project: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	workYesterday: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	workToday: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	impediment: {
		type: String,
		required: true,
		default: 'none'
	},
	createdOn: { type: Date, default: Date.now }
});

var noIdSchema = new Schema({ name: String }, { id: false });

module.exports = mongoose.model('NewMongoose', newMongooseSchema);