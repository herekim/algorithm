// (RE) x,y

function solution(maps) {
  const [startX, startY] = findTarget(maps, 'S')
  const [leverX, leverY] = findTarget(maps, 'L')

  const toLeverCount = getCount(maps, [startX, startY, 0], 'L')
  if (toLeverCount === -1) {
    return -1
  }
  const toEndCount = getCount(maps, [leverX, leverY, 0], 'E')
  if (toEndCount === -1) {
    return -1
  }

  return toLeverCount + toEndCount
}

function findTarget(maps, target) {
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === target) {
        return [i, j]
      }
    }
  }
}

function getCount(maps, startQueue, target) {
  const directionX = [1, -1, 0, 0]
  const directionY = [0, 0, 1, -1]

  const queue = [startQueue]

  const visited = Array(maps.length)
    .fill()
    .map(() => Array(maps[0].length).fill(false))

  while (queue.length > 0) {
    const [x, y, count] = queue.shift()

    if (maps[x][y] === target) {
      return count
    }

    for (let i = 0; i < 4; i++) {
      const nextX = x + directionX[i]
      const nextY = y + directionY[i]

      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX <= maps.length - 1 &&
        nextY <= maps[0].length - 1 &&
        maps[nextX][nextY] !== 'X'
      ) {
        if (!visited[nextX][nextY]) {
          visited[nextX][nextY] = true
          queue.push([nextX, nextY, count + 1])
        }
      }
    }
  }

  return -1
}

const maps = [
  'SOOOL', //
  'XXXXO', //
  'OOOOO', //
  'OXXXX', //
  'OOOOE', //
]
console.log(solution(maps))

/**
 * 계획
 * 1. 스타트부터 레버까지 bfs
 * 2. 레버부터 엔드까지 bfs
 *
 * 1. 시작 시점의 행렬 위치를 파악한다.
 * 2. 해당 위치부터 레버 위치까지 bfs를 돌아서 최단경로를 찾는다.
 * 3. 레버 위치부터 엔드 위치까지 bfs를 돌아서 최단경로를 찾는다.
 *
 * 시간&공간 복잡도
 * O(n^2)
 *
 * 예상 유형
 * bfs
 *
 * 정리
 * 1. 특정 지점부터 특정 지점까지 최소 거리는 bfs
 * 2. 행렬의 위치 파악할 땐, 전체 배열의 x번째 배열의 y번째 인자. 가로 = x / 세로 y 라고 생각하면 꼬임
 *
 * https://school.programmers.co.kr/learn/courses/30/lessons/159993
 */
