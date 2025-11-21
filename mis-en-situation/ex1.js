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

const skillsDiv = document.getElementById("skills-container");
const form = document.getElementById("employee-form");
let skillCounter = 0;

function addSkill() {
    skillsDiv.innerHTML += `<input type='text' name='skill_${++skillCounter}'></input><button type='button'>X</button>`;
}

function removeSkill(e) {
    const target = e.target;
    if (target.tagName == "BUTTON") {
        target.previousElementSibling.remove();
        target.remove();
    }
}

function addEmployee(e) {
    e.preventDefault();
    const inputs = Array.from(document.querySelectorAll("input, select"));
    const tr = document.createElement("tr");
    inputs.slice(0, 4).forEach((input) => {
        tr.innerHTML += `<td>${input.value}</td>`;
    });
    tr.innerHTML += `<td>${inputs
        .slice(4)
        .map((input) => input.value)
        .join(",")}</td>`;
    tbody.appendChild(tr);
    e.target.reset();
}

document.getElementById("add-skill-btn").addEventListener("click", addSkill);

form.addEventListener("submit", addEmployee);

skillsDiv.addEventListener("click", removeSkill);
