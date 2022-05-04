import {Node} from "./Node";

export class LinkedList<T>{
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFirstNode(data: T){
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
        this.size++;
    }

    addLastNode(data: T){
        let node = new Node(data);
        this.tail.next = node;
        node.next = null;
        this.tail = node;
        if(!this.head){
            this.head = node;
        }
        this.size++;
    }

    sizeOfLinkedList(){
        let count = 0;
        let value = this.head;
        while(value !== null){
            count++;
            value = value.next;
        }
        return count;
    }

    showLinkedList(){
        let value = this.head;
        while (value !== null){
            console.log(value.data);
            value = value.next
        }
    }
}
