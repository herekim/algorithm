function solution(n, array) {
  var answer = 0

  // 인접행렬 만들기
  const matrix = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
  // 체크배열 만들기 (뒤로가기 못하도록)
  const check = Array.from({ length: n + 1 }, () => 0)

  // 인접행렬에 연결 추가하기
  for (const [a, b] of array) {
    matrix[a][b] = 1
  }

  // 그래프의 DFS 탐색
  function dfs(m) {
    if (m === n) {
      answer++
    } else {
      for (let i = 1; i < n + 1; i++) {
        if (matrix[m][i] === 1 && check[i] === 0) {
          check[i] = 1
          dfs(i)
          check[i] = 0
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
1. 인접행렬을 만든다.
2. 체크배열을 만든다.
3. dfs로 탐색하면서 1부터 n까지 경로를 탐색한다.

시간 복잡도
O(n^2) or O(2^n)

예상 유형
DFS

배운 점
*/
