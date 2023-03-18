function solution(maps) {
  const [targetX, targetY] = [maps[0].length - 1, maps.length - 1]
  const directionX = [1, -1, 0, 0]
  const directionY = [0, 0, -1, 1]

  const queue = [[0, 0, 1]]

  while (queue.length > 0) {
    const [x, y, count] = queue.shift()

    if (x === targetX && y === targetY) return count

    for (let i = 0; i < 4; i++) {
      const nextX = x + directionX[i]
      const nextY = y + directionY[i]

      if (
        nextX < 0 ||
        nextY < 0 ||
        nextX > targetX ||
        nextY > targetY ||
        maps[nextY][nextX] === 0
      ) {
        continue
      }

      maps[nextY][nextX] = 0
      queue.push([nextX, nextY, count + 1])
    }
  }

  return -1
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]
console.log(solution(maps))

/**
 * 계획
 * 1. 큐를 만들어서 조건에 맞는 경우 [x,y,count] 를 추가하면서 상/하/좌/우 계속 순회하면서 트리를 탐색한다
 * 2. x,y가 행렬의 마지막에 도착하면 해당 카운트가 가장 빠른 거리이므로 반환하고, 만약 행렬의 마지막에 도착하지 못하고 트리 순회가 끝나면 -1을 반환한다.
 *
 * 시간 복잡도
 * O(n)
 *
 * 예상 유형
 * BFS
 */
