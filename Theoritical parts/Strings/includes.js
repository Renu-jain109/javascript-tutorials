// Method 5 : includes()
//
// Definition :
// includes() checks whether a specific substring exists
// inside the string or not. It returns a BOOLEAN value —
// true if the substring is found, false if it is not.
// It is case-sensitive, meaning "Java" and "java" are
// treated as different values.
// It is commonly used in search filters, validation, and
// conditional checks.
// Optionally, you can pass a second argument as the
// starting position from where the search should begin.
//
// Syntax : string.includes(searchValue, startIndex)
// -------------------------------------------------------

let str5 = "I love JavaScript";
// console.log(str5.includes("JavaScript")); // Output: true
// console.log(str5.includes("Python"));     // Output: false
// console.log(str5.includes("javascript")); // Output: false  (case-sensitive)
console.log(str5.includes("love", 10));   // Output: false  (search starts at index 10)

// console.log(str5.includes('name'));

