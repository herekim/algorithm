function solution(no, works) {
  if (works.reduce((a, b) => a + b) <= no) {
    return 0
  }

  const heap = new MaxHeap()
  for (const work of works) {
    heap.push(work)
  }

  for (let i = 0; i < no; i += 1) {
    heap.push(heap.pop() - 1)
  }

  return heap.heap.reduce((a, b) => a + b * b)
}
