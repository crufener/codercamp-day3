var products = [
    { name: 'Cheese', price: 7.00 },
    { name: 'Milk', price: 3.00 },
    { name: 'Wine', price: 97.30 },
    { name: 'Grapes', price: 4.00 }
];
var expensiveProducts = products.filter(function (product) { return product.price > 5.00; });
console.log(expensiveProducts);
var criteria = function (product) { return product.price > 5.00; };
var expensiveProducts1 = products.filter(criteria);
console.log(expensiveProducts1);
var total = products.reduce(function (s, c) {
    return s + c.price;
}, 0);
console.log(total);
