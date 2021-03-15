// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  //code me
 return String(num).split('').map((n,i,arr) => {
   if(+n % 2 !== 0 && +arr[i+1] % 2 !==0 && arr[i+1]){
     return n+'-'
   }else{
     return n
   }
 }).join('')
}