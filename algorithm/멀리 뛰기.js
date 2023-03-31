function solution(n) {
  let dp = [1, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567
    console.log(dp)
  }

  return dp[n]
}

console.log(solution(4))

/**
 * 계획
 *
 * 시간&공간 복잡도
 * O(n)
 *
 * 예상 유형
 * 못 풀었다..
 *
 * 정리
 * 1. 순열과 조합 만들어보고 예제 풀어보기
 * 2. 동적 계획법 예제 풀어보기
 * 3. DFS 예제 풀어보기
 */
