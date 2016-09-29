var products = [
    { name: 'Cheese', price: 7.00 },
    { name: 'Milk', price: 3.00 },
    { name: 'Wine', price: 97.30 },
    { name: 'Grapes', price: 4.00 }
];
var expensiveProducts = products.filter(function (product) { return product.price > 5.00; });
var criteria = function (product) { return product.price > 5.00; };
var expensiveProducts1 = products.filter(criteria);
var total = products.reduce(function (s, c) {
    return s + c.price;
}, 0);
addListItem('template literals', 'All about temlate literals\ncool!');
var message = "This is a long message that\nwraps across multiple lines. You could not\ndo this without using a template literal.";
addListItem("randome message", message);
function addListItem(msg, msg2) {
    var ul = document.getElementById('ul');
    var div = document.getElementById("div");
    var p = document.createElement('div');
    var li = document.createElement('LI');
    var text = li.innerHTML = msg;
    var ptext = p.innerHTML = msg2;
    ul.appendChild(li);
    div.appendChild(p);
}
var Product = (function () {
    function Product() {
    }
    Product.prototype.calculateTax = function () {
        return this.price * 0.08;
    };
    return Product;
}());
;
var product1 = new Product();
product1.name = "Eggs";
product1.price = 1.25;
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var craig = new Person("Craig", "Rufener");
