// Method 7 : endsWith()
//
// Definition :
// endsWith() checks whether the string ENDS with the
// specified value or not. It returns true or false.
// It is case-sensitive.
// You can pass a second argument (length) to treat only
// the first N characters of the string for the check.
// It is useful for validating file extensions (.jpg, .pdf),
// or checking suffixes in strings.
//
// Syntax : string.endsWith(searchValue, length)
// -------------------------------------------------------

let str7 = "Hello World";
console.log(str7.endsWith("World"));      // Output: true
console.log(str7.endsWith("Hello"));      // Output: false
console.log(str7.endsWith("world"));      // Output: false  (case-sensitive)
console.log(str7.endsWith("Hello", 5));   // Output: true   (only first 5 chars checked)

