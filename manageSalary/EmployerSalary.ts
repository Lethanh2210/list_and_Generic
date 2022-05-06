export class EmployerSalary{
    month : string;
    salary : number;
    next : EmployerSalary | null;

    constructor(month,salary) {
        this.month = month;
        this.salary = salary;
    }

    renderSalary(){
        return {month: this.month, salary: this.salary};
    }
}