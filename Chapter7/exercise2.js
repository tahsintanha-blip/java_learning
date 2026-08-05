const student2 = {
    name: "Tahsin Tanha",
    dept: "CSE",
    semester: "4th",

    describe() {
        return `${this.name} studies in ${this.dept}, Semester ${this.semester}.`;
    }
};

console.log(student2.describe());