function solution(maps) {
  let dx = [0, 1, 0, -1]
  let dy = [1, 0, -1, 0]

  function dfs(x, y, visited) {
    visited[x][y] = true
    let value = parseInt(maps[x][y])

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]

      if (
        nx >= 0 &&
        nx < maps.length &&
        ny >= 0 &&
        ny < maps[0].length &&
        !visited[nx][ny] &&
        maps[nx][ny] !== 'X'
      ) {
        value += dfs(nx, ny, visited)
      }
    }

    return value
  }

  let islands = []
  let visited = new Array(maps.length)
    .fill(null)
    .map(() => new Array(maps[0].length).fill(false))

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] !== 'X' && !visited[i][j]) {
        islands.push(dfs(i, j, visited))
      }
    }
  }

  if (islands.length === 0) {
    return [-1]
  }

  islands.sort((a, b) => a - b)
  return islands
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']))

/*
계획

시간/공간 복잡도

예상 유형
DFS

배운 점
*/
