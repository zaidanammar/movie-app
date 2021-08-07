function anagram(arr) {
  let hash = {};
  const result = [];
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split("");
    let swapped = true;
    do {
      swapped = false;
      for (let j = 0; j < word.length; j++) {
        if (word[j] > word[j + 1]) {
          let temp = word[j];
          word[j] = word[j + 1];
          word[j + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    new_arr.push(word);
  }

  new_arr.forEach((el, i) => {
    hash[el] ? hash[el].push(arr[i]) : (hash[el] = [arr[i]]);
  });

  for (const key in hash) {
    result.push(hash[key]);
  }
  return result;
}

console.log(anagram(["kita", "atik", "tika", "aku", "kia", "makan", "kua"]));
