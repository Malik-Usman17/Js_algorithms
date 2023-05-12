// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).


function factorial(n) {
  var value = 1
  for (let a = 1; a <= n; a++) {
    value = value * a
  }
  return value
}

factorial(6)


//factorial withou using loop
function decrementNumber(number) {
  if (number == 1) {
    return 1;
  } else {
    return number * decrementNumber(number - 1);
  }
}

console.log(decrementNumber(6));

