// 다시 풀기 230526

let fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()

console.log(solution(input))

function solution(s) {
  let tagFlag = false
  let result = ''
  let word = ''

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '<') {
      if (word !== '') {
        const wordArray = word.split(' ').map((w) => {
          let reverseW = ''
          for (let i = w.length - 1; i >= 0; i--) {
            reverseW += w[i]
          }
          return reverseW
        })

        const newWord = wordArray.join(' ')
        result += newWord
        word = ''
      }
      tagFlag = true
      result += s[i]
      continue
    }

    if (s[i] === '>') {
      tagFlag = false
      result += s[i]
      continue
    }

    if (s[i] !== '<' && s[i] !== '>' && tagFlag === true) {
      result += s[i]
      continue
    }
    if (s[i] !== '<' && s[i] !== '>' && tagFlag === false) {
      word += s[i]
    }
  }

  if (word !== '') {
    const wordArray = word.split(' ').map((w) => {
      let reverseW = ''
      for (let i = w.length - 1; i >= 0; i--) {
        reverseW += w[i]
      }
      return reverseW
    })

    result += wordArray.join(' ')
  }

  return result
}

/*
계획
1. string의 for문을 돌면서 우선 문자열만 뽑아낸다.
2. 문자열들을 공백 기준으로 배열로 분리한다.
3. 배열을 join한다

시간/공간 복잡도

예상 유형

배운 점

*/
