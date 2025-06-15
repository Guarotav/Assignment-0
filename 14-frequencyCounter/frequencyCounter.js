function frequencyCounter(word) {
  // Insert code here;
  let frequency = {}
  let count = 0;

  for (let i = 0; i < word.length; i++){ 
    let char = word[i]

    for (let j = 0; j < word.length; j++){
      if (char == word[j])
        count ++
        }

        frequency[char] = count
        count = 0
    }
    return frequency;
    }
  


// Do not edit this line;
module.exports = frequencyCounter;