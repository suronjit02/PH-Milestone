
let a = 5, b = 7, temp;

console.log(a, b);

temp = a;
a = b;
b = temp;

console.log(a, b);

// ===============================

let x = 9, y = 3;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);

// ================================

let m = 6, n = 11;

console.log(m, n);

m = m + n; // m = (6+11) = 17
n = m - n; // n = (17-11) = 6
m = m - n; // m = (17-6) = 11

console.log(m, n);
