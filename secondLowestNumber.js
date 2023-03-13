//findout the second highest number in an array.

x = [0, 3, 4, 0, 1, 7]


function checkingNumber(val) {
  const newArr = val.sort()
  const data = [...new Set(newArr)]
  return data[1]
}

console.log(checkingNumber(x));