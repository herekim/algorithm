// 실패한 풀이
function solution(land) {
  let answer = 0
  let prevIndex = -1

  for (const row of land) {
    const maxLowIndex = row.indexOf(Math.max(...row))

    if (prevIndex === maxLowIndex) {
      row[maxLowIndex] = 0
      const secondOfRowIndex = row.indexOf(Math.max(...row))
      answer += row[secondOfRowIndex]
      prevIndex = secondOfRowIndex
    } else {
      answer += row[maxLowIndex]
      prevIndex = maxLowIndex
    }
  }

  return answer
}

// DP를 이용한 풀이
function solution2(land) {
  let answer = 0
  const dp = Array.from({ length: land.length }, () => Array(4).fill(0))
  dp[0] = land[0]

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      dp[i][j] =
        Math.max(...dp[i - 1].filter((_, index) => index !== j)) + land[i][j]
    }
  }

  answer = Math.max(...dp[dp.length - 1])
  return answer
}

console.log(
  solution2([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ]),
)

/*
계획
기존 풀이
1. 이전 행의 인덱스, 현재 최고점을 변수로 가진다.
2. land 배열 for문을 돌면서 각 행의 최고점을 찾는다.
3. 최고점은 Math.max 메서드로 찾으며, 만약 최고점의 위치가 이전 행의 인덱스와 같다면 다음 최고점을 찾는다 -> 최적화 필요
4. 최고점을 반환한다.

DP를 이용한 풀이
1. dp를 이용한다.
2. land의 길이만큼 dp 배열을 만든다. 그리고 각 행의 길이만큼 0으로 채운다.
3. dp의 첫번째 행에 land의 첫번째 행을 넣는다.
4. dp의 두번째 행부터 마지막 행까지 for문을 돌면서 이전 행의 다른 열에서 최고점을 찾고, land의 현재 행의 열을 더한다.
5. dp의 마지막 행에서 최고점을 반환한다.

시간/공간 복잡도
O(n)

예상 유형
DP

배운 점
- 필요한 생각의 흐름
1. 그리디로 풀면 최대값을 구할 수 없다.
2. DFS로 풀면 행의 길이 때문에 효율성 테스트를 통과하지 못할 확률이 크다.
3. 최적부분구조와 반복되는 하위구조가 존재하므로 DP로 풀 수 있다.
*/
