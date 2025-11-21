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
        <td>${employee.joinDate}</td>
        <td>${employee.email}</td>
        <td>${employee.isActive}</td></tr>`;
        const skills = document.createElement("tr");
        employee.skills.forEach((skill) => {
            skills.innerHTML += `<td>${skill}</td>`;
        });
        const projects = document.createElement("tr");
        employee.projects.forEach((project) => {
            projects.innerHTML += `<td>${project}</td>`;
        });
        const languages = document.createElement("tr");
        employee.languages.forEach((language) => {
            languages.innerHTML += `<td>${language}</td>`;
        });
        tbody.appendChild(skills);
        tbody.appendChild(projects);
        tbody.appendChild(languages);
    });
}

afficherEmployes(employees);

document.getElementById("show").addEventListener("click", () => {
    tbody.style.display = "block";
});
document.getElementById("hide").addEventListener("click", () => {
    tbody.style.display = "none";
});
