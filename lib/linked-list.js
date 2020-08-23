// Defines a node in the singly linked list
class Node {
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    #tail;
    constructor() {
        this.#head = null;
        this.#tail = null;
    }

    /*
    method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addFirst(value) {
        if (this.#head === null) {
            this.#head = this.#tail = new Node(value);
        } else {
            const new_node = new Node(value, this.next = this.#head);
            this.#head.previous = new_node;
            this.#head = new_node;
        }
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: ?
    Space Complexity: ?
    */
    search(value) {
        if (this.#head === null ) {
            return false;
        }

        let current = this.#head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: ?
    Space Complexity: ?
    */
    findMax() {
        if (this.#head === null) {
            return null;
        }

        let max = this.#head.value;
        let current = this.#head;

        while (current !== null) {
            if (current.value > max) {
                max = current.value;
            }
            current = current.next;
        }
        return max;
    }
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity: ?
    Space Complexity: ?
     */
    findMin() {
        if (this.#head === null) {
            return null;
        }

        let min = this.#head.value;
        let current = this.#head;

        while (current !== null) {
            if (current.value < min) {
                min = current.value;
            }
            current = current.next;
        }
        return min;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    length() {
        if (this.#head === null) {
            return 0;
        }

        let current = this.#head;
        let count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: ?
    Space Complexity: ?
     */
    getAtIndex(index) {
        if (this.#head === null) {
            return null;
        }

        let count = 0;
        let current = this.#head;

        while (count !== index) {
            current = current.next;
            count++;
        }

        return current.value;
    }

    /*
    method to print all the values in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    visit() {
        if (this.#head === null) {
            console.log("Yer list is empty");
            return;
        }

        let current = this.#head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
    delete(value) {
        if (this.#head === null) {
            return;
        }

        if (this.#head.value === value) {
            this.#head.next.previous = null;
            this.#head = this.#head.next;
            return;
        }
            
        if (this.#tail.value === value) {
            this.#tail = this.#tail.previous;
            this.#tail.next = null;
            return;
        }

        let current = this.#head;
        while (current !== null) {
            if (current.value === value) {
                current.next.previous = current.previous;
                current.previous.next = current.next;
                return;
            }
            current = current.next;
        }
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: ?
    Space Complexity: ?
    */
    reverse() {
        let temp = null;
        let current = this.#head;

        while (current !== null) {
            temp = current.previous;
            current.previous = current.next;
            current.next = temp;
            current = current.previous;
        }

        if (temp !== null) {
            this.#tail = this.#head;
            this.#head = temp.previous;
        }
    }

    // Advanced Exercises

    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    findMiddleValue() {
        if (this.#head === null) {
            return null;
        }

        const length = this.length();
        const index = Math.floor(length/2);
        return this.getAtIndex(index);
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: ?
    Space Complexity: ?
    */
    hasCycle() {
        throw new Error("This method hasn't been implemented yet!");
    }


    // Additional Exercises 

    /*
    returns the value in the first node
    returns nil if the list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getFirst() {
        if (this.#head === null) {
            return null;
        }

        return this.#head.value;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addLast(value) {
        if (this.#tail === null) {
            this.addFirst(value);
        } else {
            const new_tail = new Node(value);
            new_tail.previous = this.#tail;
            this.#tail.next = new_tail;
            this.#tail = new_tail;
        }
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getLast() {
        if (this.#tail === null) {
            return null;
        }

        return this.#tail.value;
    }

    /*
    method to insert a new node with specific data value, assuming the linked
    list is sorted in ascending order
    Time Complexity: ?
    Space Complexity: ?
    */
    insertAscending(value) {
        if (this.#head === null) {
            this.#head = new Node(value);
            return;
        }

        if (this.#head.value > value) {
            const new_node = new Node(value);
            new_node.next = this.#head;
            this.#head = new_node;
            return;
        }

        if (this.#tail.value < value) {
            const new_node = new Node(value);
            this.#tail.next = new_node;
            new_node.previous = this.#tail;
            this.#tail = new_node;
            return;
        }

        let current = this.#head;
        while (current !== null) {
            if (value > current.value && value < current.next.value) {
                const new_node = new Node(value);
                current.next = new_node;
                new_node.previous = current;
                new_node.next = current.next;
                current.previous = new_node;
                return;
            }
            current = current.next;
        }
    }

    /*
    Helper method for tests
    Creates a cycle in the linked list for testing purposes
    Assumes the linked list has at least one node
    */
    createCycle() {
        if (!this.#head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.#head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.#head;
    }

    end

}

module.exports = LinkedList;