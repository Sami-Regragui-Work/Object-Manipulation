import { employees } from "../dataset.js";

const tbody = document.getElementById("employees-tbody");

function afficherEmployes(emplArr) {
    emplArr.forEach((employee) => {
        tbody.innerHTML += `<tr><td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.age}</td>
        <td>${employee.department}</td>
        <td>${employee.position}</td>
        <td>${employee.salary}</td>
        <td>${employee.skills.join(",")}</td>
        <td>${employee.joinDate}</td>
        <td>${employee.email}</td>
        <td>${employee.projects.join(",")}</td>
        <td>${employee.isActive}</td>
        <td>${employee.languages.join(",")}</td></tr>`;
    });
}

afficherEmployes(employees);

document.getElementById("show").addEventListener("click", () => {
    tbody.style.display = "block";
});
document.getElementById("hide").addEventListener("click", () => {
    tbody.style.display = "none";
});
