// Method 18 : concat()
//
// Definition :
// concat() combines (joins) two or more strings together
// and returns the result as a NEW string.
// It does NOT modify the original strings.
// You can pass multiple strings as arguments to join them
// all together in one call.
// In modern JavaScript, the + operator or template literals
// (backticks) are more commonly used for string concatenation,
// but concat() is the built-in method approach.
//
// Syntax : string.concat(string2, string3, ...)


let str18a = "Hello";
let str18b = " World";
// console.log(str18a, str18b);
// console.log(str18a + str18b);
console.log(str18a.concat(str18a));            // Output: Hello World
// console.log(str18a.concat(" ", "World", "!")); // Output: Hello World!
// console.log(str18a); 