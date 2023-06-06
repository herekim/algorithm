function solution(s, e) {
  let check = Array.from({ length: 10001 }, () => 0)
  let distance = Array.from({ length: 10001 }, () => 0)
  let queue = []

  queue.push(s)
  check[s] = 1

  while (queue.length) {
    let x = queue.shift()

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return distance[x] + 1
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1
        queue.push(nx)
        distance[nx] = distance[x] + 1
      }
    }
  }
}

console.log(solution(8, 3))

/*
계획
1. BFS를 이용해서 내 위치에서 송아지 위치까지 탐색한다.
2. 내 위치와 방문을 담은 배열을 만들고, 내 위치는 BFS의 탐색 레벨이다. 즉 결과가 되는 값.

시간 복잡도
1. O(n)

예상 유형
BFS

배운 점
- for (let nx of [x - 1, x + 1, x + 5]) 이런식으로 표현할 수 있다.
- BFS든 DFS든 종료 조건 매우 중요.
*/
