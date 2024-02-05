import DoubleListNode from "../../listNode/double";

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Checks if linked list is empty
   * @returns {boolean} True if empty, false if not empty
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Insert new node into linked list
   * @param {*} data Data that will be stored in list node
   * @returns {DoubleListNode} The head node of the list
   */
  insert(data) {
    const newNode = new DoubleListNode(data);

    if (this.isEmpty()) {
      this.head = newNode;
      return this.head;
    }

    let runner = this.head;

    while (runner.next) {
      runner = runner.next;
    }

    runner.next = newNode;
    newNode.previous = runner;
  }

  /**
   * Print every node in linked list
   */
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    }

    let runner = this.head;

    while (runner) {
      console.table(runner);
      runner = runner.next;
    }
  }
}