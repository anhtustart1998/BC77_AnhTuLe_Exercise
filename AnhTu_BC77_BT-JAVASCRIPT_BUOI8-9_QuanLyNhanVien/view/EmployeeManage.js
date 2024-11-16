import { getElement } from "../util/Util.js";

export default class EmployeeManage {
  constructor() {}

  /* -------------- Function to retive all data from HTML Form ------------- */
  getFormInfo() {
    return {
      account: getElement("#tknv").value.trim(),
      name: getElement("#name").value.trim(),
      email: getElement("#email").value.trim(),
      password: getElement("#password").value,
      startDate: getElement("#datepicker").value,
      basicSalary: getElement("#luongCB").value.trim(),
      position: getElement("#chucvu").value,
      workHours: getElement("#gioLam").value.trim(),
    };
  }

  /* ----------- Function to load all employee data into HTML Table ----------- */
  displayEmployeeList(employeeList) {
    let content = "";
    employeeList.forEach((emp) => {
      content += `
      <tr>
          <td>${emp.account}</td>
          <td>${emp.name}</td>
          <td>${emp.email}</td>
          <td>${emp.startDate}</td>
          <td>${emp.position}</td>
          <td>${emp.totalSalary.toLocaleString()} VNĐ</td>
          <td>${emp.rating}</td>
          <td>
              <button class="btn btn-danger" onclick="deleteEmployee('${
                emp.account
              }')">
                  <i class="fa fa-trash"></i>
              </button>
              <button class="btn btn-info" onclick="editEmployee('${
                emp.account
              }')" data-toggle="modal" data-target="#myModal">
                  <i class="fa fa-pencil"></i>
              </button>
          </td>
      </tr>
      `;
    });

    getElement("#tableDanhSach").innerHTML = content;
  }

  /* ------------------- Funtion to show messsages into HTML ------------------ */
  showFormMessage(formMessages) {
    const errorFields = {
      account: "tbTKNV",
      name: "tbTen",
      email: "tbEmail",
      password: "tbMatKhau",
      startDate: "tbNgay",
      basicSalary: "tbLuongCB",
      position: "tbChucVu",
      workHours: "tbGiolam",
    };

    for (let field in formMessages) {
      const errorElement = getElement(`#${errorFields[field]}`);
      if (errorElement) {
        (errorElement.innerHTML = formMessages[field]),
          (errorElement.style.display = "block");
      }
    }
  }

  /* -------------- Funtion to clear all info & notification in the form ------------- */
  clearFormFields() {
    const form = getElement("form");
    if (form) {
      form.reset();
    }

    const errorElements = document.querySelectorAll(".sp-thongbao");
    errorElements.forEach((element) => {
      element.style.display = "none";
      element.innerHTML = "";
    });
  }

  /* ----------------- Function for fill the form when editing ---------------- */
  fillFormForEdit(employee) {
    const fieldMapping = {
      tknv: "account",
      luongCB: "basicSalary",
      chucvu: "position",
      gioLam: "workHours",
      name: "name",
      email: "email",
      password: "password",
      datepicker: "startDate",
    };

    for (let fieldId in fieldMapping) {
      const employeeProperty = fieldMapping[fieldId];
      getElement(`#${fieldId}`).value = employee[employeeProperty];
    }

    getElement("#tknv").disabled = true;
  }

  /* ------------------------ Password Stengthen Rating ----------------------- */
  updatePasswordStrengthIndicator(password) {
    const strengthBar = getElement("#password-strength");
    const strengthText = getElement("#password-strength-text");
    if (!strengthBar || !strengthText) return;

    let strength = 0;
    if (password.length >= 6) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;

    const strengthPercentage = (strength / 5) * 100;
    const strengthConfig = {
      0: { class: "bg-danger", text: "Very Weak" },
      1: { class: "bg-warning", text: "Weak" },
      2: { class: "bg-info", text: "Just Enough" },
      3: { class: "bg-primary", text: "Strong" },
      4: { class: "bg-success", text: "Very Strong" },
      5: { class: "bg-success", text: "State Of The Art!" },
    };

    strengthBar.style.width = `${strengthPercentage}%`;
    strengthBar.className = `progress-bar ${strengthConfig[strength].class}`;
    strengthText.textContent = strengthConfig[strength].text;
  }
}
