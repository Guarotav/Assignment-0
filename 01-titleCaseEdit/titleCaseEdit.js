function titleCaseEdit(title) {
  let words = title.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return words.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;