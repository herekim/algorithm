function solution(storey) {
  var answer = 0

  const storeyArray = Array.from(storey.toString())
    .reverse()
    .map((floor) => Number(floor))

  while (storeyArray.length > 0) {
    const diffToTen = Math.abs(storeyArray[0] - 10)
    const diffToZero = Math.abs(storeyArray[0])

    if (storeyArray.length === 1) {
      if (diffToTen < diffToZero) {
        answer = answer + diffToTen + 1
      } else {
        answer = answer + diffToZero
      }
      break
    }

    if (diffToTen <= diffToZero) {
      storeyArray[1] = storeyArray[1] + 1
      storeyArray.shift()
      answer = answer + diffToTen
    } else {
      storeyArray.shift()
      answer = answer + diffToZero
    }
  }

  return answer
}

// function solution(storey) {
//   let answer = 0

//   while (storey) {
//     let cur = storey % 10
//     let next = Math.floor(storey / 10) % 10

//     console.log(cur, next)

//     if (cur > 5) {
//       answer += 10 - cur
//       storey += 10
//     } else if (cur === 5) {
//       answer += 5
//       storey += next >= 5 ? 10 : 0
//     } else {
//       answer += cur
//     }
//     storey = Math.floor(storey / 10)
//   }

//   return answer
// }

const storey = 155
console.log(solution(storey))

/**
 * 계획
 * 1. 한자리 수부터  현재 숫자에서 0 혹은 10에 가까운 쪽으로 층을 이동하고, answer에 값을 더한다.
 * 2. 이때 해당 수가 5라면 다음 자리수를 고려해서 결정한다. (45라면 5의 다음 자리수인 4가 0에 가까우므로 -5)
 *
 * 1. 숫자를 배열로 만들고, 배열의 순서롤 거꾸로 뒤집는다.
 * 2. 배열의 길이가 0이 될 때까지 while문을 돌린다.
 * 3. 재귀 함수의 내부 조건에서는 배열의 첫번째 인자가 0 혹은 10에 가까운지에 따라 층을 이동하고 해당 값을 answer에 넣어주고 배열의 첫번째 요소를 제거해준다.
 * 4. 만약 숫자가 5라면 배열의 다음 숫자가 0,10에 가까운 쪽으로 층을 이동한다.
 *
 * 시간&공간 복잡도
 * O(n)
 *
 * 예상 유형
 * 1. 그리디..?
 */
