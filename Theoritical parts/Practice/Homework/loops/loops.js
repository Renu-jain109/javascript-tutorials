for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}


const user = {
    name: "Aarushi",
    age: 16
};

for (let key in user) {
    console.log(key, ":", user[key]);
}


const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
    console.log(fruit);
}


let arr = ["apple", "mango", "banana"];

arr.forEach((item) => {
    console.log(item)
})


let i = 1;

do {
    console.log("Value:", i);
    i++;
} while (i <= 3);



let a = 1;

while (i <= 3) {
    console.log("Count:", i);
    i++;
}