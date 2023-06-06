let fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')
const n = Number(input[0])
const locations = input.slice(1).map((i) => i.split(' ').map(Number))

function solution(n, locations) {
  let paper = Array(100)
    .fill(false)
    .map(() => Array(100).fill(false))

  for (let i = 0; i < n; i++) {
    let [left, bottom] = locations[i]
    for (let x = left; x < left + 10; x++) {
      for (let y = bottom; y < bottom + 10; y++) {
        paper[x][y] = true
      }
    }
  }

  let blackArea = 0
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
      if (paper[x][y]) blackArea++
    }
  }

  return blackArea
}

console.log(solution(n, locations))
