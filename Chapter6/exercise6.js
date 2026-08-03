const products = [
    { item: "Pen", price: 20 },
    { item: "Book", price: 350 },
    { item: "Laptop", price: 60000 }
];

products.sort((a, b) => b.price - a.price);

console.log(products);