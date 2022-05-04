"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.addFirstNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.addLastNode = function (data) {
        var node = new Node_1.Node(data);
        this.tail.next = node;
        node.next = null;
        this.tail = node;
        if (!this.head) {
            this.head = node;
        }
        this.size++;
    };
    LinkedList.prototype.sizeOfLinkedList = function () {
        var count = 0;
        var value = this.head;
        while (value !== null) {
            count++;
            value = value.next;
        }
        return count;
    };
    LinkedList.prototype.showLinkedList = function () {
        var value = this.head;
        while (value !== null) {
            console.log(value.data);
            value = value.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
