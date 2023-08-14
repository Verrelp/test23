const students = ["student1", "student2", "student3"];
let students2 = [];
let student1;
students.forEach((item) => {
  students2.push(item + " Ini Sekolah 2");
  
  if (item === "student1") {
    student1 = item + " Ini Sekolah 1";
  }
});

console.log(student1); 