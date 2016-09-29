let products = [
    { name: 'Cheese', price: 7.00 },
    { name: 'Milk', price: 3.00 },
    { name: 'Wine', price: 97.30 },
    { name: 'Grapes', price: 4.00 }
];

let expensiveProducts = products.filter(product => product.price > 5.00);
//console.log(expensiveProducts);

let criteria = product => product.price > 5.00;

let expensiveProducts1 = products.filter(criteria);
//console.log(expensiveProducts1);

let total = products.reduce((s, c) => {
    return s + c.price;
}, 0);
//console.log(total);

/*TEMPLATE LITERALS*/
addListItem('template literals', 'All about temlate literals\ncool!');
let message = `This is a long message that
wraps across multiple lines. You could not
do this without using a template literal.`;
addListItem(`randome message`, message);

/*ADD NEW TOPICS COVERD TO THE LIST ON THE  INDEX.HTLM PAGE AND A SECOND MESSAGE AS A PARAGRAPH*/
/** addListItem : (string , string) -> (HTML list item, Html p) */
function addListItem(msg: string, msg2: string): void {
    let ul = document.getElementById('ul');
    let div = document.getElementById("div");
    let p = document.createElement('div');
    let li = document.createElement('LI');
    let text = li.innerHTML = msg;
    let ptext = p.innerHTML = msg2;
    ul.appendChild(li);
    div.appendChild(p);
}


//CLASSES

/** class Product
    property name: string
    property price: number
    method calculateTax : number
**/
class Product {
    name: string;
    price: number;
    calculateTax() {
        return this.price * 0.08;
    }
};

/*    Make an insance of the Product class  */
/**product1 : class Product
    property name : string
    property price : number
    **/
let product1 = new Product();
product1.name = "Eggs";
product1.price = 1.25;
//console.log(product1.calculateTax());

/*    Better way to make a class.  put fields in the constructor paramaters */
class Person {
    constructor(public firstName: string, public lastName: string) { }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
/*    Make an insance of the Person class.
        Notice the property fields are put in the call to Person class*/
let craig = new Person("Craig", "Rufener");
