// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

function product(values) {
  return values && values.length > 0 ? values.reduce((a,c) => a*c,1) : null
}