const students = [
    { name: "Asha", cgpa: 3.8 },
    { name: "Rafi", cgpa: 3.2 },
    { name: "Mim", cgpa: 3.9 },
    { name: "Sadia", cgpa: 3.6 }
];

const topperNames = students
    .filter(student => student.cgpa >= 3.5)
    .map(student => student.name);

console.log(topperNames);