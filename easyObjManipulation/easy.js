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
    let uniques = [emplArr[0].department];

    for (let ind in emplArr.slice(1)) {
        let isUnique = true;
        let department = emplArr[ind].department;
        for (let uniq of uniques) {
            if (department == uniq) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) uniques = [...uniques, department];
    }
    return uniques;
}

// Ex10
function hasEmployeesWithoutProjects(emplArr) {
    for (let employee of emplArr) if (!employee.projects.length) return true;
    return false;
}

console.log(hasEmployeesWithoutProjects(employees));
