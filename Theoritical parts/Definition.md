dynamic. It is one of the three core technologies of the World Wide Web, alongside HTML and CSS.

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

Javascript :- 

Point 1 :- Javascript provide the functionaility for the webpage. 
Point 2 :- It convert the static webpage to dynamic webpage. 
Point 3 :- Founder of the Javascript :- Brendan Eich.
Point 4 :- In 1995, buy Netscafe company and in 1997 , nescafe company handed over javascript to the ECMA(Europe Plant Computer Manufacture Association).
Point 5 :- Now, the current version of js is ES6+(E = Ecma , S = Script).

Features of Javascript :- 

Point 1 :- Javascript is a scripting language.
Point 2 :- In Javascript , There is no compiler to do the compilation both compilation and line by line execution will happen through interpretor only.
Point 3 :- Any Programming Language which used  just the interpretor is known as scripting language.
Point 4 :- Javascript is a client side programming language(frontend). 
Point 5 :- Javascript is used to design the frontend of an appilication.
Point 6 :- Javascript is also used for server side programming language(backend).
Point 7 :- Javascript is also used to design the backend. 
Point 8 :- Javascript is synchronous(Javascript will execute line by line but javascript engine will not wait till the task is going to complete) in nature.

Point 9 :- Javascript is a platform independent language or portable language.(Javascript code can be written in one operating system and it is possible to run in other operating system. Therefore, javascript follow WORA(write once run everywhere) principal).

Point 10 :- It is a loosely type language :- 
A :- It is a programmer's friendly language.
B :- It is not required to terminate.
c :- Data type written type also not required.

Point 11 :- Javascript can be written in simple english language.

variables :- These are named as a block of memory used to store the data so basically we have three types of declarations of variables :- 

1:- var 
2:- let 
3:- const 

1. Declaration
eg:- 
 let name;

1.1 Re-Declaration
eg:- 
  var name;


2. Initialization
 let name = "Jain";

2.2 Re-Initialization
 let name = "Arushi jain"

Difference between var , let and const ? 
scope 
var :- function scoped 
let :- blocked scoped
const :- blocked scoped

declaration :- 
var :- it is possible to just declaration. 
let :- it is possible to just declaration. 
const :- it is not possible to just declare. 

redecalration :- 
var : it is possible to 
let : it is not possible
const : it is no possible;

Initilization:- 
var :- not required
let :- not required 
const :- it is required;

Reinizilation :- 
var :- it is a possible
let :- it is a possible
const:-it is not a possible


🧠 Core Differences
Feature	 var 🧓 (old)	  let 🧑 (modern)	const 🔒 (strict)
Scope	Function	Block {}	Block {}
Re-declare	✅ Yes	❌ No	❌ No
Re-assign	✅ Yes	✅ Yes	❌ No
Hoisting	✅ Yes (undefined)	⚠️ Yes (TDZ)	⚠️ Yes (TDZ)
Use today	🚫 Avoid	✅ Use	✅ Use

