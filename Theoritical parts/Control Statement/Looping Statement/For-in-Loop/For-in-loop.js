const studentMarks = {
    maths: 95,
    english: 80,
    science: 90,
    social_Science: 70
}

for (let subject in studentMarks) {
    console.log(subject);
}

for (let subject in studentMarks) {
    console.log(studentMarks[subject]);
}

for (let subject in studentMarks) {
    console.log(subject , '=', studentMarks[subject]);
}