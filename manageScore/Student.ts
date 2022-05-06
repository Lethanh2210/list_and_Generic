export class Student{
    score : number;
    name : string;
    next : Student | null;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    showStudent(){
        return {name : this.name, score: this.score};
    }

}