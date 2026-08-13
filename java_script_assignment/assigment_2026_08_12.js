
//ASSINGNMENT 1 -------------------------------

const cart = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }, { name: "Keyboard", price: 50 }
]

//calculate the total price
function calculateSumOfAllProducts(items) {
    let totalProductPrice = 0;
    items.forEach((item) => {
        totalProductPrice = totalProductPrice + item.price;

    });
    console.log("$" + totalProductPrice);
}

// calculate total price using reduce method
function calculateSumOfAllProductsUsingReduce(item) {
    const price = item.map(item => item.price);
    return price.reduce((sum, price) => sum + price, 0)
}

// outputs for assignment 1
console.log(" ----- ASSIGNMENT 1 ------");
//console log the total price
calculateSumOfAllProducts(cart);
// comsole log for toal price using reduce method
console.log("$" + calculateSumOfAllProductsUsingReduce(cart));


//ASSINGNMENT 2 -------------------------------

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 700 },
    { name: "Headphones", price: 100 }
];

// get products with discounted price
function getDiscountedProducts() {

    const discountedProduct = products.map((i) => {
        return {
            name: i.name,
            price: i.price - (i.price * 0.10)
        }
    });
    console.log(discountedProduct);
}

console.log("\n ----- ASSIGNMENT 2 ------");
//function call
getDiscountedProducts();


//ASSINGNMENT 3 -------------------------------

const students= [
{ name:"Ram", present:true },
{ name:"Sita", present:false },
{ name:"Hari", present:true },
{ name:"Gita", present:true }
];


function getPresentStudents(){

  students.map((student) => {
  if (student.present) {
    console.log(`${student.name} is present`);
  }
});
}
console.log("\n ----- ASSIGNMENT 3 ------");
console.log(getPresentStudents())

//ASSINGNMENT 4-------------------------------

const users= [
{ name:"Ram", username:"ram123" },
{ name:"Sita", username:"sita99" },
{ name:"Hari", username:"hari_dev" }
];

function newArrayForUsernameOnly (){

 const a=   users.map((e)=>{
return e.username
    });

    console.log(a)
}


console.log("\n ----- ASSIGNMENT 4 ------");
newArrayForUsernameOnly();