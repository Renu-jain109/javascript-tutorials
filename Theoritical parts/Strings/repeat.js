// Method 19 : repeat()
//
// Definition :
// repeat() returns a new string by repeating the original
// string a specified number of times.
// The count must be a NON-NEGATIVE integer.
// Passing 0 returns an empty string.
// Passing a negative number or Infinity throws a RangeError.
// It does NOT modify the original string.
// It is useful for creating patterns, padding, or decorations.
//
// Syntax : string.repeat(count)
// -------------------------------------------------------

let str19 = "Ha";
console.log(str19.repeat(3));  // Output: HaHaHa
console.log(str19.repeat(1));  // Output: Ha
console.log(str19.repeat(0));  // Output: ""  (empty string)
console.log(str19);            // Output: Ha  (original unchanged)

