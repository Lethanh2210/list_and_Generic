import {Student} from "./Student";

export class ClassScore{
    head: Student | null;
    tail: Student | null;
    size: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name,score){
        let student = new Student(name,score);
        student.next = this.head;
        this.head = student;
        if(!this.tail){
            this.tail = student;
        }
    }

    insertLast(name,score){
        let student = new Student(name,score);
        student.next = null;
        this.tail.next = student;
        this.tail = student;
        if(!this.head){
            this.head = student;
        }
    }

    showList(){
        let student = this.head;
        while(student !== null){
            console.log(student.showStudent());
            student = student.next;
        }
    }

    totalStudentsFail(){
        let student = this.head;
        let studentsFail = 0;
        while (student !== null){
            if(student.score <= 5){
                studentsFail++;
            }
            student = student.next;
        }
    }

    listStudentMaxScore(){
        let student = this.head;
        let maxScore = student.score;
        student = student.next;
        while (student !== null){
            if(student.score > maxScore){
                maxScore = student.score;
            }
            student = student.next;
        }
    }

    findByName(name: string){
        let student = this.head;
        name = name.toLowerCase();
        while(student !== null){
            let nameStudent = student.name.toLowerCase();
            let m = name.length;
            let n = nameStudent.length;
            let j;
            for (let i = 0; i <= n - m; i++) {
                for (j = 0; j < m; j++)
                    if (nameStudent[i + j] !== name[j]) {
                        break;
                    }
                if (j === m)
                    console.log(student.showStudent());
            }
            student = student.next;
        }
    }
}