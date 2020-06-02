var mongoose= require("mongoose"),
	Staff = require("./models/staff");

var data= [
	{
		name: "Marco Licata",
		img: "https://scontent.fltn2-1.fna.fbcdn.net/v/t1.0-9/13508989_10206507554072033_5510328305140619762_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_ohc=cav7pq6i2GIAX9D1O7J&_nc_ht=scontent.fltn2-1.fna&oh=e716f193cb4de2166f0e501b089a8d4e&oe=5EE7F8DA",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	},
	{
		name: "Massimiliano Licata",
		img: "https://scontent.fltn2-1.fna.fbcdn.net/v/t1.0-1/c0.43.200.200a/1654397_10201435533146407_2107481026_n.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=ybzNUaYYMIkAX_lsyHZ&_nc_ht=scontent.fltn2-1.fna&oh=436058e5c9cbe2555d779df90e263840&oe=5EEAF7E8",
		description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
	},
];

function seedDB(){
	Staff.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
		data.forEach(function(seed){
			Staff.create(seed, function(err, staff){
				if(err){
					console.log(err)
				}else{
					console.log("added staff member");
					staff.save();
				}
			})
		})	
	})
};

module.exports = seedDB