const student = {
    name: "Karim",
    cgpa: 3.75
};

const text = JSON.stringify(student);

const newStudent = JSON.parse(text);

console.log(newStudent.name);