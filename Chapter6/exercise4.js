const nums = [2, 5, 8, 11, 14, 20];

const evenCount = nums.reduce((count, num) => {
    if (num % 2 === 0) {
        return count + 1;
    }
    return count;
}, 0);

console.log(evenCount);