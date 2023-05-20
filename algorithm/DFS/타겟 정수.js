// 재귀로 DFS 구현
function solution(numbers, target) {
  let answer = 0

  const dfs = (depth, acc) => {
    if (depth < numbers.length) {
      dfs(depth + 1, acc + numbers[depth])
      dfs(depth + 1, acc - numbers[depth])
    } else if (acc === target) {
      answer++
    }
  }

  dfs(0, 0)

  return answer
}

console.log(solution([1, 1, 1, 1, 1], 3))

/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript
 *
 * 계획
 * 1. numbers의 현재 위치와 누산값 인자로 넘기는 dfs를 생성한다.
 * 2. numbers를 for문 돌면서..
 *    2.1. 현재 위치가 numbers의 길이보다 짧다면 dfs를 재귀함수 호출한다.
 *         2.1.1. 현재 위치 +1, 누산값 + number를 인자로 전달한다.
 *         2.1.2. 현재 위치 +1, 누산값 - number를 인자로 전달한다.
 *    2.2. 만약 누산값이 target과 같다면 answer+1 해준다.
 *
 * 시간&공간 복잡도
 * O(n)
 *
 * 예상 유형
 * DFS
 *
 * 참고
 * https://chamdom.blog/dfs-using-js/
 *
 */
