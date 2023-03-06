//Given a roman numeral, convert it to an integer;

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function (s) {

  var result = 0;
  const values = {
    'I': 1,
    'V': 5,
    'L': 50,
    'X': 10,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'CD': 400,
    'CM': 900,
    'XL': 40,
    'XC': 90
  }

  for (let a = 0; a < s.length; a++) {
    if (s[a] in values) {
      if (s[a] + s[a + 1] in values) {
        result = result + values[s[a] + s[a + 1]]
        a = a + 1
      }
      else {
        result = result + values[s[a]]
      }
    }
  }

  return result;
}