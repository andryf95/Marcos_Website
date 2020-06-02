require('dotenv').config();

var express = require("express");
var app = express();
var mongoose= require("mongoose"),
	bodyParser= require("body-parser"),
	Staff= require("./models/staff"),
	seedDB = require("./seeds");
var NodeGeocoder = require('node-geocoder');
 
var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null
};
 
var geocoder = NodeGeocoder(options);


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

var url= process.env.DATABASEURL
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() =>{
	console.log("Connected to DB");
}).catch(err =>{
	console.log("ERROR:", err.message);
});

//seedDB();

app.get("/", function(req,res){
	res.render("it/landing");
})
app.get("/eng", function(req,res){
	res.render("eng/landing");
})

app.get("/staff", function(req, res){
	Staff.find({}, function(err, staff){
		if(err){
			console.log(err);
		}else{
			res.render("it/staff", {staff: staff})
		}
	})
})
app.get("/eng/staff", function(req, res){
	Staff.find({}, function(err, staff){
		if(err){
			console.log(err);
		}else{
			res.render("eng/staff", {staff: staff})
		}
	})
})

app.get("/staff/:id", function(req, res){
	Staff.findById(req.params.id, function(err, foundStaff){
		if(err) {
			console.log(err);
		}else{
			res.render("it/show", {staff: foundStaff})
		}
	})
})
app.get("/eng/staff/:id", function(req, res){
	Staff.findById(req.params.id, function(err, foundStaff){
		if(err) {
			console.log(err);
		}else{
			res.render("eng/show", {staff: foundStaff})
		}
	})
})
app.get("/booking", function(req, res){
	res.render("it/booking");
})
app.post("/booking", function(req, res){
	res.send("QUESTA PAGINA ANCORA DEVE ESSERE AGGIORNATA CON L'EMAIL DELLO STUDIO.");
	
})
app.get("/eng/booking", function(req, res){
	res.render("eng/booking");
})
app.post("/eng/booking", function(req, res){
	res.send("THIS PAGE NEEDS TO BE UPDATED WITH THE EMAIL OF THE OFFICE. please go back")
})
app.get("/services", function(req, res){
	res.render("it/services");
})

app.get("/eng/services", function(req, res){
	res.render("eng/services");
})

app.get("/contacts", function(req, res){
	res.render("it/contact")
})

app.get("/eng/contacts", function(req, res){
	res.render("eng/contact")
})

var port = process.env.PORT || 3500;
app.listen(port, function () {
  console.log("Server Has Started!");
});