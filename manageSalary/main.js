"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ManageSalary_1 = require("./ManageSalary");
var manageSalary = new ManageSalary_1.ManageSalary();
manageSalary.addSalary('1', 20000);
manageSalary.addSalary('2', 30000);
manageSalary.showListSalary();
console.log(manageSalary.totalSalary());
console.log(manageSalary.highestMonth_Salary());
