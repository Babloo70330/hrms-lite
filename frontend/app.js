const API = "https://hrms-lite-backend-xps9.onrender.com/api";

let allEmployees = [];

/* ================= EMPLOYEES ================= */

async function loadEmployees() {
  const res = await fetch(`${API}/employees/`);
  const data = await res.json();
  allEmployees = data;
  renderEmployeeTable(data);
  loadEmployeeDropdown();
}

function renderEmployeeTable(list) {
  const table = document.getElementById("employeeTable");
  table.innerHTML = "";

  if (list.length === 0) {
    table.innerHTML = `<tr><td colspan="5">No employees found</td></tr>`;
    return;
  }

  list.forEach(emp => {
    table.innerHTML += `
      <tr>
        <td>${emp.employee_id}</td>
        <td>${emp.full_name}</td>
        <td>${emp.email}</td>
        <td>${emp.department}</td>
        <td>
          <button onclick="deleteEmployee(${emp.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function filterEmployees() {
  const q = document.getElementById("emp-search").value.toLowerCase();
  const filtered = allEmployees.filter(e =>
    e.full_name.toLowerCase().includes(q) ||
    e.email.toLowerCase().includes(q) ||
    e.department.toLowerCase().includes(q)
  );
  renderEmployeeTable(filtered);
}

async function addEmployee() {
  const msg = document.getElementById("emp-msg");

  const employee_id = employee_idEl.value.trim();
  const full_name = full_nameEl.value.trim();
  const email = emailEl.value.trim();
  const department = departmentEl.value.trim();

  if (!employee_id || !full_name || !email || !department) {
    msg.innerText = "Please fill all fields";
    msg.style.color = "red";
    return;
  }

  const res = await fetch(`${API}/employees/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ employee_id, full_name, email, department })
  });

  if (res.ok) {
    msg.innerText = "Employee added successfully";
    msg.style.color = "green";
    employee_idEl.value = full_nameEl.value = emailEl.value = departmentEl.value = "";
    loadEmployees();
  } else {
    msg.innerText = "Employee already exists / invalid data";
    msg.style.color = "red";
  }
}

async function deleteEmployee(id) {
  if (!confirm("Delete this employee?")) return;
  await fetch(`${API}/employees/${id}/`, { method: "DELETE" });
  loadEmployees();
}

/* ================= ATTENDANCE ================= */

async function loadEmployeeDropdown() {
  const select = document.getElementById("att-employee");
  select.innerHTML = `<option value="">Select Employee</option>`;
  allEmployees.forEach(e => {
    select.innerHTML += `<option value="${e.id}">${e.full_name}</option>`;
  });
}

async function markAttendance() {
  const msg = document.getElementById("att-msg");
  const employee = attEmployee.value;
  const date = attDate.value;
  const status = attStatus.value;

  if (!employee || !date) {
    msg.innerText = "Please select employee and date";
    msg.style.color = "red";
    return;
  }

  const res = await fetch(`${API}/attendance/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ employee, date, status })
  });

  if (res.ok) {
    msg.innerText = "Attendance marked";
    msg.style.color = "green";
    loadAttendance();
  } else {
    msg.innerText = "Attendance already marked for this date";
    msg.style.color = "red";
  }
}

async function loadAttendance() {
  const res = await fetch(`${API}/attendance/`);
  const records = await res.json();
  const table = document.getElementById("attendanceTable");
  table.innerHTML = "";

  if (records.length === 0) {
    table.innerHTML = `<tr><td colspan="3">No attendance records</td></tr>`;
    return;
  }

records.forEach(r => {
  table.innerHTML += `
    <tr>
      <td>${r.employee}</td>
      <td>${r.employee_name}</td>
      <td>${r.date}</td>
      <td>${r.status}</td>
    </tr>
  `;
});


}

/* ================= INIT ================= */

const employee_idEl = document.getElementById("employee_id");
const full_nameEl = document.getElementById("full_name");
const emailEl = document.getElementById("email");
const departmentEl = document.getElementById("department");

const attEmployee = document.getElementById("att-employee");
const attDate = document.getElementById("att-date");
const attStatus = document.getElementById("att-status");

loadEmployees();
loadAttendance();



function allowOnlyChars(input) {
  // Allow only letters and spaces
  input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
}
