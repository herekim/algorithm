// 실패한 풀이 : 런타임 에러
// function solution(n) {
//   const memo = [null, 1, 1]

//   function fib(n) {
//     if (memo[n] !== undefined) return memo[n]
//     let res = (fib(n - 1, memo) + fib(n - 2, memo)) % 1000000007
//     memo[n] = res
//     return res
//   }

//   return fib(n + 1)
// }

// 성공한 풀이
function solution(n) {
  const dp = [1, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007
  }

  console.log(dp)

  return dp[n]
}

console.log(solution(4))

/*
계획
https://school.programmers.co.kr/learn/courses/30/lessons/12900

시간/공간 복잡도
O(n)

예상 유형
DP

배운 점
- 접근법
1. 타일을 조합하는 방식은 기존 타일 조합에 '추가'하는 방식임을 유추할 수 있다.
2. 이게 유추가 되면 반복되는 하위문제가 존재한다는 것이고, 하위문제의 최적 해답을 통해 상위 문제의 최적 해답을 찾을 수 있다는 뜻이다. 즉 DP가 가능하다.
3. 꼭 재귀함수가 아니더라도 for문을 통해 특정값을 넣어주는 방식으로 접근할수도 있다.
*/
