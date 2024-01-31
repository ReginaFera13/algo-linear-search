function linearSearch(searchTerm, arr) {
  let index = undefined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchTerm) {
      index = i
    }
   
  }
  return index
}

console.log(linearSearch(4, [1, 2, 3]))

function globalLinearSearch(searchTerm, arr) {
  let index = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == searchTerm) {
      index.push(i)
    }
   
  }
  return index
}

console.log(globalLinearSearch("n", "bananas".split("")))

module.exports = { linearSearch, globalLinearSearch };
