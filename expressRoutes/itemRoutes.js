// itemRoutes.js - These are all the routes to get the items from my database

var express = require('express');
var app = express();
var itemRoutes = express.Router();

// Require the item model in our routes module
var Item = require('../models/Item');

// Define the route to add items.
itemRoutes.route('/add').post(function (req, res) {
  var item = new Item(req.body); //adds entire body of item data
      item.save()
    .then(item => {
    res.status(200).json({'item': 'Item added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined the route to get items
itemRoutes.route('/').get(function (req, res) { //gets all of the items and displays them 
  Item.find(function (err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});

// Define the route to edit items
itemRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){ //edits each item depending on what you put in
      res.json(item);
  });
});
//get items by id
itemRoutes.route('/get/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){ // gets each individual item when clicked
      res.json(item);
  });
});


//  Define the route to update items
itemRoutes.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.kitten = req.body.kitten; //find item by id and then updates each part 
      item.price = req.body.price;
      item.type = req.body.type;
      item.gender = req.body.gender;

      item.save().then(item => { //- saves it to the item model
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Define the delete route
itemRoutes.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id}, function(err, item){ //removes item by id after finding it first
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
//define select route?


module.exports = itemRoutes;