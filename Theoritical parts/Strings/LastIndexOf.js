// Method 9 : lastIndexOf()
//
// Definition :
// lastIndexOf() searches for the LAST occurrence of a
// specified substring inside the string and returns its
// starting index position. It searches from right to left.
// If the value is not found, it returns -1.
// It is case-sensitive.
// A second optional argument sets the position from which
// to search backwards.
// It is useful when there are multiple occurrences and
// you need the last one specifically.
//
// Syntax : string.lastIndexOf(searchValue, startIndex)
// -------------------------------------------------------

let str9 = "banana";
//           012345
console.log(str9.lastIndexOf("a"));     // Output: 5  (last 'a' is at index 5)
console.log(str9.lastIndexOf("a", 1));  // Output: 3  (searching backwards from index 4)
console.log(str9.lastIndexOf("z"));     // Output: -1 (not found)
