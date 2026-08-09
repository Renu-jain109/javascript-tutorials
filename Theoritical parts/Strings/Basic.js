// ============================================================
//   STRINGS IN JAVASCRIPT
// ============================================================
// A string is a sequence of characters used to represent text
// in JavaScript. Strings are immutable, meaning once a string
// is created, its characters cannot be changed directly —
// any string method always returns a NEW string without
// modifying the original one.
// Strings are zero-indexed, meaning the first character is
// always at index 0.
// JavaScript provides various built-in string methods to
// search, extract, modify, compare and manipulate strings.
// ============================================================


// -------------------------------------------------------
// Method 1 : length
//
// Definition :
// length is a PROPERTY (not a method) of a string.
// It returns the total number of characters present in
// the string, including spaces and special characters.
// It is commonly used to find the size of a string,
// validate input length (like passwords or usernames),
// and loop through each character of a string.
//
// Syntax : string.length
// -------------------------------------------------------

let str1 = "Hello World";
console.log(str1.length); // Output: 11  (space is also counted)

let str1b = "";
console.log(str1b.length); // Output: 0  (empty string has length 0)


// -------------------------------------------------------
// Method 2 : toUpperCase()
//
// Definition :
// toUpperCase() converts every character of a string to
// its UPPERCASE equivalent and returns the new string.
// It does NOT change the original string (strings are immutable).
// It is useful when you want to compare strings in a
// case-insensitive way or display text in all capitals.
// Only alphabetic characters are affected — numbers,
// spaces and symbols remain unchanged.
//
// Syntax : string.toUpperCase()
// -------------------------------------------------------

let str2 = "hello world 123";
console.log(str2.toUpperCase()); // Output: HELLO WORLD 123
console.log(str2);               // Output: hello world 123  (original unchanged)


// -------------------------------------------------------
// Method 3 : toLowerCase()
//
// Definition :
// toLowerCase() converts every character of a string to
// its LOWERCASE equivalent and returns the new string.
// It does NOT modify the original string.
// It is widely used in form validation and search
// functionality to normalize user input before comparison.
// Numbers, spaces and symbols are not affected.
//
// Syntax : string.toLowerCase()
// -------------------------------------------------------

let str3 = "HELLO WORLD 123";
console.log(str3.toLowerCase()); // Output: hello world 123
console.log(str3);               // Output: HELLO WORLD 123  (original unchanged)


// -------------------------------------------------------
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
// -------------------------------------------------------

let str4 = "JavaScript";
//           0123456789
console.log(str4.charAt(0));   // Output: J  (first character)
console.log(str4.charAt(4));   // Output: S
console.log(str4.charAt(20));  // Output: ""  (out of range → empty string)


// -------------------------------------------------------
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
console.log(str5.includes("JavaScript")); // Output: true
console.log(str5.includes("Python"));     // Output: false
console.log(str5.includes("javascript")); // Output: false  (case-sensitive)
console.log(str5.includes("love", 10));   // Output: false  (search starts at index 10)


// -------------------------------------------------------
// Method 6 : startsWith()
//
// Definition :
// startsWith() checks whether the string BEGINS with the
// specified value or not. It returns true or false.
// It is case-sensitive.
// You can also pass a second argument (position) to tell
// JavaScript from which index position to start checking.
// It is useful for validating URLs, file extensions,
// prefixes, or checking the beginning of user input.
//
// Syntax : string.startsWith(searchValue, startPosition)
// -------------------------------------------------------

let str6 = "Hello World";
console.log(str6.startsWith("Hello"));    // Output: true
console.log(str6.startsWith("World"));    // Output: false
console.log(str6.startsWith("hello"));    // Output: false  (case-sensitive)
console.log(str6.startsWith("World", 6)); // Output: true   (checking from index 6)


// -------------------------------------------------------
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


// -------------------------------------------------------
// Method 8 : indexOf()
//
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


// -------------------------------------------------------
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
console.log(str9.lastIndexOf("a", 4));  // Output: 3  (searching backwards from index 4)
console.log(str9.lastIndexOf("z"));     // Output: -1 (not found)


// -------------------------------------------------------
// Method 10 : slice()
//
// Definition :
// slice() extracts a part of a string between the given
// start and end index, and returns it as a NEW string.
// The start index is INCLUSIVE and end index is EXCLUSIVE
// (the character at end index is NOT included).
// It does NOT modify the original string.
// IMPORTANT : slice() also accepts NEGATIVE indexes,
// where -1 means the last character, -2 means second
// last, and so on. This is a key difference from substring().
// If only start index is given, it extracts till the end.
//
// Syntax : string.slice(startIndex, endIndex)
// -------------------------------------------------------

let str10 = "Hello World";
//            01234567890
console.log(str10.slice(0, 5));   // Output: Hello   (index 0 to 4)
console.log(str10.slice(6));      // Output: World   (index 6 to end)
console.log(str10.slice(-5));     // Output: World   (last 5 characters)
console.log(str10.slice(-5, -2)); // Output: Wor     (negative range)


// -------------------------------------------------------
// Method 11 : substring()
//
// Definition :
// substring() extracts characters between two specified
// index positions and returns a new string.
// The start index is INCLUSIVE and end index is EXCLUSIVE.
// It does NOT modify the original string.
// KEY DIFFERENCE from slice() :
//   1. substring() does NOT support negative indexes.
//      If a negative value is passed, it treats it as 0.
//   2. If start > end, substring() automatically SWAPS
//      the two values, whereas slice() returns empty string.
//
// Syntax : string.substring(startIndex, endIndex)
// -------------------------------------------------------

let str11 = "Hello World";
console.log(str11.substring(0, 5));  // Output: Hello
console.log(str11.substring(6));     // Output: World
console.log(str11.substring(6, 0));  // Output: Hello  (swaps → becomes substring(0,6))
console.log(str11.substring(-3));    // Output: Hello World  (negative treated as 0)


// -------------------------------------------------------
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


// -------------------------------------------------------
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


// -------------------------------------------------------
// Method 15 : replace()
//
// Definition :
// replace() searches for the FIRST occurrence of a specified
// value (string or regular expression) and replaces it with
// a new value. It returns a new string and does NOT modify
// the original string.
// IMPORTANT : By default, replace() only replaces the FIRST
// match. To replace all occurrences using replace(), you
// need to use a regular expression with the global flag /g.
// It is case-sensitive when used with a plain string.
// You can use regex flags like /i for case-insensitive search.
//
// Syntax : string.replace(searchValue, newValue)
// -------------------------------------------------------

let str15 = "I like cats and cats";
console.log(str15.replace("cats", "dogs"));     // Output: I like dogs and cats  (only first replaced)
console.log(str15.replace(/cats/g, "dogs"));    // Output: I like dogs and dogs  (all replaced using regex)
console.log(str15.replace(/CATS/i, "dogs"));    // Output: I like dogs and cats  (case-insensitive)
console.log(str15);                              // Output: I like cats and cats  (original unchanged)


// -------------------------------------------------------
// Method 16 : replaceAll()
//
// Definition :
// replaceAll() searches for ALL occurrences of the specified
// value and replaces every one of them with the new value.
// It returns a new string and does NOT modify the original.
// It was introduced in ES2021 as a cleaner alternative to
// using replace() with a global regex /g flag.
// IMPORTANT : If you use replaceAll() with a regex, the
// global flag /g is MANDATORY, otherwise it throws a TypeError.
// It is case-sensitive when used with a plain string.
//
// Syntax : string.replaceAll(searchValue, newValue)
// -------------------------------------------------------

let str16 = "I like cats and cats";
console.log(str16.replaceAll("cats", "dogs"));   // Output: I like dogs and dogs
console.log(str16.replaceAll(/cats/g, "dogs"));  // Output: I like dogs and dogs  (regex with /g)
console.log(str16);                               // Output: I like cats and cats  (original unchanged)


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
// -------------------------------------------------------

let str17 = "apple,banana,mango";
console.log(str17.split(","));       // Output: [ 'apple', 'banana', 'mango' ]
console.log(str17.split(",", 2));    // Output: [ 'apple', 'banana' ]  (limit of 2)
console.log(str17.split(""));        // Output: [ 'a','p','p','l','e',',','b',... ]  (each character)
console.log(str17.split());          // Output: [ 'apple,banana,mango' ]  (no separator → full string in array)

let str17b = "Hello World";
console.log(str17b.split(" "));      // Output: [ 'Hello', 'World' ]


// -------------------------------------------------------
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
// -------------------------------------------------------

let str18a = "Hello";
let str18b = " World";
console.log(str18a.concat(str18b));            // Output: Hello World
console.log(str18a.concat(" ", "World", "!")); // Output: Hello World!
console.log(str18a);                           // Output: Hello  (original unchanged)


// -------------------------------------------------------
// Method 19 : repeat()
//
// Definition :
// repeat() returns a new string by repeating the original
// string a specified number of times.
// The count must be a NON-NEGATIVE integer.
// Passing 0 returns an empty string.
// Passing a negative number or Infinity throws a RangeError.
// It does NOT modify the original string.
// It is useful for creating patterns, padding, or decorations.
//
// Syntax : string.repeat(count)
// -------------------------------------------------------

let str19 = "Ha";
console.log(str19.repeat(3));  // Output: HaHaHa
console.log(str19.repeat(1));  // Output: Ha
console.log(str19.repeat(0));  // Output: ""  (empty string)
console.log(str19);            // Output: Ha  (original unchanged)


// -------------------------------------------------------
// Method 20 : match()
//
// Definition :
// match() searches a string against a REGULAR EXPRESSION
// and returns the matching result as an array.
// If no match is found, it returns NULL.
// Without the global flag /g : returns the FIRST match
//   along with extra details like index and input.
// With the global flag /g : returns an array of ALL matches
//   but without extra details.
// It is useful for pattern matching, data extraction,
// and validation using regular expressions.
//
// Syntax : string.match(regularExpression)
// -------------------------------------------------------

let str20 = "The rain in Spain stays mainly in the plain";
console.log(str20.match(/ain/));   // Output: [ 'ain', index: 5, input: '...', groups: undefined ]
console.log(str20.match(/ain/g));  // Output: [ 'ain', 'ain', 'ain', 'ain' ]  (all matches)
console.log(str20.match(/xyz/g));  // Output: null  (no match found)


// -------------------------------------------------------
// Method 21 : matchAll()
//
// Definition :
// matchAll() returns an ITERATOR containing all matches
// of a regular expression against a string, including
// full match details (index, groups) for every match.
// The GLOBAL flag /g is MANDATORY — without it, it throws
// a TypeError. This is a key difference from match().
// Unlike match() with /g (which loses details), matchAll()
// gives you full details for every match.
// Since it returns an iterator, you need to spread it into
// an array [...] or use a for...of loop to access results.
// Introduced in ES2020.
//
// Syntax : string.matchAll(regularExpression)  [/g flag required]
// -------------------------------------------------------

let str21 = "test1 test2 test3";
let allMatches = [...str21.matchAll(/test(\d)/g)];
console.log(allMatches[0][0]);     // Output: test1   (full match)
console.log(allMatches[0][1]);     // Output: 1       (captured group)
console.log(allMatches[1][0]);     // Output: test2
console.log(allMatches.length);    // Output: 3       (total 3 matches found)


// -------------------------------------------------------
// Method 22 : search()
//
// Definition :
// search() searches for a match of a REGULAR EXPRESSION
// inside the string and returns the INDEX of the first match.
// If no match is found, it returns -1.
// It always searches from the BEGINNING of the string and
// does NOT support a start position argument.
// Unlike indexOf(), search() accepts a regular expression,
// which makes it powerful for pattern-based searching.
// Unlike match(), search() only returns the index, not the
// matched value itself.
//
// Syntax : string.search(regularExpression)
// -------------------------------------------------------

let str22 = "Hello World";
console.log(str22.search(/World/));   // Output: 6   (found at index 6)
console.log(str22.search(/world/i));  // Output: 6   (case-insensitive search)
console.log(str22.search(/xyz/));     // Output: -1  (not found)


// -------------------------------------------------------
// Method 23 : localeCompare()
//
// Definition :
// localeCompare() compares two strings according to the
// LOCALE (language/region rules) and returns a NUMBER:
//    0  → both strings are EQUAL
//   -1  → the original string comes BEFORE the compared string
//    1  → the original string comes AFTER the compared string
// It is used for ALPHABETICAL SORTING of strings that may
// contain special characters, accented letters, or characters
// from non-English languages (like é, ü, ñ, etc.).
// Regular comparison operators (> < ==) do not handle
// locale-specific characters properly — localeCompare() does.
// It accepts options for case sensitivity, numeric sorting etc.
//
// Syntax : string.localeCompare(compareString, locale, options)
// -------------------------------------------------------

let str23a = "apple";
let str23b = "banana";
let str23c = "Apple";

console.log(str23a.localeCompare("apple"));   // Output:  0  (equal)
console.log(str23a.localeCompare(str23b));    // Output: -1  (apple comes before banana)
console.log(str23b.localeCompare(str23a));    // Output:  1  (banana comes after apple)

// Real-world use : sorting an array of strings alphabetically
let fruits = ["banana", "apple", "mango", "cherry"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry', 'mango' ]
