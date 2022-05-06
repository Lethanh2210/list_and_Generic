"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassScore = void 0;
var Student_1 = require("./Student");
var ClassScore = /** @class */ (function () {
    function ClassScore() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ClassScore.prototype.insertFirst = function (name, score) {
        var student = new Student_1.Student(name, score);
        student.next = this.head;
        this.head = student;
        if (!this.tail) {
            this.tail = student;
        }
    };
    ClassScore.prototype.insertLast = function (name, score) {
        var student = new Student_1.Student(name, score);
        student.next = null;
        this.tail.next = student;
        this.tail = student;
        if (!this.head) {
            this.head = student;
        }
    };
    ClassScore.prototype.showList = function () {
        var student = this.head;
        while (student !== null) {
            console.log(student.showStudent());
            student = student.next;
        }
    };
    ClassScore.prototype.totalStudentsFail = function () {
        var student = this.head;
        var studentsFail = 0;
        while (student !== null) {
            if (student.score <= 5) {
                studentsFail++;
            }
            student = student.next;
        }
    };
    ClassScore.prototype.listStudentMaxScore = function () {
        var student = this.head;
        var maxScore = student.score;
        student = student.next;
        while (student !== null) {
            if (student.score > maxScore) {
                maxScore = student.score;
            }
            student = student.next;
        }
    };
    ClassScore.prototype.findByName = function (name) {
        var student = this.head;
        name = name.toLowerCase();
        while (student !== null) {
            var nameStudent = student.name.toLowerCase();
            var m = name.length;
            var n = nameStudent.length;
            var j = void 0;
            for (var i = 0; i <= n - m; i++) {
                for (j = 0; j < m; j++)
                    if (nameStudent[i + j] !== name[j]) {
                        break;
                    }
                if (j === m)
                    console.log(student.showStudent());
            }
            student = student.next;
        }
    };
    return ClassScore;
}());
exports.ClassScore = ClassScore;
