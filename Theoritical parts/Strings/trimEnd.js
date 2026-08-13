// -------------------------------------------------------
// Method 14 : trimEnd()  [also known as trimRight()]
//
// Definition :
// trimEnd() removes whitespace ONLY from the END
// (right side) of the string. Whitespace at the start remains.
// It does NOT modify the original string.
// trimRight() is an older alias for trimEnd() — both work
// the same way, but trimEnd() is the standard ES2019 name.
// Useful when you only want to clean trailing spaces but
// intentionally want to keep leading spaces.
//
// Syntax : string.trimEnd()
// -------------------------------------------------------

let str14 = "   Hello World   ";
console.log(str14.trimEnd());        // Output: "   Hello World"
console.log(str14.trimEnd().length); // Output: 14  (only trailing spaces removed)


