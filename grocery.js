"use strict";
class Grocery {
    constructor(name, quantity, price, category) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
}
let groceries = [new Grocery('milk', 3, 4.5, 'dairy'), new Grocery('bread', 6, 2, 'bread'), new Grocery('eggs', 11, 3, 'eggs')];
groceries.map(item => {
    document.write('Name: ' + item.name);
    document.write("<br>");
    document.write('Quantity: ' + item.quantity);
    document.write("<br>");
    document.write('Price: ' + item.price);
    document.write("<br>");
    document.write('Category: ' + item.category);
    document.write("<br> <br>");
});
