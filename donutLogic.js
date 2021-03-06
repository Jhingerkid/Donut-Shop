var revenue = 0;

class donutType {
	type;
	quantity;
	price;
	constructor(type,quantity,price){
		this.type = type;
		this.quantity = quantity;
		this.price = price;
	}
}

var inventory = [
	new donutType('Glazed', 10, 1),
	new donutType('Jelly', 10, 1.5),
	new donutType('Cream', 10, 2),
	new donutType('Maple', 10, 4),
	new donutType('Apple', 10, 3)
]

function printInventory() {
	let invReport = [];
	// make line items out of each object in the inventory
	inventory.forEach(element => {invReport.push(element.type + " Donuts - " + element.quantity + " in stock, for $" + element.price.toFixed(2) + " each \n")});
	alert(invReport.join(''));
}

function totalRevenue() {
	alert("The shop has made a total of $" + revenue.toFixed(2));
}

function newDonut() {
	let type = prompt("What kind of new donut are you adding?", ""); // gather info about the donut
	let price = prompt("How much does it cost?", "");
	price = Number(price); // turn the user input price in to an integer
	let donut = new donutType(type, 0, price);
	inventory.push(donut);
}

function addInventory() {
	let currentTypes = [];
	let number = 0;
	inventory.forEach(element => {number++; currentTypes.push(number + "). " + element.type + "\n")}); // print the current donut types
	let addType = prompt("Which type would you like to add to? \n" + currentTypes.join(''), ''); // display the line items to the user and gather input
	let quantity = prompt("How many?", ''); // gather a quantity
	inventory[addType-1].quantity = inventory[addType-1].quantity + Number(quantity);
}

function placeOrder() {
	let ordering = true;
	while (ordering){
		let currentTypes = [];
		let number = 0;
		inventory.forEach(element => {number++; currentTypes.push(number + "). " + element.type + "\n")}); // print the current donut types
		let addType = prompt("Which type would you like to order? \n" + currentTypes.join(''), ''); // display the line items to the user and gather input
		let quantity = prompt("How many?", ''); // gather a quantity
		if (inventory[addType-1].quantity - Number(quantity) < 0){
			alert("You don't have that many donuts to sell!");
			return;
		}
		inventory[addType-1].quantity = inventory[addType-1].quantity - Number(quantity); // take away the ordered donuts
		revenue = revenue + inventory[addType-1].price*quantity;
		let cont = prompt("Would you like to order more? \n 1). Yes \n 2). No");
		if (Number(cont) === 2){
			ordering = false;
		}
	}
}

function getRefund() {
	let currentTypes = [];
	let number = 0;
	inventory.forEach(element => {number++; currentTypes.push(number + "). " + element.type + "\n")}); // construct a list of the current donuts
	let addType = prompt("Which type would you like to refund? \n" + currentTypes.join(''), ''); // display the line items to the user and gather input
	let quantity = prompt("How many?", ''); // gather a quantity
	revenue = revenue - inventory[addType-1].price*quantity;
}

function changeDonutPrice() {
	let currentTypes = [];
	let number = 0;
	inventory.forEach(element => {number++; currentTypes.push(number + "). " + element.type + "\n")}); // print the current donut types
	let addType = prompt("Which type would you like to change the price of? \n" + currentTypes.join(''), ''); // display the line items to the user and gather input
	let price = prompt(inventory[addType-1].type + " donuts cost $" + inventory[addType-1].price.toFixed(2) + ", what should it change to?", ''); // gather a new price
	inventory[addType-1].price = Number(price);
}