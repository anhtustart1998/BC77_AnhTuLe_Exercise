export default class Employee {
  constructor(
    account,
    name,
    email,
    password,
    startDate,
    basicSalary,
    position,
    workHours
  ) {
    this.account = account;
    this.name = name;
    this.email = email;
    this.password = password;
    this.startDate = startDate;
    this.basicSalary = parseFloat(basicSalary);
    this.position = position;
    this.workHours = parseFloat(workHours);
    this.totalSalary = this.calculateTotalSalary();
    this.rating = this.calculateRating();
  }

  calculateTotalSalary() {
    switch (this.position) {
      case "Sếp":
        return this.basicSalary * 3;
      case "Trưởng phòng":
        return this.basicSalary * 2;
      case "Nhân viên":
        return this.basicSalary;
      default:
        return 0;
    }
  }

  calculateRating() {
    if (this.workHours >= 192) return "Xuất sắc";
    if (this.workHours >= 176) return "Giỏi";
    if (this.workHours >= 160) return "Khá";
    return "Trung bình";
  }
}
