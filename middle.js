const middle = function(array) {
  let output= [];
  let index = Math.floor(array.length / 2);
  if (array.length < 3) return output
  


middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]