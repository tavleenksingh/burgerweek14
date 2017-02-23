// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgerData = {
  selectAll: function(callback) {
    return orm.selectAll("burgers14", function(res) {
      callback(res);
    });
  },
  // Here, we are going to be creating the insertOne function that fires when it hears a request from burgers_controller.js on this method. Just like before, we are going to be inserting one value, which is the burger_name, and we are going to set it up for a callBack to send that data back, once it hears from the ORM.js file. 
    insertOne: function(burger_name, callback){
        //Here, we are going to pass in the table name, and pass in the column name, and the value that we are trying to pass in. In this case, we are passing in the burger_name column, and also adding the value of what burger_name is. 
        return orm.insertOne("burgers14", {burger_name: burger_name}, function(res){
            callback(res);
        });
    },

    //Here, we are going to be creating the updateOne function that fires when it hears a request from burgers_controller.js on this method. Just like before, we are going to be inserting one parameter, which is the ID, and we are going to set it up for a callBack to send that data back, once it hears from the ORM.js file. 
    updateOne: function(id, callback){
        //Here, we are going to pass in the table name, set the value of devoured to true by passing in two values, the column name, and the value itself, and we are also passing in the 
        return orm.updateOne("burgers14", {devoured: true}, {id: id}, function(res){
            callback(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgerData;