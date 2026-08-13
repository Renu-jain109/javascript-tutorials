// Definition :
// indexOf() searches for the FIRST occurrence of a
// specified substring inside the string and returns its
// starting index position. If the value is not found,
// it returns -1.
// It is case-sensitive.
// A second optional argument sets the starting position
// of the search.
// It is commonly used to check if a value exists in a
// string and to find its exact position.
//
// Syntax : string.indexOf(searchValue, startIndex)
// -------------------------------------------------------

let str8 = "banana";
//           012345
console.log(str8.indexOf("a"));     // Output: 1  (first 'a' is at index 1)
console.log(str8.indexOf("a", 2));  // Output: 3  (searching from index 2)
console.log(str8.indexOf("z"));     // Output: -1 (not found)
