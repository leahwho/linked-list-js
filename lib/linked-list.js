// Defines a node in the singly linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    constructor() {
        this.#head = null;
    }

    /*
    method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addFirst(value) {
        const newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: ?
    Space Complexity: ?
    */
    search(value) {
        let curr = this.#head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
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
        if (!this.#head) return null;
        let max = -Infinity;
        let curr = this.#head;
        while (curr) {
            if (curr.value > max) {
                max = curr.value;
            }
            curr = curr.next;
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
        if (!this.#head) return null;
        let min = Infinity;
        let curr = this.#head;
        while (curr) {
            if (curr.value < min) {
                min = curr.value;
            }
            curr = curr.next;
        }
        return min;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    length() {
        let length = 0;
        let curr = this.#head;
        while (curr) {
            length += 1;
            curr = curr.next;
        }
        return length;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: ?
    Space Complexity: ?
     */
    getAtIndex(index) {
        let i = 0;
        let curr = this.#head;
        while (curr) {
            if (index === i) {
                return (curr.value);
            }
            i += 1;
            curr = curr.next;
        }
        return null;
    }

    /*
    method to print all the values in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    visit() {
        let curr = this.#head;
        while (curr) {
            console.log(curr.value)
            curr = curr.next;
        }
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
    delete(value) {
        // no-op if list is empty
        if (!this.#head) return;

        // reset head if first element is a match
        if (this.#head.value === value) {
            this.#head = this.#head.next;
            return;
        }

        let curr = this.#head;
        while (curr) {
            if (curr.next && curr.next.value === value) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: ?
    Space Complexity: ?
    */
    reverse() {
        let curr = this.#head;
        let prev = null;
        let next = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.#head = prev;
    }

    // Advanced Exercises

    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    findMiddleValue() {
        let slow = this.#head;
        let fast = this.#head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next; // the slow pointer moves 1 node at a time
            fast = fast.next.next; // the fast pointer moves 2 nodes at a time until it reaches the end
        }
        return slow.value;
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        const length = this.length();
        let index = 0;
        let curr = this.#head;

        while (curr) {
            if (length - index === n) {
                return curr.value;
            }
            curr = curr.next;
            index += 1;
        }
        return null;
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: ?
    Space Complexity: ?
    */
    hasCycle() {
        let slow = this.#head;
        let fast = this.#head;

        while (fast != null && fast.next != null) {
            slow = slow.next; // the slow pointer moves 1 node at a time
            fast = fast.next.next; // the fast pointer moves 2 nodes at a time until it reaches the end
            if (fast === slow) return true;
        }
        return false;
    }


    // Additional Exercises 

    /*
    returns the value in the first node
    returns nil if the list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getFirst() {
        return this.#head.value;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addLast(value) {
        if (!this.#head) {
            this.#head = new Node(value);
            return;
        }

        let curr = this.#head;
        while (curr && curr.next) {
            curr = curr.next;
        }
        curr.next = new Node(value);
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getLast() {
        if (!this.#head) return null;

        let curr = this.#head;
        while (curr.next) {
            curr = curr.next;
        }
        return curr.value;
    }

    /*
    method to insert a new node with specific data value, assuming the linked
    list is sorted in ascending order
    Time Complexity: ?
    Space Complexity: ?
    */
    insertAscending(value) {
        const newNode = new Node(value);

        // if the list is empty, set head to the new node
        if (!this.#head) {
            this.#head = newNode;
            return;
        }

        // if inserting at the beginning, reset head
        if (this.#head.value > newNode.value) {
            newNode.next = this.#head;
            this.#head = newNode;
            return;
        }

        let curr = this.#head;
        while (curr.next && curr.next.value < newNode.value) {
            curr = curr.next;
        }
        newNode.next = curr.next || null;
        curr.next = newNode;
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