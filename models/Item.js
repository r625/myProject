var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for kittens
var newCat = new Schema({
  kitten : {type: String},
    type : {type: String},
    gender : {type: String},
    price : {type: String}
},{
    collection: 'kittens'
});

module.exports = mongoose.model('Item', newCat); //exports item model