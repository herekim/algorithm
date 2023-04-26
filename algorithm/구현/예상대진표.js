// 내 풀이
function solution(n, a, b) {
  var answer = 0
  for (let i = 0; i < n / 2; i++) {
    if (a % 2 === 1 && a + 1 === b) {
      answer = answer + 1
      break
    }
    if (b % 2 === 1 && b + 1 === a) {
      answer = answer + 1
      break
    }
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)
    answer++
  }
  return answer
}

// 다른 사람의 풀이
function solution2(n, a, b) {
  let answer = 0
  while (a !== b) {
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)
    answer++
  }
  return answer
}

console.log(solution(8, 4, 7))

/**
 * 계획
 * 1. 총 n/2번의 경기가 진행된다.
 * 2. a와 b가 만나는 경우가 나올 때까지 n/2번 반복한다.
 *    2.1. a와 b가 만나는 경우
 *         2.1.1. b-a가 1이고 a가 홀수인 경우이다.
 *         2.1.2. a-b가 1이고 b가 홀수인 경우이다.
 *    2.2. a와 b가 만나지 않는 경우
 *         2.2.1. a와 b를 2로 나누고 올림한 값을 각각 a와 b에 넣어준다.
 *         2.2.2. answer에 1을 더해준다.
 *
 * 시간&공간 복잡도
 * O(n)
 *
 * 예상 유형
 * 구현
 */
