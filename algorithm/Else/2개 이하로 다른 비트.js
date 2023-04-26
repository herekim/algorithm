// 내 풀이 (시간초과)
// 이진수를 십진수로 변환하는 방식
function countDifferentBits(a, b) {
  let aBinary = a.toString(2)
  let bBinary = b.toString(2)
  let maxLength = Math.max(aBinary.length, bBinary.length)
  let diffCount = 0

  for (let i = 0; i < maxLength; i++) {
    let aBit = aBinary[aBinary.length - i - 1] || '0'
    let bBit = bBinary[bBinary.length - i - 1] || '0'

    if (aBit !== bBit) {
      diffCount++
    }
  }

  return diffCount
}

function f(number) {
  if (number % 2 === 0) return number + 1
  const binary = number.toString(2)
  let minimum = number + 1
  while (countDifferentBits(number, minimum) > 2) {
    minimum++
  }

  return minimum
}

function solution(numbers) {
  let answer = []
  numbers.forEach((number) => {
    answer.push(f(number))
  })
  return answer
}

// 다른 사람의 풀이
// 이진수 자체로 접근하는 방식
function f2(x) {
  if (x % 2 === 0) return x + 1
  let bit = '0' + x.toString(2)
  let idx = bit.lastIndexOf('0')
  return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2)
}

function solution2(numbers) {
  const answer = []
  for (let number of numbers) answer.push(f2(number))
  return answer
}

console.log(solution([2, 7]))

/**
 * 계획
 * 1. numbers의 number를 인자로 넣고, 가장 작은 수를 반환하는 f함수를 만든다.
 *    1.1. f함수에서는 숫자를 이진수로 만들고 +1씩 증가한 십진수의 이진수와 비교해서 2개 이하로 차이날 때까지 계산한다.
 *    1.2. 2개 이하로 차이나는 이진수의 십진수를 반환한다.
 *
 * 시간&공간 복잡도
 * O(n^3)
 *
 * 예상 유형
 * ???
 *
 * 배운점
 * 1. 이진표현에 대해 접근할 때 이진표현 그 자체로 접근하는게 훨씬 빠를 수 있다.
 * 2. 내 풀이는 이진표현을 십진표현으로 바꿔서 하나씩 체크하는 방식이었지만, 짝수일 때 마지막 0을 1로 바꿔준 이진수의 십진표현, 홀수일 때 마지막 01을 10으로 바꿔준 이진수의 십진표현이 결국 가장 작은 값이다.
 * 3. 이진표현에 대해 익숙해지면 관련 문제의 익숙함이 늘 것 같다.
 * 4. parseInt의 두번째 인자는 첫번째 인자를 어떻게 해석할 지 표시해준다.
 *
 */
