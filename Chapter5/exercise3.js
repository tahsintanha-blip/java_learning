function max3(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(max3(10, 20, 15)); // 20
console.log(max3(8, 3, 5));    // 8
console.log(max3(4, 9, 12));   // 12