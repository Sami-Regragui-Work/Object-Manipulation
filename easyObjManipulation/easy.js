import { employees } from "../dataset.js";

// Basic Data Retrieval
// Ex1
function getFirstEmployeeFirstName(emplArr) {
    return emplArr[0].firstName;
}

// Ex2
function getLastEmployeeLastName(emplArr) {
    return emplArr[emplArr.length - 1].lastName;
}

// Ex3
function getEmployeeDepartmentById(emplArr, id) {
    for (let employee of emplArr) {
        if (employee.id == id) return employee.department;
    }
}

// Ex4
function countEmployees(emplArr) {
    return emplArr.length;
}

// Ex5
function hasInactiveEmployees(emplArr) {
    return !emplArr.isActive;
}

// Simple Calculations
// Ex6
function calculateAverageAge(emplArr) {
    let sumAge = 0;
    for (let employee of emplArr) {
        sumAge += employee.age;
    }
    return sumAge / countEmployees(emplArr);
}

// Ex7
function getHighestPaidEmployee(emplArr) {
    let highestSalary = emplArr[0].salary;
    let richestEmployee = emplArr[0];
    for (let employee of emplArr.slice(1)) {
        if (highestSalary < employee.salary) {
            richestEmployee = employee;
            highestSalary = richestEmployee.salary;
        }
    }
    return richestEmployee;
}

// Ex8
function countEmployeesInDepartment(emplArr, department) {
    let empInDep = 0;
    for (let employee of emplArr) {
        if (employee.department == department) empInDep++;
    }
    return empInDep;
}

// Ex9
function getUniqueDepartments(emplArr) {
    let uniques;

    // for (let ind in emplArr.slice(0,-1)) {
    //     let nextInd = ind + 1;
    //     while (nextInd < countEmployees(emplArr))
    // }
}
// console.log(getLastEmployeeLastName(employees));
