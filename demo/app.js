var Bike = Backbone.Model.extend({
  defaults: {
    name: "",
    age: 0
  }
});

var bike = new Bike({
  name: "Wheely Thing"
});


























// Demo

// Choose a real world object
// Create a model
// extend - prototypical inheritance
// Instantiate it
// Initialize with hello world
// id / cid - used with collections

// set and get /
// attributes hash
// clear

// defaults

// Underscore methods:
// keys
// values
// pairs
// has
// clone



// var Shark = Backbone.Model.extend({
//   initialize: function () {
//     this.on("change:name", function (model) {
//       alert("Shark is now called " + model.get("name"));
//     });
//   }
// });
