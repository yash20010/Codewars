// An integral:

// ∫abf(x)dx\int_{a}^{b}f(x)dx∫ 
// a
// b
// ​	
//  f(x)dx
// can be approximated by the so-called Simpson’s rule:

// b−a3n(f(a)+f(b)+4∑i=1n/2f(a+(2i−1)h)+2∑i=1n/2−1f(a+2ih))\dfrac{b-a}{3n}(f(a)+f(b)+4\sum_{i=1}^{n/2}f(a+(2i-1)h)+2\sum_{i=1}^{n/2-1}f(a+2ih)) 
// 3n
// b−a
// ​	
//  (f(a)+f(b)+4∑ 
// i=1
// n/2
// ​	
//  f(a+(2i−1)h)+2∑ 
// i=1
// n/2−1
// ​	
//  f(a+2ih))
// Here h = (b - a) / n, n being an even integer and a <= b.

// We want to try Simpson's rule with the function f:

// f(x)=32sin⁡(x)3f(x) = \frac{3}{2}\sin(x)^3f(x)= 
// 2
// 3
// ​	
//  sin(x) 
// 3
 
// The task is to write a function called simpson with parameter n which returns the value of the integral of f on the interval [0, pi] (pi being 3.14159265359...).

// Notes:
// Don't round or truncate your results. See in "RUN EXAMPLES" the function assertFuzzyEquals or testing.
// n will always be even.
// We know that the exact value of the integral of f on the given interval is 2.
// You can see: http://www.codewars.com/kata/5562ab5d6dca8009f7000050/train/javascript about rectangle method and trapezoidal rule.




function simpson(n) {
  let h = (Math.PI)/n
  let s4 = 0
  for(let i = 1; i<= n/2; i++){
    s4 += (Math.sin((2*i - 1)*h))**3
  }
  s4 = 6*s4

  let s2 = 0
  for(let i = 1; i<= n/2 - 1; i++){
    s2 += (Math.sin((2*i*h)))**3
  }
  s2 = 3*s2
  
  return Math.PI/3/n*(Math.sin(Math.PI) + s4 + s2)
}