var mongoose= require("mongoose");

var staffSchema= new mongoose.Schema({
	name: String,
	img: String,
	description: String
})

var Staff = mongoose.model("Staff", staffSchema);

module.exports= Staff;