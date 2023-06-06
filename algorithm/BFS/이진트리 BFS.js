function solution(n) {
  let answer = ''
  let queue = []
  queue.push(1)
  while (queue.length) {
    let v = queue.shift()
    answer += v + ' '
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > n) continue
      queue.push(nv)
    }
  }
  return answer
}

console.log(solution(8))

/*
계획
큐 만들고, while문 돌면서 큐가 빌 때까지 반복

시간 복잡도
O(n)

예상 유형
BFS

배운 점
- BFS는 Queue의 특성을 이용한 문제다.
*/
