// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableName, callback) {
    var queryString = "SELECT * FROM ??" + ";";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: function(tableName, values, callback) {
    var queryString = "INSERT INTO ?? SET ?" + ";";

    console.log(queryString);

    connection.query(queryString, [tableName, values], function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  
  updateOne: function(tableName, values, condition, callback) {
    var queryString = "UPDATE ?? SET ? WHERE ?" + ";";

    console.log(queryString);
    connection.query(queryString, [tableName, values, condition], function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;

