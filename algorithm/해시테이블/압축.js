function solution(msg) {
  let answer = []
  // 알파벳 배열
  const alphabetList = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(i + 65),
  )
  // 알파벳-인덱스를 key-value로 하는 객체(해시)
  const dictionary = alphabetList.reduce(
    (acc, alphabet, idx) => ({ ...acc, [alphabet]: idx + 1 }),
    {},
  )

  let w = msg[0]

  for (let i = 0; i < msg.length; i++) {
    // 마지막 값이 없으면 w의 인덱스를 answer에 넣고 순환 종료
    if (!msg[i + 1]) {
      answer.push(dictionary[w])
      break
    }
    // 다음값이 사전에 없을 때 answer에 현재 인덱스 푸시, 사전에 다음값과 인덱스 추가, 현재값을 msg의 다음값으로 초기화
    if (!dictionary[w + msg[i + 1]]) {
      answer.push(dictionary[w])
      dictionary[w + msg[i + 1]] = Object.keys(dictionary).length + 1
      w = msg[i + 1]
      continue
    }
    // 다음값이 사전에 존재할 때 w에 다음값을 추가
    w += msg[i + 1]
  }

  return answer
}

console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))

/*
https://school.programmers.co.kr/learn/courses/30/lessons/17684

계획
1. 초기 알파벳 배열을 만들어준다.
2. 해당 배열을 토대로 해시를 만들어준다. -> 이게 사전
3. msg문자열을 for문을 돌면서 w+c가 사전에 없을 때를 찾는다.
4. w+c가 사전에 없다면, w의 인덱스를 answer에 넣고, w+c를 사전의 가장 마지막 인덱스로 추가한다.
5. c가 없다면 w의 인덱스를 answer에 추가하고 answer를 반환한다.

시간/공간 복잡도
O(n)

예상 유형
해시
*/
