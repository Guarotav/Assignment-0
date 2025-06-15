function isPalindrome(word) {
  // Insert code here;
  let reverseWord =''
  for (i = word.length - 1; i >= 0 ; i--){
    reverseWord+= word[i]
  }
  if (reverseWord == word)
    return true;
  else
    return false;
}

// Do not edit this line;
module.exports = isPalindrome;