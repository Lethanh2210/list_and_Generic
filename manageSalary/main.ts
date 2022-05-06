import {EmployerSalary} from "./EmployerSalary";
import {ManageSalary} from "./ManageSalary";

let manageSalary = new ManageSalary();
manageSalary.addSalary('1',20000);
manageSalary.addSalary('2',30000);
manageSalary.showListSalary();
console.log(manageSalary.totalSalary());
console.log(manageSalary.highestMonth_Salary());