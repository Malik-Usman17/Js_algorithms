const data = [10, 2, 1, 9, 22, 40, 10, 60, 2, 80, 9]
const uniqueValue = new Set(data)
const arr = Array.from(uniqueValue).map(JSON.parse)
arr.sort((a, b) => a - b)
console.log(arr[arr.length - 2])