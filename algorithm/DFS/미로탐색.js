function solution(arr) {
  var answer = 0
  const dx = [-1, 0, 1, 0]
  const dy = [0, 1, 0, -1]

  function dfs(x, y) {
    if (x === arr[0].length - 1 && y === arr.length - 1) {
      answer++
    } //
    else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i]
        const ny = y + dy[i]

        if (
          nx >= 0 &&
          nx <= arr[0].length - 1 &&
          ny >= 0 &&
          ny <= arr.length - 1 &&
          arr[nx][ny] === 0
        ) {
          arr[nx][ny] = 1
          dfs(nx, ny)
          arr[nx][ny] = 0
        }
      }
    }
  }

  arr[0][0] = 1
  dfs(0, 0)

  return answer
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
]

console.log(solution(arr))

/*
계획

시간/공간 복잡도

예상 유형

배운 점

*/
