let fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString().split('\n')

let index = 0
let t = input[index++]

while (t--) {
  const [N, M] = input[index++].split(' ').map(Number)
  const Q = input[index++].split(' ').map(Number)
  console.log(solution(M, Q))
}

function solution(T, Q) {
  var answer = 0
  var newQ = Q.map((item, idx) => ({ idx, priority: item }))

  while (newQ.length > 0) {
    var J = newQ.shift()

    if (newQ.some((item) => item.priority > J.priority)) {
      newQ.push(J)
    } else {
      answer++
      if (J.idx === T) return answer
    }
  }
}

/*
계획
1. Q배열을 map으로 돌면서 index 번호를 담은 객체로 만들어준다.
2. while문의 조건으로 flag 변수가 true라면 내부로 진입한다.
  2.1. newQ를 이중 for문으로 돌면서 자신보다 뒤에 중요도가 큰 요소가 있다면 가장 앞 요소를 shift & 뒤로 push 해준다.
  2.2. 자신의 뒤 요소에 자기보다 중요도가 큰 요소가 없다면 flag = false


시간/공간 복잡도

예상 유형

배운 점

*/
