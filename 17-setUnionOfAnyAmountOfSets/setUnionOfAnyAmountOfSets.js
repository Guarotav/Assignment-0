function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let result = new Set()

  for (let set of args) {
    for (let value of set) {
      result.add(value);
    }
  }
    return result
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;