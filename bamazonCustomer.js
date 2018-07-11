var db = require("./db");

var mysql = require("mysql");
var command = process.argv[2];
var inquirer = require('inquirer');

var connection = db.login();

connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Done");
    itemList();
});

function itemList() {

    connection.query('SELECT * FROM products', function(err, res){

        for (var i = 0; i < res.length; i++) {
            console.log(res[i].product_name);
        }

        customerChoice();

}) 
        
};




// prompt for info about the item being ordered
function customerChoice() {
    inquirer.prompt([
        {  
        name: "action",
        type: "input",
        message: "What is the ID of the product would you like to order?",

        },

        {
        name: "quantity",
        type: "input",
        message: "How many units of the product would you like to buy?"

        }

    ]).then(function(answer) {
        console.log(answer)
        var query = "SELECT * FROM products where product_name = ?";
        connection.query(query, [ answer.action ], function(err, res) {
            console.log(res);
        });
      });
    };

        

