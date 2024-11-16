import Employee from "../models/employee.js";
import EmployeeManage from "../view/EmployeeManage.js";
import { getElement } from "../util/Util.js";
import Validation from "../util/validation.js";

let employeeManage = new EmployeeManage();
let employeeList = [];

/* ---------------------- Load Data From Local Storage ---------------------- */
const loadData = () => {
  const storedData = localStorage.getItem("employeeList");
  employeeList = storedData ? JSON.parse(storedData) : [];
  employeeManage.displayEmployeeList(employeeList);
};

/* ----------------------- Save Data To Local Storage ----------------------- */
const saveData = () => {
  localStorage.setItem("employeeList", JSON.stringify(employeeList));
};

/* --------------------- Reset Form State Function --------------------- */
const resetFormState = () => {
  employeeManage.clearFormFields();
  const accountInput = getElement("#tknv");
  if (accountInput) {
    accountInput.disabled = false;
    accountInput.value = "";
  }
  getElement("#btnThemNV").style.display = "block";
  getElement("#btnCapNhat").style.display = "none";
  getElement("#header-title").innerHTML = "Log In";

  // Clear all validation messages
  const validationMessages = document.querySelectorAll(".sp-thongbao");
  validationMessages.forEach((message) => {
    message.style.display = "none";
    message.innerHTML = "";
  });
};

/* --------------------- CRUD Operations --------------------- */

// Create Employee
window.addEmployee = () => {
  const formData = employeeManage.getFormInfo();
  const validationResult = Validation.validateForm(formData);

  if (!validationResult.isValid) {
    employeeManage.showFormMessage(validationResult.fields);
    return;
  }

  if (employeeList.some((emp) => emp.account === formData.account)) {
    employeeManage.showFormMessage({ account: "Tài khoản đã tồn tại!" });
    return;
  }

  const employee = new Employee(
    formData.account,
    formData.name,
    formData.email,
    formData.password,
    formData.startDate,
    formData.basicSalary,
    formData.position,
    formData.workHours
  );

  employeeList.push(employee);
  saveData();
  employeeManage.displayEmployeeList(employeeList);
  resetFormState();
  $("#myModal").modal("hide");
};

// Delete Employee
window.deleteEmployee = (account) => {
  if (!confirm("Bạn có chắc muốn xóa nhân viên này?")) return;

  employeeList = employeeList.filter((emp) => emp.account !== account);
  saveData();
  employeeManage.displayEmployeeList(employeeList);
};

// Edit Employee
window.editEmployee = (account) => {
  const employee = employeeList.find((emp) => emp.account === account);
  if (!employee) return;

  employeeManage.fillFormForEdit(employee);
  getElement("#btnThemNV").style.display = "none";
  getElement("#btnCapNhat").style.display = "block";
  getElement("#header-title").innerHTML = "Cập nhật nhân viên";
};

// Open Add Employee Modal
window.openAddEmployeeModal = () => {
  resetFormState();
  getElement("#header-title").innerHTML = "Thêm nhân viên";
  $("#myModal").modal("show");
};

// Update Employee Functions:
window.updateEmployee = () => {
  const formData = employeeManage.getFormInfo();
  const validationResult = Validation.validateForm(formData);

  if (!validationResult.isValid) {
    employeeManage.showFormMessage(validationResult.fields);
    return;
  }

  const updatedEmployee = new Employee(
    formData.account,
    formData.name,
    formData.email,
    formData.password,
    formData.startDate,
    formData.basicSalary,
    formData.position,
    formData.workHours
  );

  const index = employeeList.findIndex(
    (emp) => emp.account === formData.account
  );
  if (index !== -1) {
    employeeList[index] = updatedEmployee;
    saveData();
    employeeManage.displayEmployeeList(employeeList);
    resetFormState();
    $("#myModal").modal("hide");
  }
};

/* --------------------- Search and Sort Functions --------------------- */

// Search Employee
window.searchEmployee = () => {
  const searchTerm = getElement("#searchName").value.toLowerCase();
  const filteredList = searchTerm
    ? employeeList.filter((emp) =>
        emp.rating.toLowerCase().includes(searchTerm)
      )
    : employeeList;
  employeeManage.displayEmployeeList(filteredList);
};

// Sort Employees
window.sortEmployeesAsc = () => {
  employeeList.sort((a, b) => a.account.localeCompare(b.account));
  employeeManage.displayEmployeeList(employeeList);
};

window.sortEmployeesDesc = () => {
  employeeList.sort((a, b) => b.account.localeCompare(a.account));
  employeeManage.displayEmployeeList(employeeList);
};

/* --------------------- Event Listeners --------------------- */
document.addEventListener("DOMContentLoaded", () => {
  loadData();

  getElement("#btnThem")?.addEventListener("click", () => {
    resetFormState();
    getElement("#header-title").innerHTML = "Thêm nhân viên";
  });

  getElement("#searchName")?.addEventListener("input", searchEmployee);

  getElement("#password")?.addEventListener("input", (e) => {
    employeeManage.updatePasswordStrengthIndicator(e.target.value);
  });

  $("#myModal")
    .on("hidden.bs.modal", resetFormState)
    .on("show.bs.modal", function () {
      const accountInput = getElement("#tknv");
      if (accountInput && !accountInput.disabled) {
        resetFormState();
      }
    });
});
