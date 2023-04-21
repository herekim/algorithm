function isEmptyMap(wantMap) {
  for (const [key, value] of wantMap.entries()) {
    if (value > 0) {
      return false
    }
  }
  return true
}

function solution(want, number, discount) {
  let answer = 0

  for (let i = 0; i <= discount.length - 9; i++) {
    const wantMap = new Map()

    for (let i = 0; i < want.length; i++) {
      wantMap.set(want[i], number[i])
    }

    for (let j = i, end = j + 9; j <= end; j++) {
      if (wantMap.has(discount[j])) {
        wantMap.set(discount[j], wantMap.get(discount[j]) - 1)
      }
    }

    if (isEmptyMap(wantMap)) {
      answer++
    }
  }

  return answer
}

const want = ['banana', 'apple', 'rice', 'pork', 'pot']
const number = [3, 2, 2, 2, 1]
const discount = [
  'chicken',
  'apple',
  'apple',
  'banana',
  'rice',
  'apple',
  'pork',
  'banana',
  'pork',
  'rice',
  'pot',
  'banana',
  'apple',
  'banana',
]

console.log(solution(want, number, discount)) // Expected: 3

/*
계획
1. want 배열과 number 배열을 통해 제품-수량 해시 구현. ✅
    - Map 자료구조 사용해서 해시 구현. ✅
2. 10일연속 스택을 만들어줘서 계속 앞의 수를 제거하고, 뒤의 수를 추가하면서 스택을 변환.
    1. discount 배열의 0-9까지 10일연속 스택을 만듦. ✅
    2. 인덱스 10부터 10일연속 스택에 앞을 제거하고 뒤에 값을 추가하면서 스택 변환
3. 10열연속 스택 배열을 토대로 제품-수량 해시 구현.❌
    1. 첫 10일연속 스택을 토대로 Map을 사용해서 해시 구현. ✅
    2. 인덱스 10부터 바뀌는 10일연속 스택에서 제거되는 값과 추가되는 값 반영 
4. 스택이 변할 때마다 해당 스택을 돌면서 해시 변환하고, want해시와 비교해서 원하는 것을 모두 살 수 있는지 체크.

다시 계획
1. want와 number를 조합한 해시 구현한다.
2. discount배열을 for문 순회한다.
3. 내부에서 10개씩만 잘라서 도는 슬라이딩 윈도우를 구현한다.
4. wantMap에서 해당 값들을 제거하면서 요소가 전부 0이하가 되는지 체크한다.
5. isEmpty가 true를 반환하면 answer++


시간/공간 복잡도
O(n)

예상 유형
슬라이딩 윈도우 & 해시

배운 점
- 슬라이딩 윈도우 복습
*/
