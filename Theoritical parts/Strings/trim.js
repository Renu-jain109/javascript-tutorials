// Method 12 : trim()
//
// Definition :
// trim() removes ALL whitespace characters (spaces, tabs,
// newlines) from BOTH the beginning and the end of a string.
// It does NOT remove spaces between words inside the string.
// It does NOT modify the original string — returns a new one.
// It is very commonly used in form handling to clean up
// user input before validation or storing in a database.
//
// Syntax : string.trim()
// -------------------------------------------------------

let str12 = "   Hello World   ";
console.log(str12.trim());        // Output: "Hello World"
console.log(str12.trim().length); // Output: 11  (spaces removed from both ends)
console.log(str12.length);        // Output: 17  (original string unchanged)
