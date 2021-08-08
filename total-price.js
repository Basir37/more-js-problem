// const products = [
//     { name: 'laptop', price: 122000},
//     { name: 'phone', price: 55000},
//     { name: 'watch', price: 5000},
//     { name: 'shirt', price: 1600}
// ];

// let totalPrice = 0;

// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

const cart = [
    { name: 'laptop', price: 122000 , quantity: 1},
    { name: 'phone', price: 55000 , quantity: 2},
    { name: 'watch', price: 5000 , quantity: 3},
    { name: 'shirt', price: 1600, quantity: 5 }
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
