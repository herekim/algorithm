function solution(x, y, n) {
  let answer = 0
  let possibleNumbers = new Set([x])

  while (possibleNumbers.size > 0) {
    const nextNumbers = new Set()

    if (possibleNumbers.has(y)) return answer

    possibleNumbers.forEach((possibleNumber) => {
      if (possibleNumber + n <= y) nextNumbers.add(possibleNumber + n)
      if (possibleNumber * 2 <= y) nextNumbers.add(possibleNumber * 2)
      if (possibleNumber * 3 <= y) nextNumbers.add(possibleNumber * 3)
    })

    possibleNumbers = nextNumbers
    answer = answer + 1
  }

  return -1
}

console.log(solution(10, 40, 5))

/**
 * 계획
 * 1. x를 기준으로 원하는 값이 나올 때까지 while문을 돌리면서 set 자료구조에 연산 가능한 값들을 넣어준다.
 * 2. while문 내부에서는 다음 연산을 수행한 값을 저장하기 위한 새로운 set 자료구조를 만들어준다.
 * 3. 전체 set을 for문을 돌면서 +n, x2, x3한 값들이 y보다 작을 때 차례로 다음 set에 넣어준다.
 * 4. 전체 set을 다음 set으로 업데이트 해주고, answer를 증가시켜준다.
 * 5. 전체 set에 y가 존재하면 answer를 반환해주고, 없다면 while문이 종료되므로 -1을 반환한다.
 *
 * 시간 복잡도
 * 모르겠음
 *
 * 예상 유형
 * 어떤 유형인지는 모르겠음
 *
 * 추가 정리
 * bfs나 dp로 풀 수 있는 방법이 있나?
 */
