class Queue {
  constructor() {
    this.queue = []
    this.front = 0
    this.rear = 0
  }

  enqueue(value) {
    this.queue[this.rear++] = value
  }

  dequeue(value) {
    const value = this.queue[this.front]
    delete this.queue[this.front]
    this.front += 1
    return value
  }

  peak() {
    return this.queue[this.front]
  }

  size() {
    return this.rear - this.front
  }
}
