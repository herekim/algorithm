function solution(A, B) {
  var answer = 0

  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i]
  }

  return answer
}

console.log(solution([1, 4, 2], [5, 4, 4]))

/*
계획
1. A는 오름차순, B는 내림차순으로 정렬한다.
2. for문을 돌면서 각 A요소와 B요소를 곱한 값을 더한다.
3. answer에 더한 값을 반환한다.

시간 복잡도
O(n)

예상 유형
정렬

배운 점
*/
