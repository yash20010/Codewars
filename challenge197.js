// You have two arrays in this kata, every array contain only unique elements. Your task is to calculate number of elements in first array which also are in second array.

function matchArrays(v,r){
  return v.reduce((a,c) => a + (r.includes(c) ? 1 : 0), 0)
}