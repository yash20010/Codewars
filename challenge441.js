// There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

// You are given money in nominal value of n with 1<=n<=1500.

// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

// Good Luck!!!

function solve(n) {
  if (n % 10 !== 0) return -1;
  let sum = 0;
  if (n / 500 >= 1) {
    sum += Math.floor(n / 500);
    n = n % 500;
  }
  if (n / 200 >= 1) {
    sum += Math.floor(n / 200);
    n = n % 200;
  }
  if (n / 100 >= 1) {
    sum += Math.floor(n / 100);
    n = n % 100;
  }
  if (n / 50 >= 1) {
    sum += Math.floor(n / 50);
    n = n % 50;
  }
  if (n / 20 >= 1) {
    sum += Math.floor(n / 20);
    n = n % 20;
  }
  if (n / 10 >= 1) {
    sum += Math.floor(n / 10);
    n = n % 10;
  }
  return sum;
}
