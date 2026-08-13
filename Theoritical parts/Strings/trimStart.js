// Method 13 : trimStart()  [also known as trimLeft()]
//
// Definition :
// trimStart() removes whitespace ONLY from the BEGINNING
// (left side) of the string. Whitespace at the end remains.
// It does NOT modify the original string.
// trimLeft() is an older alias for trimStart() — both work
// the same way, but trimStart() is the standard ES2019 name.
// Useful when you only want to clean leading spaces but
// intentionally want to keep trailing spaces.
//
// Syntax : string.trimStart()
// -------------------------------------------------------

let str13 = "   Hello World   ";
console.log(str13.trimStart());        // Output: "Hello World   "
console.log(str13.trimStart().length); // Output: 14  (only leading spaces removed)

