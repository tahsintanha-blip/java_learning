function totalStock(products) {
    return products.reduce((sum, product) => sum + product.stock, 0);
}

const products = [
    { item: "Pen", stock: 20 },
    { item: "Book", stock: 10 },
    { item: "Bag", stock: 5 }
];

console.log(totalStock(products));