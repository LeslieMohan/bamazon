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
    executeCommand(command, productsObj, connection, function() {
        console.log("Done");
    })
});

//show products data and display in console


// prompt for info about the item being ordered
function customerChoice() {
    inquirer.prompt({
          
        name: "action",
        type: "rawlist",
        message: "What product would you like to order?",
        choices: [
          "skates",
          "hammer",
          "notebook",
          "blouse",
          "Neo-Citron",
          "sandals",
          "iphone",
          "fridge",
          "coat",
          "stroller"
        ]},

        {
        name: "action",
        type: "rawlist",
        message: "How many would you like to order?"

        }

    ).then(function(answer) {
        var query = "SELECT product_name from where ?";
        connection.query(query, { product
            _name: answer.product_name }, function(err, res) {
        for (var i = 0; i < products.length; i++) {
          console.log(");
        });
        customerChoice();
      });
    });

        function(err) {
            if (err) throw err;
            console.log("");
            // re-prompt the user if they want to order another item
            start();
        }
};


function executeCommand(command, productsObj, connection, callback)
{
    switch (command)
    {
        case "add": 
            connection.query(`INSERT INTO products (product_name, department_name, price, stock_quantity) 
            values (?, ?, ?, ?)`, [ 
                productsObj.product_name, 
                productsObj.department_name, 
                productsObj.price, 
                productsObj.stock_quantity ]);
            break;
        case "update": 
            // do something
            connection.query(`UPDATE FROM products WHERE stock_quantity = ?`);
            break;
    }

    callback();
}

