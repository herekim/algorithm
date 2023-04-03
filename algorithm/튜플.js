// 처음 풀이
// function stringToDoubleArray(input) {
//   input = input.slice(1, -1)

//   let outerArray = input.split('},{')

//   for (let i = 0; i < outerArray.length; i++) {
//     outerArray[i] = outerArray[i].replace('{', '').replace('}', '')
//     outerArray[i] = outerArray[i].split(',')

//     for (let j = 0; j < outerArray[i].length; j++) {
//       outerArray[i][j] = Number(outerArray[i][j])
//     }
//   }

//   return outerArray
// }

// 다른 풀이 (정규 표현식 사용)
// function stringToDoubleArray(input) {
//   const outerArray = input.match(/{[^}]+}/g)
//   return outerArray.map((item) => {
//     const innerArray = item.match(/\d+/g)
//     return innerArray.map((number) => parseInt(number, 10))
//   })
// }

function solution(s) {
  let answer = []
  const set = new Set()
  // JSON 형식
  const sArray = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))

  sArray.sort((a, b) => a.length - b.length)

  for (i = 0; i < sArray.length; i++) {
    for (j = 0; j < sArray[i].length; j++) {
      if (!set.has(sArray[i][j])) {
        set.add(sArray[i][j])
        answer.push(sArray[i][j])
      }
    }
  }

  return answer
}

console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')) // [3,2,4,1]

/**
 * 계획
 * 1. 객체 형식의 문자열을 이중배열로 변환한다.
 * 2. 배열의 길이 순서대로 이중배열을 정렬한다.
 * 3. 이중배열을 이중 for문 돌면서 요소가 Set에 없으면 Set에 넣어주고 answer에 push 해준다.
 *
 * 시간&공간 복잡도
 * O(n^2)
 *
 * 예상 유형
 * 문자열 파싱
 *
 * 배운 것
 * 1. JSON 형식에는 문자열, 숫자, 객체, 배열, 불리언, null 이 포함되어서 문자열 메서드인 replace와 JSON.parse의 조합으로 이중배열로 변환할 수 있다.
 * 2. 정규표현식 익히자.
 * 3. split은 문자열을 어떤 기준으로 '배열로 만들지' 정하는 메서드
 * 4. replace는 첫번째 인자로 바꿀 문자열이나 정규표현식을 받고, 두번째 인자로 바뀔 문자열을 넣음. 문자열을 넣으면 처음 일치하는 문자열만 바꿈. 그래서 전체를 바꾸려면 정규 표현식 g 플래그 사용해야함
 * 5. slice(1,-1)을 넣어주면 첫번째부터 마지막까지를 하나의 배열로 만들어줌
 */
