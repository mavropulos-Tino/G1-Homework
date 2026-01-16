const studentFirstName = document.getElementById('firstName');
const studentLastName = document.getElementById('lastName');
const studentAge = document.getElementById('age');
const studentList = document.getElementById('studentList');

let students = [];

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
function clearForm() {
    studentFirstName.value = '';
    studentLastName.value = '';
    studentAge.value = '';
}
function displayStudents() {
    studentList.innerHTML = '';

    for(let student of students) {
        const li = document.createElement('li');
        li.textContent = `${student.firstName} ${student.lastName} | Age: ${student.age}`;
        studentList.appendChild(li);
    }
}
function studentExists(firstName, lastName) {
    for(let i=0; i<students.length; i++) {
        let currentStudent = students[i];

        if(currentStudent.firstName.toLowerCase() === firstName.toLowerCase() &&
           currentStudent.lastName.toLowerCase() === lastName.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function registerStudent() {
    const firstName = studentFirstName.value.trim();
    const lastName = studentLastName.value.trim();
    const age = Number(studentAge.value);

    if(!firstName || !lastName) {
        alert('First and last name are required.');
        return;
    }
    if(age <= 0) {
        alert('Age must be a positive number.');
        return;
    }
    if (studentExists(firstName, lastName)) {
        alert('Student with the first and last name already exists!');
        return;
    }
    const student = new Student(firstName, lastName, age);
    students.push(student);

    console.log(students);

    clearForm();
    displayStudents();
}
