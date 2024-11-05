export default class Validation {
  static validateAccount(account) {
    const error = {
      isValid: true,
      message: "",
    };

    if (!account.trim()) {
      error.isValid = false;
      error.message = "The Account Cannot Be Blank.";
      return error;
    }

    if (!/^\d+$/.test(account)) {
      error.isValid = false;
      error.message = "The Account Must Be Number Only.";
      return error;
    }

    if (account.length < 4 || account.length > 6) {
      error.isValid = false;
      error.message = "The Account Must Be From 4-6 Digit.";
      return error;
    }

    return error;
  }

  static validateName(name) {
    const error = {
      isValid: true,
      message: "",
    };

    if (!name.trim()) {
      error.isValid = false;
      error.message = "Name cannot be blank";
      return error;
    }

    if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(name)) {
      error.isValid = false;
      error.message = "Name can only contain letters";
      return error;
    }

    return error;
  }

  static validateEmail(email) {
    const error = {
      isValid: true,
      message: "",
    };

    if (!email.trim()) {
      error.isValid = false;
      error.message = "Email cannot be blank";
      return error;
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      error.isValid = false;
      error.message = "Invalid email format";
      return error;
    }

    return error;
  }

  static validatePassword(password) {
    const error = {
      isValid: true,
      message: "",
    };

    if (!password) {
      error.isValid = false;
      error.message = "Password cannot be blank";
      return error;
    }

    if (password.length < 6 || password.length > 10) {
      error.isValid = false;
      error.message = "Password must be 6-10 characters long";
      return error;
    }

    if (!/(?=.*\d)/.test(password)) {
      error.isValid = false;
      error.message = "Password must contain at least 1 number";
      return error;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      error.isValid = false;
      error.message = "Password must contain at least 1 uppercase letter";
      return error;
    }

    if (!/(?=.*[!@#$%^&*])/.test(password)) {
      error.isValid = false;
      error.message = "Password must contain at least 1 special character";
      return error;
    }

    return error;
  }

  static validateDate(date) {
    const error = {
      isValid: true,
      message: "",
    };

    if (!date) {
      error.isValid = false;
      error.message = "Work date cannot be blank";
      return error;
    }

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!dateRegex.test(date)) {
      error.isValid = false;
      error.message = "Work date must be in mm/dd/yyyy format";
      return error;
    }

    return error;
  }

  static validateSalary(salary) {
    const error = {
      isValid: true,
      message: "",
    };

    if (!salary) {
      error.isValid = false;
      error.message = "Basic salary cannot be blank";
      return error;
    }

    const salaryNum = Number(salary);
    if (isNaN(salaryNum)) {
      error.isValid = false;
      error.message = "Basic salary must be a number";
      return error;
    }

    if (salaryNum < 1000000 || salaryNum > 20000000) {
      error.isValid = false;
      error.message = "Basic salary must be between 1,000,000 and 20,000,000";
      return error;
    }

    return error;
  }

  static validatePosition(position) {
    const error = {
      isValid: true,
      message: "",
    };

    if (position === "Select position") {
      error.isValid = false;
      error.message = "Please select a position";
      return error;
    }

    const validPositions = ["Sếp", "Trưởng phòng", "Nhân viên"];
    if (!validPositions.includes(position)) {
      error.isValid = false;
      error.message = "Invalid position";
      return error;
    }

    return error;
  }

  static validateWorkHours(hours) {
    const error = {
      isValid: true,
      message: "",
    };

    if (!hours) {
      error.isValid = false;
      error.message = "Work hours cannot be blank";
      return error;
    }

    const hoursNum = Number(hours);
    if (isNaN(hoursNum)) {
      error.isValid = false;
      error.message = "Work hours must be a number";
      return error;
    }

    if (hoursNum < 80 || hoursNum > 200) {
      error.isValid = false;
      error.message = "Work hours must be between 80 and 200 hours";
      return error;
    }

    return error;
  }

  static validateForm(formData) {
    const errors = {
      isValid: true,
      fields: {},
    };

    const checks = {
      account: this.validateAccount(formData.account),
      name: this.validateName(formData.name),
      email: this.validateEmail(formData.email),
      password: this.validatePassword(formData.password),
      startDate: this.validateDate(formData.startDate),
      basicSalary: this.validateSalary(formData.basicSalary),
      position: this.validatePosition(formData.position),
      workHours: this.validateWorkHours(formData.workHours),
    };

    for (const field in checks) {
      if (!checks[field].isValid) {
        errors.isValid = false;
        errors.fields[field] = checks[field].message;
      }
    }

    return errors;
  }
}
