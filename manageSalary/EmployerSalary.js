"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployerSalary = void 0;
var EmployerSalary = /** @class */ (function () {
    function EmployerSalary(month, salary) {
        this.month = month;
        this.salary = salary;
    }
    EmployerSalary.prototype.renderSalary = function () {
        return { month: this.month, salary: this.salary };
    };
    return EmployerSalary;
}());
exports.EmployerSalary = EmployerSalary;
