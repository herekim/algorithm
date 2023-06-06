function solution(n, array) {
  var answer = 0

  // 인접리스트 만들기
  const graph = Array.from(Array(n + 1), () => [])
  // 체크배열 만들기 (뒤로가기 못하도록)
  const check = Array.from({ length: n + 1 }, () => 0)

  // 인접행렬에 연결 추가하기
  for (const [a, b] of array) {
    graph[a].push(b)
  }

  // 그래프의 DFS 탐색
  function dfs(m) {
    if (m === n) {
      answer++
    } else {
      for (let i = 0; i < graph[m].length; i++) {
        if (check[graph[m][i]] === 0) {
          check[graph[m][i]] = 1
          dfs(graph[m][i])
          check[graph[m][i]] = 0
        }
      }
    }
  }

  check[1] = 1
  dfs(1)
  return answer
}

console.log(
  solution(5, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ]),
)

/*
계획
1. 인접 리스트를 만든다.
2. 체크배열을 만든다.
3. dfs로 탐색하면서 1부터 각 정점의 연결된 정점을 탐색한다.

시간 복잡도
O(n)

예상 유형
DFS

배운 점
- 정점을 탐색할 땐 인접리스트
- 정점을 조회할 떈 인접행렬
*/
