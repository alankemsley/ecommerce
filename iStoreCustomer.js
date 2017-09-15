// Link to Inquirer Node package
var inquirer = require("inquirer");

// Link to MySql Node package
var mysql = require("mysql");

// Establish connection to MySQL
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "iStore"
});

connection.connect(function(err){
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
  displayItems();
	askID();
	askQuantity();
});

// Display all items for sale
var displayItems = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
  });
	connection.end();
};

// Ask shopper the ID of the item they would like to buy
var askID = function() {
	inquirer.prompt([{
		name: "getID",
		message: "\nPlease enter the ID of the item you would like to purchase: ",
	}]).then(function(response) {
		var requestedID = response.getID
		console.log("Item ID " + requestedID + " requested.");
		askQuantity();
	});
};

// Ask shopper how many they would like to buy
var askQuantity = function() {
	inquirer.prompt([{
		name: "getQuantity",
		message: "\nPlease enter the QUANTITY of the item you would like to purchase: ",
	}]).then(function(response) {
		var requestedQuantity = response.getQuantity
		console.log(requestedQuantity + " requested.");
		checkQuantity();
	});
};

// Check if desired quantity is available in stock
var checkQuantity = function() {

};
