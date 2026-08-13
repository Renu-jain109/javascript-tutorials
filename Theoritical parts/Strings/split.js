// -------------------------------------------------------
// Method 17 : split()
//
// Definition :
// split() converts a string into an ARRAY by breaking it
// at every occurrence of the specified separator.
// The separator can be a string or a regular expression.
// The separator itself is NOT included in the resulting array.
// If an empty string ("") is passed as separator, the string
// is split into individual characters.
// If no separator is passed, the entire string becomes a
// single element array.
// An optional second argument (limit) controls how many
// elements the resulting array should contain.
// It is commonly used to parse CSV data or split sentences.
//
// Syntax : string.split(separator, limit)


let str17 = "apple,banana,mango";
console.log(str17.split(","));       // Output: [ 'apple', 'banana', 'mango' ]
console.log(str17.split(",", 2));    // Output: [ 'apple', 'banana' ]  (limit of 2)
console.log(str17.split(""));        // Output: [ 'a','p','p','l','e',',','b',... ]  (each character)
console.log(str17.split());          // Output: [ 'apple,banana,mango' ]  (no separator → full string in array)
