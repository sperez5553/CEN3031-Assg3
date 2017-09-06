/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect('mongodb://sebastian:sebastian@ds129344.mlab.com:29344/sebastian');

var newConnect = mongoose.connection;
newConnect.on("connected", function(){
  console.log("We COnnected");

})

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.find({ name: 'Library West' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({ code: 'CABL' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: '102 Phelps Lab, Gainesville, Florida' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);

  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

//mongoose.disconnect();