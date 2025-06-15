function countOfAllBooleans(arr) {
  // Insert code here;
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if ( typeof arr[i] == 'boolean' ) {
      count++;
    }
  }
  return count;
}

console.log(countOfAllBooleans([true, false, 1, 'hello', true, 42]))


// Do not edit this line;
module.exports = countOfAllBooleans;