/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
result = n;
if (n==0) {return 1};
for (let i = n - 1; i > 1; --i) {
 result *= i;
}
return result;
}






