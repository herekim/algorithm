function solution(n) {
  var ans = 0

  while (n > 0) {
    if (n % 2 === 1) {
      ans++
      n--
    } else {
      n = n / 2
    }
  }

  return ans/
}

console.log(solution(5))

/**
 * 계획
 * 1. n/2를 반복한다
 * 2. n이 홀수인 경우 ans에 1을 더해주고, n-1.
 * 3. n이 0이 될 때까지 반복
 *
 * 시간&공간 복잡도
 * O(log n)
 *
 * 예상 유형
 * 그리디 or 비트조작
 *
 * 배울 점
 * 1. 문제를 접근할 때, 거꾸로 생각해보자.
 * 2. "(현재까지 온 거리) x 2 에 해당하는 위치로 순간이동", "순간이동을 하면 건전지 사용량이 줄지 않지만" 문장에서 이진 표현으로 접근해야 하는 것을 캐치해야 한다.
 */
