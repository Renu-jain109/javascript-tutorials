Javascript is dynamic. It is one of the three core technologies of the World Wide Web, alongside HTML and CSS.

---

## Key Characteristics

- **Interpreted Language** — JavaScript code is executed line by line by the browser's JavaScript engine (e.g., V8 in Chrome, SpiderMonkey in Firefox) without needing prior compilation.
- **High-Level Language** — It abstracts away low-level details like memory management, making it easier to write and understand.
- **Dynamically Typed** — Variable types are determined at runtime, not at compile time. A variable can hold any type of value.
- **Single-Threaded** — JavaScript runs on a single thread but handles asynchronous operations using an event loop.
- **Multi-Paradigm** — Supports object-oriented, functional, and event-driven programming styles.

---

## Core Concepts

### 1. Variables
Containers for storing data values. Declared using `var`, `let`, or `const`.

### 2. Data Types
JavaScript has primitive types: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, and `BigInt`, plus a complex type: `Object`.

### 3. Functions
Reusable Javascript code can be written in one operating system.blocks of code that perform a specific task. Functions are first-class citizens in JavaScript — they can be stored in variables, passed as arguments, and returned from other functions.

### 4. Events
JavaScript responds to user actions (like clicks, keypresses, or form submissions) through an event-driven model.

### 5. DOM Manipulation
JavaScript can access and modify the Document Object Model (DOM) — the structured representation of an HTML page — to dynamically update content, styles, and structure.

### 6. Asynchronous Programming
JavaScript handles async operations (like API calls or file reads) using callbacks, Promises, and `async/await` syntax.

---

## Where JavaScript Runs

| Environment | Description |
|---|---|
| **Browser** | Client-side scripting to build interactive UIs |
| **Server (Node.js)** | Server-side applications, APIs, and backend logic |
| **Mobile** | Apps built with frameworks like React Native |
| **Desktop** | Apps built with tools like Electron |

---

## Javascript :- 

- **Point 1** :- Javascript provide the functionaility for the webpage. 
- **Point 2** :- It convert the static webpage to dynamic webpage. 
- **Point 3** :- Founder of the Javascript :- Brendan Eich.
- **Point 4** :- In 1995, buy Netscafe company and in 1997 , nescafe company handed over javascript to the ECMA(Europe Plant Computer Manufacture Association).
- **Point 5** :- Now, the current version of js is ES6+(E = Ecma , S = Script).

## Features of Javascript :- 

- **Point 1** :- Javascript is a scripting language.
- **Point 2** :- In Javascript , There is no compiler to do the compilation both compilation and line by line execution will happen through interpretor only.
- **Point 3** :- Any Programming Language which used  just the interpretor is known as scripting language.
- **Point 4** :- Javascript is a client side programming language(frontend). 
- **Point 5** :- Javascript is used to design the frontend of an appilication.
- **Point 6** :- Javascript is also used for server side programming language(backend).
- **Point 7** :- Javascript is also used to design the backend. 
- **Point 8** :- Javascript is synchronous(Javascript will execute line by line but javascript engine will not wait till the task is going to complete) in nature.

- **Point 9** :- Javascript is a platform independent language or portable language.(Javascript code can be written in one operating system and it is possible to run in other operating system. Therefore, javascript follow WORA(write once run everywhere) principal).

- **Point 10** :- It is a loosely type language :- 
A :- It is a programmer's friendly language.
B :- It is not required to terminate.
c :- Data type written type also not required.

- **Point 11** :- Javascript can be written in simple english language.

- **variables** :-  These are named as a block of memory used to store the data so basically we have three types of declarations of variables :- 

- **1**:- var 
- **2**:- let 
- **3**:- const 

# 1. Declaration
- **eg :-** let name;

- **1.1**Re-Declaration
- **eg :-** var name;


# 2. Initialization
- **eg :-** let name = "Jain";

- **2.2 Re-Initialization**
- **eg :-** let name = "Arushi jain"

### Difference between var , let and const ? 
- *scope -*  
- **var**:- function scoped 
- **let**:- blocked scoped
- **const** :- blocked scoped

# Declaration :- 
- **var**:- it is possible to just declaration. 
- **let**:- it is possible to just declaration. 
- **const** :- it is not possible to just declare. 

# Redecalration :- 
- **var**: it is possible to 
- **let**: it is not possible
- **const** : it is no possible;
 
# Reinizilation :- 
- **var**:- it is possible
- **let**:- it is a possible
- **const**:-it is not a possible


## Tokens :- 
- **What are tokens in javascript ?** 
tokens are the smallest meaningful units of a javascript program.They include identifiers (names like variables and functions), keywords(reserved words such as let, if , return) , literals(fixed value like numbers ,strings , booleans , arrays and objects), operators(such as +, -, = ), and separators(such as ; , (), {}).

Example :- 

let age = 25;


| Token | Type       |
| ----- | ---------- |
| `let` | Keyword    |
| `age` | Identifier |
| `=`   | Operator   |
| `25`  | Literal    |
| `;`   | Separator  |


## Keywords :-
 Keywords are reserved word in javascript that have a predefined meaning. you cant use them as identifiers.

- **eg:-** let, const, var, if, else, for, while, function, return, break, continue, class, new, switch, case, try, catch/

## Identifiers :-
 An identifier is the name you give to variables, functions, classes, objects;

- **ex**:- 

let studentName ;

function name() { 
  console.log("Hello world.")
}

identifiers :-
- **point a :-** cant start with a number :- let 123name = "srishti";

- **point b :-** cant use javscript keyword :-let if = 10;

- **point c :-** identifiers are case-:- let age = 20; and let Age = 30;

Literals :- A literal is a fixed value written directly in your code. 
Ex :- let age = 20;
20 is a literal.

<!-- Types of literal:-  -->

type-1 : Number Literal = 10;
type-2 : String Literal = "20";
type-3 : Boolean Literal = true , false;
type-4 : Null Literal = Null;
type-5 : BigInt Literal = 1234567891112131415n;
type-6 : Array Literal = let arr = [1,2,3,4,5];  output :-[1,2,3,4,5]
type-7 : Object Literal = let obj = { name : "Aarushi", id: "123"}; 




Arthmetic Operators :- Operators are symbols or keywords that perform operation on one or more operands(value or variable).

Types of Operators :-


1:- Arthmetic Operators:- Used to perform mathematical calculation.

Operator	Description	  Example	Output
+	        Addition	    10 + 5	  15
-	      Subtraction	    10 - 5	  5
*	    Multiplication	  10 * 5	  50
/	        Division	    10 / 5	  2
%	  Modulus (Remainder)	10 % 3	  1
**	   Exponentiation	  2 ** 3	  8
++	    Increment   	 a++	Adds  1
--	    Decrement	   a-- Subtracts   1



2:- Assignment Operators:- Used to assign values to variables.

Operator	Example	   Equivalent
=	        a = 5	   Assign value
+=	      a += 2	   a = a + 2
-=	      a -= 2	   a = a - 2
*=	      a *= 2	   a = a * 2
/=	      a /= 2	   a = a / 2
%=	      a %= 2	   a = a % 2
**=	      a **= 2	   a = a ** 2



3:- Comparision Operators :- Used to compare two values.

Operator	   Meaning	              Example	               Output
==	     Equal (value only)	        5 == "5"	              true
===	      Strict Equal	            5 === "5"             	false
!=	      Not Equal	                 5 != 3	                true
!==	      Strict Not Equal      	  5 !== "5"	              true
>	        Greater Than	            10 > 5	                true
<	           Less Than	            10 < 5	                false
>=	   Greater Than or Equal	      10 >= 10	              true
<=	   Less Than or Equal	          5 <= 10	                true



Note :- (== compares only values (allows type conversion).
=== compares both value and data type (recommended).)



4:- Logical Operators :- Used to combined multiple conditions.

Operator	Meaning
&&	        AND
`	
!	        NOT

Example:

let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
console.log(age < 18 || hasLicense);  // true
console.log(!hasLicense);             // false



5:- Unary Operators :- Operate on a single operand.

Example:

let a = 5;
a++;
console.log(a); // 6

a--;
console.log(a); // 5

Also:
let x = 10;
console.log(typeof x); // "number"
typeof is also a unary operator.


Unary Operator:- this operators performs operation on only one operands. 
types of unary operator :-

Note:- '++' is increased by '1' and '--' is decreased by '1'

1:- Incremental Operator
--> two types of incremental operator :-

  a:- pre-incremental operator:- Intially the value of 'x' must be incremented by 11' then the incremented value should be assigned in y.

  example 1:-  let x = 5;
             let y = x;
     console.log(y) //output :- 5

  example 2:-  let x = 5;
             let y = ++x;
     console.log(y) //output :- 6
 

 
  b:- post-incremental operator:- Intially the value of 'x' must be assigned to 'y' then increment the value of x by '1' 

  example 2:-  let x = 5;
             let y = x++;
     console.log(y) //output :- 5


2:- Decremental Operator
--> two types of Decremental operator :- 

  a:- pre-decremental operator:- Initially the value of 'x' must be decremented by '1' then decremental value of 'x' should be assigned to 'y'.

  example 2:-  let x = 5;
             let y = --x;
     console.log(y) //output :- 4


  b:- post-decremental operator:- Initially the value of 'x' must be assigned to 'y' then decrement value by of 'x' by '1'.

    example 2:-  let x = 5;
             let y = x--;
     console.log(y) //output :- 5


6:- Ternary Operators :- A shorter form for if else conditons.

Syntax:
condition ? valueIfTrue : valueIfFalse;

Example:
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
Output: Adult



7:- String Operators :- The "+" operator concatinates (joins) string.

Example:

let first = "Md";
let last = "Noushad";

console.log(first + " " + last);

Output:
Md Noushad



8:- Nullish Operators (??) :- Returns the right hand value(R.H.S) only if the  left hand value is null or undefined.

let name = null;
console.log(name ?? "Guest");
Output:
Guest



9:- Optional Chaining (?.) :- Safely accesses nested object properties.

let user = {};
console.log(user.address?.city);
Output:
undefined
No error is thrown even though address doesn't exist.




Data Types :- Defines the types of data is called data type.

Two Data Types are :- 

1:- Primitive Data Type 
2:- Non-Primitive Data Type

Difference  Primitive Data Type and  Non-Primitive Data Type :-

Primitive Data Type                                 Non-Primitve Data Type

1:- Pre-defined  data type                         1:- User defined data type.
2:- By using primitve data type                    2:- We can store the multiple data in the one variable.
    we can store the single data                        Ex:- Arrays, Objects, functions
    type in the single block of 
    memory.
Ex:- string, boolean , number,undefined 


Number :- All the numeric data are considered as a numbers.
Ex:- let x = 30;
     let y = 40;
console.log(typeOf(x));
console.log(typeOf(y));


String :- The data which are closed (""), (``), ('') are considered as string.

Boolean :- it just include true or false.

Ex:- let value = true;
     let value1 = false;

Note :- value of true is 1 and the value of false is 0.


Undefined:- Undefined will occurs when the variable is just declared and it is not intialised to any value.

Ex:- let name;
console.log(name); 

The data type of undefined is 'undefined'.


Difference between undefined and null.

Undefined                                           Null

1:- Undefined will occur                      1:- when the variable is intizialised to null then it will occur null.
when varibale is just declared and  
not intialized

2:- data type of undefined is 'undefined'.    2:- data type of null is object. Ex:- let x = null; 
Ex:- let x;


<!-- Modules System:- Javascript has two types of module system 

1:- Old Module System(Common js) require and module.export
2:- New Module System(ES Module) import and export -->


