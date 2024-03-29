function solution(gems) {
  let answer = [0, gems.length] // 가장 긴 길이로 초기화합니다.
  let start = 0 // 첫 번째 포인터
  let end = 0 // 두 번째 포인터

  const gemKinds = new Set(gems).size // 겹치지 않는 보석의 갯수
  const collect = new Map() // 보석을 담아둘 변수
  collect.set(gems[0], 1) // 시작하면서 첫 보석을 먼저 담는다

  while (start < gems.length && end < gems.length) {
    // 두 포인터가 끝에 도달한다면 종료
    if (collect.size === gemKinds) {
      // 모든 보석을 구매할 수 있다면
      if (end - start < answer[1] - answer[0]) {
        // 구간을 갱신
        answer = [start + 1, end + 1]
      }

      collect.set(gems[start], collect.get(gems[start]) - 1) // 첫 번째 포인터에 해당하는 보석을 한 개 줄인다.

      if (collect.get(gems[start]) === 0) {
        // 만약 0이 됐다면 목록에서 제거된다.
        collect.delete(gems[start])
      }
      start += 1 // 첫 번째 포인터 증가
    } else {
      // 모든 보석을 구매할 수 없다면
      end += 1 // 두 번째 포인터 증가
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0)) // 보석을 추가한다.
    }
  }

  return answer // 결과 반환
}

console.log(
  solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']),
)

/**
 * 투포인터
 * - while문과 두개의 포인터를 사용해서 원하는 조건을 만족하는 구간을 찾는다.
 *
 * 시간 복잡도
 * - O(n)
 */
