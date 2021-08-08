const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'Oneplus', price: 40000, camera: 32, storage: 64 },
    { name: 'Xhaomi', price: 15000, camera: 12, storage: 16 },
    { name: 'Oppo a2', price: 17000, camera: 16, storage: 32 },
    { name: 'iphone 7', price: 25000, camera: 12, storage: 64 },
    { name: 'moto g', price: 19000, camera: 16, storage: 32 }
];
let cheapest = phones[0];
for (const phone of phones) {
    //compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);