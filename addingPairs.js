// Write a program that allows for an integer array to be passed in and will then output all of the pairs that sum up to 10.
// Please provide a solution that allows for:
// 1: output all pairs (includes duplicates and the reversed ordered pairs).
// 2: output unique pairs only once (removes the duplicates but includes the reversed ordered pairs).
// 3: output the same combo pair only once (removes the reversed ordered pairs).


// For example passing in [1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9] the following results should occur:
// 1) output all pairs would output: [1,9], [1,9], [4,6], [4,6], [5,5], [5,5], [5,5], [5,5], [5,5], [5,5], [6,4], [6,4] [9,1] , [9,1]
// 2) output unique pairs only once would output: [1,9], [4,6], [5,5], [6,4], [9,1]
// 3) output the same combo pair only once would output: [1,9], [4,6], [5,5]


//PART 1
function Pairs(arr) {
  var result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 10) {
        result.push([arr[i], arr[j]])
        result.push([arr[j], arr[i]])
      }
    }

  }
  return result
}

console.log(Pairs([1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]))


//PART 2
function findUniquePairs(array) {
  const pairs = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 10) {
        pairs.add(JSON.stringify([array[i], array[j]]));  //JSON.stringify convert javascript object to string
        pairs.add(JSON.stringify([array[j], array[i]]));
      }
    }
  }

  return Array.from(pairs).map(JSON.parse);
}


console.log(findUniquePairs([1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]))


//PART 3
function findComboPairs(array) {
  const pairs = new Set();

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 10) {
        const pair = [array[i], array[j]]
        pairs.add(JSON.stringify(pair));
      }
    }
  }

  return Array.from(pairs).map(JSON.parse);
}


console.log(findComboPairs([1, 1, 2, 4, 4, 5, 5, 5, 6, 7, 9]))
