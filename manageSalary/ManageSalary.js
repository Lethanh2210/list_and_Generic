"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageSalary = void 0;
var EmployerSalary_1 = require("./EmployerSalary");
var ManageSalary = /** @class */ (function () {
    function ManageSalary() {
        this.size = 0;
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ManageSalary.prototype.addSalary = function (month, salary) {
        var employerSalary = new EmployerSalary_1.EmployerSalary(month, salary);
        employerSalary.next = this.head;
        this.head = employerSalary;
        if (!this.tail) {
            this.tail = employerSalary;
            this.tail.next = null;
        }
    };
    ManageSalary.prototype.showListSalary = function () {
        var employerSalary = this.head;
        while (employerSalary !== null) {
            console.log(employerSalary.renderSalary());
            employerSalary = employerSalary.next;
        }
    };
    ManageSalary.prototype.totalSalary = function () {
        var value = this.head;
        var total = 0;
        while (value !== null) {
            total += value.salary;
            value = value.next;
        }
        return total;
    };
    ManageSalary.prototype.highestMonth_Salary = function () {
        var value = this.head;
        var highestSalary = this.head;
        while (value !== null) {
            if (value.salary > highestSalary.salary) {
                highestSalary = value;
            }
            value = value.next;
        }
        return highestSalary.renderSalary();
    };
    return ManageSalary;
}());
exports.ManageSalary = ManageSalary;
