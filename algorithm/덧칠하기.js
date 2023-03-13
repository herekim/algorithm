/**
 * 실패한 풀이
 * 1. section의 요소 사이의 거리를 구한다
 * 2. 각 거리의 합산을 m으로 나눈다
 *
 * 실패한 이유
 * - 이 방법으로는 한번에 칠할 수 있는 벽의 개수를 구하지 못한다
 */
function solution(n, m, section) {
  const numberOfWalls = section
    .map((wallNumber, idx, section) =>
      section[idx - 1] ? wallNumber - section[idx - 1] + 1 : 0,
    )
    .reduce((a, b) => a + b, 0)

  return Math.ceil(numberOfWalls / m)
}

/**
 * 다른 사람의 풀이
 * - 그리디를 이용한 최적해 구하기
 * - O(n) : section 배열을 한번만 들기 때문
 * 1. m와 seciont의 각 요소를 기반으로 max값을 만든다
 * 2. forEach를 돌면서 max와 item의 비교를 통해 answer값을 도출한다
 */
function solution2(n, m, section) {
  let answer = 0
  let max = 0

  section.forEach((item) => {
    if (item > max) {
      answer++
      max = item + m - 1
    }
  })

  return answer
}

const n = 8
const m = 4
const section = [2, 4, 6]
console.log(solution(n, m, section))

/**
 * 1. 문제를 넓은 시야로 보기
 * 2. 순회 외부 변수의 적절한 활용 (e.g. max)
 */

// https://school.programmers.co.kr/learn/courses/30/lessons/161989
