let fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => v.split(' ').map(Number))

const [R, C, T] = input.shift()
const A = input

const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

solution(R, C, T, A)

function solution(R, C, T, A) {
  let air = []

  // 공기청정기 위치 찾기
  for (let i = 0; i < R; i++) {
    if (A[i][0] == -1) {
      air.push(i)
      air.push(i + 1)
      break
    }
  }

  while (T--) {
    spread() // 미세먼지 확산
    clean() // 공기청정기 작동
  }

  let answer = 0
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (A[i][j] > 0) {
        answer += A[i][j] // 남은 미세먼지의 양 계산
      }
    }
  }
  console.log(answer)

  function spread() {
    let temp = Array.from(Array(R), () => Array(C).fill(0))
    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        if (A[x][y] >= 5) {
          let amount = Math.floor(A[x][y] / 5)
          for (let i = 0; i < 4; i++) {
            let nx = x + dx[i],
              ny = y + dy[i]
            if (nx < 0 || nx >= R || ny < 0 || ny >= C || A[nx][ny] == -1)
              continue
            temp[nx][ny] += amount
            A[x][y] -= amount
          }
        }
      }
    }
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        A[i][j] += temp[i][j]
      }
    }
  }

  function clean() {
    // 위쪽 공기청정기
    for (let i = air[0] - 1; i > 0; i--) A[i][0] = A[i - 1][0]
    for (let i = 0; i < C - 1; i++) A[0][i] = A[0][i + 1]
    for (let i = 0; i < air[0]; i++) A[i][C - 1] = A[i + 1][C - 1]
    for (let i = C - 1; i > 1; i--) A[air[0]][i] = A[air[0]][i - 1]
    A[air[0]][1] = 0

    // 아래쪽 공기청정기
    for (let i = air[1] + 1; i < R - 1; i++) A[i][0] = A[i + 1][0]
    for (let i = 0; i < C - 1; i++) A[R - 1][i] = A[R - 1][i + 1]
    for (let i = R - 1; i > air[1]; i--) A[i][C - 1] = A[i - 1][C - 1]
    for (let i = C - 1; i > 1; i--) A[air[1]][i] = A[air[1]][i - 1]
    A[air[1]][1] = 0
  }
}

// const r = 7
// const c = 8
// const t = 4
// const room = [
//   [0, 0, 0, 0, 0, 0, 0, 9],
//   [0, 0, 0, 0, 3, 0, 0, 8],
//   [-1, 0, 5, 0, 0, 0, 22, 0],
//   [-1, 8, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 10, 43, 0],
//   [0, 0, 5, 0, 15, 0, 0, 0],
//   [0, 0, 40, 0, 0, 0, 20, 0],
// ]

// console.log(solution(r, c, t, room))

/*
계획
1. 미세먼지 확산
  1.1. 
2. 공기청정기 작동

시간/공간 복잡도

예상 유형

배운 점

*/
