class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(newValue) {
    const newNode = new Node(newValue)
    if (this.head === null) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newValue
      this.tail = newNode
    }
    this.size += 1
  }

  dequeue() {
    const value = this.head.value
    this.head = this.head.next
    this.size += 1
    return value
  }

  peak() {
    return this.head.value
  }
}
