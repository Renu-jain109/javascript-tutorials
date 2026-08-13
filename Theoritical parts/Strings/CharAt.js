// Method 4 : charAt()
//
// Definition :
// charAt() returns the character located at the specified
// index position in the string. Indexing starts from 0.
// If the index given is out of range (less than 0 or
// greater than or equal to string length), it returns
// an empty string ("") instead of undefined or an error.
// This is different from bracket notation (str[index])
// which returns undefined for out-of-range indexes.
//
// Syntax : string.charAt(index)

let name = "Aarushi-Jain"
// console.log(name.split('')) //['A','a','r','u','s','h','i',' ','J','a','i','n']
console.log(name.charAt(15))