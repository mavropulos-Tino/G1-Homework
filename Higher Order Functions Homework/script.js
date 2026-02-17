const URL = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';

document.addEventListener('DOMContentLoaded', () => {
    fetch(URL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            getStudentsAvgAboveThree(data);
            // getFemaleNamesAvgFive(data);
            // getMalesFromSkopjeOver18(data);
            // getFemaleAvgGradeOver24(data);
            // getMalesStartingBAvgAboveTwo(data);

            // getStudentsOver30(data);
            // getStudentsFromCityStartingB(data);
            // getAllEmails(data);
            // getStudentsWithAvgThree(data);
            // countByGender(data);
        })
        .catch(error => console.error(error));
});

// Class Exercises:
const getStudentsAvgAboveThree = data => {
    const students = data.filter(student => student.averageGrade > 3);
    students.forEach(student => {
        console.log(`${student.firstName}`);
    });
}
const getFemaleNamesAvgFive = data => {
    const students = data.filter(student => student.gender === 'Female' && student.averageGrade === 5);
    students.forEach(student => {
        console.log(`${student.firstName}`);
    });
}
const getMalesFromSkopjeOver18 = data => {
    const students = data.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18);
    students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName}`);
    });
}
const getFemaleAvgGradeOver24 = data => {
    const students = data.filter(student => student.age > 24);
    students.forEach(student => {
        console.log(`${student.firstName}, Average Grade:${student.averageGrade}`);
    });
}
const getMalesStartingBAvgAboveTwo = data => {
    const getFirstChar = string => string.slice(0, 1);
    const students = data.filter(student => getFirstChar(student.firstName) === 'B' && student.averageGrade > 2);
    students.forEach(student => {
        console.log(`${student.firstName}, Average Grade:${student.averageGrade}`);
    });
}

// Homework Exercises:
const getStudentsOver30 = data => {
    const students = data.filter(student => student.age > 30);
    students.forEach(student => {
        console.log(`${student.firstName}, Age:${student.age}`);
    });
}
const getStudentsFromCityStartingB = data => {
    const getFirstChar = string => string.slice(0, 1);
    const students = data.filter(student => getFirstChar(student.city) === 'B');
    students.forEach(student => {
        console.log(`${student.firstName}, City:${student.city}`);
    });
}
const getAllEmails = data => {
    let emailArray = [];
    data.forEach(student => emailArray.push(student.email));
    console.log(emailArray);
}
const getStudentsWithAvgThree = data => {
    const students = data.filter(student => student.averageGrade === 3);
    students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName}`);
    });
}
const countByGender = data => {
    let genderCount = {
        maleCount: 0,
        femaleCount: 0,
        printResults: () => {console.log(`Males: ${genderCount.maleCount} | Females: ${genderCount.femaleCount}`)}
    };
    data.forEach(student => {
        if(student.gender === 'Male') {
            genderCount.maleCount++;
        } else {
            genderCount.femaleCount++;
        }
    });
    genderCount.printResults();
}