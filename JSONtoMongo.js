'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

var listingData;
/* Connect to your database */
mongoose.connect(config.db.uri);

var newConnect = mongoose.connection;
newConnect.on("connected", function(){
  console.log("We COnnected");

});

var listEntries = require('./listings.json').entries;  
  //listingData = data.entries;
  //if(err) throw err;
  console.log(listEntries);

  listEntries.forEach(function(listEntry){
    new Listing(listEntry).save(function(err){
        if(err){
          throw err;
        }
        console.log("ADDED");  
    })
  });

  /*for(var i = 0; i < listingData[i].length; i++)
  {
    var coordinates = undefined;
    var address = undefined;
    if(listingData[i].coordinates) coordinates = listingData[i].coordinates;
    if(listingData[i].address) address = listingData[i].address;
 
    var listing = new Listing({code: listingData.entries[i].code, name: listingData.entries[i].name, coordinates: coordinates, address: address});
    
    listing.save(function(err) {
      if (err) throw err; 
    });
  }*/

//mongoose.disconnect();
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */