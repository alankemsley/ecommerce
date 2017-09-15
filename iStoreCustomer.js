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
});

// Display all items for sale
var displayItems = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log("*** PRODUCT LIST ***\n");
		for (i = 0; i < res.length; i++) {
			console.log("Product ID: " + res[i].item_id);
			console.log("Name: " + res[i].product_name);
			console.log("Price: " + res[i].price);
			console.log("-------------------------------------------------");
		}
		askProduct();
  });
};

// Ask shopper the ID and quantity of the item they would like to buy
var askProduct = function() {
	inquirer.prompt([
		{
			name: "getID",
			message: "\nWhat would you like to purchase? Please enter the product ID: ",
		},
		{
			name: "getQuantity",
			message: "\nHow many would you would like to purchase? ",
		}
	]).then(function(response) {
		requestedID = parseInt(response.getID);
		requestedQuantity = parseInt(response.getQuantity);
		checkInventory(requestedID, requestedQuantity);
	});
};

// Check if desired quantity is available in stock
var checkInventory = function(productID, quantityRequested) {
	connection.query("SELECT * FROM products WHERE ?", { item_id: productID }, function(err, res) {
    currentInventory = res[0].stock_quantity;
    if (quantityRequested > currentInventory) {
      console.log("Insufficient stock!");
    } else {
      newInventory = currentInventory - quantityRequested;
      updateInventory(productID, newInventory);
      console.log("Your order has been placed!");
    }
  });
};

// Update the inventory
var updateInventory = function(productID, newInventory) {
  connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: newInventory }, { item_id: productID }], function(err, res) {
    connection.end();
  });
}
