// Method 6 : startsWith()
//
// Definition :
// startsWith() checks whether the string BEGINS with the
// specified value or not. It returns true or false.
// It is case-sensitive.
// You can also pass a second argument (position) to tell
// JavaScript from which index position to start checking.
// It is useful for validating URLs, file extensions,
// prefixes, or checking the beginning of user input.
//
// Syntax : string.startsWith(searchValue, startPosition)
// -------------------------------------------------------

let str6 = "Hello World";
// console.log(str6.startsWith("H"));    // Output: true
// console.log(str6.startsWith("World"));    // Output: false
// console.log(str6.startsWith("hello"));    // Output: false  (case-sensitive)
// console.log(str6.startsWith("World", 6)); // Output: true   (checking from index 6)

console.log(str6.startsWith(' ', 5));
