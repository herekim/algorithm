function solution(users, emoticons) {
  // 1) 최대 값 담을 변수 선언
  const answer = [0, 0]

  // 2) 할인율 변순 선언
  const discount = [10, 20, 30, 40]

  /* 
        3) 이모티콘마다 할인율을 적용 가능한 가짓수를 담는다. 
        ex) 이모티콘 2개 -> 4 * 4 = 16, 이모티콘 3개 -> 4 * 4 * 4 = 64 가짓수가 나온다.
    */
  const arr = []

  function dfs(emoticons, result) {
    // 5) 이모티콘이 없으면 탐색 종료
    if (emoticons.length < 1) {
      // 6) arr 배열에 탐색한 결괏값을 추가한다.
      arr.push(result)
      return
    }

    // 7) 할인율 개수만큼 반복한다.
    for (let i = 0; i < discount.length; i++) {
      // 8) 이모티콘 개수를 하나씩 줄이고, 줄였던 이모티콘의 할인율과 원가를 result에 담는다.
      dfs(emoticons.slice(1), [...result, [discount[i], emoticons[0]]])
    }
  }

  // 9) 최초 dfs 함수 실행
  dfs(emoticons, [])

  console.log(arr)
  return answer
}

const users = [
  [40, 2900],
  [23, 10000],
  [11, 5200],
  [5, 5900],
  [40, 3100],
  [27, 9200],
  [32, 6900],
]
const emoticons = [1300, 1500, 1600, 4900]
console.log(solution(users, emoticons)) // expect: [4, 13860]

/**
 * 계획
 * 1. 이모티콘 플러스를 가장 많이 가입시킬 수 있는 할인 비율을 찾는다.
 * 2. 이모티콘 플러스 가입자를 벗어나지 않는 선에서 최적의 할인 비율을 찾는다.
 *
 * 1. map을 사용해 이모티콘 배열을 각 할인율별 가격으로 변환한다.
 * 2.
 *
 * 시간&공간 복잡도
 *
 * 예상 유형
 */
