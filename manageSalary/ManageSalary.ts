import {EmployerSalary} from "./EmployerSalary";
import {Student} from "../manageScore/Student";

export class ManageSalary{
    head : EmployerSalary | null;
    tail : EmployerSalary | null;
    size = 0;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addSalary(month,salary){
        let employerSalary = new EmployerSalary(month,salary);
        employerSalary.next = this.head;
        this.head = employerSalary;
        if(!this.tail){
            this.tail = employerSalary;
            this.tail.next = null;
        }
    }

    showListSalary(){
        let employerSalary = this.head;
        while (employerSalary !== null){
            console.log(employerSalary.renderSalary());
            employerSalary = employerSalary.next;
        }
    }

    totalSalary(){
        let value = this.head;
        let total = 0;
        while (value !== null){
            total += value.salary;
            value = value.next;
        }
        return total;
    }

    highestMonth_Salary(){
        let value = this.head;
        let highestSalary = this.head;
        while (value !== null){
            if(value.salary > highestSalary.salary){
                highestSalary = value;
            }
            value = value.next;
        }
        return highestSalary.renderSalary();
    }
}