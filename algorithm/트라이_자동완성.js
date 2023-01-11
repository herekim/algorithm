function makeTrie(words) {
  const root = {} // 루트 객체
  for (const word of words) {
    // words 배열 돌면서 트라이 트리구조 만들어 줄 것
    let current = root
    for (const letter of word) {
      if (!current[letter]) current[letter] = [0, {}] // current 객체에 letter 문자열이 없으면 [0, {}]로 초기화
      current[letter][0] = 1 + (current[letter][0] || 0) // current 객체의 letter 문자열의 카운트를 1 증가시켜줌
      current = current[letter][1] // current의 위치는 다음 정점으로 위치시키면서 trie 트리 구조 완성
    }
  }

  return root
}

function solution(words) {
  let answer = 0
  const trie = makeTrie(words)

  for (const word of words) {
    //words 배열 돌면서 내부에서 word 문자열 돌고, 카운트와 current 체크
    let count = 0
    let current = trie
    for (const letter of word) {
      count += 1 // 문자열 돌면서 일단 카운트 증가
      if (current[letter][0] <= 1) {
        break // 만약 1과 같거나 작다면 더이상 검색을 하지 않아도 되므로 for문 종료
      }
      current = current[letter][1] // current는 다음 정점으로
    }
    answer += count // for 문이 종료되거나 완료되면 answer에 count 합침
  }

  return answer // 마지막 배열 요소까지 돌고나서 answer 반환
}

console.log(solution(['go', 'gone', 'guild']))

/**
 * 처음 해야하는 생각
 * 1. 문자열에 대한 자동완성 기능이기 때문에 바로 트라이 자료구조가 생각나야 한다.
 * 2. 문자열마다 카운터와 트리를 담은 트라이 자료구조를 생성한다.
 * 3. words 배열을 돌면서 count를 증가시키고, 해당 정점의 카운트가 1과 같거나 작으면 break 한다. 그리고 current를 현재 정점으로 바꿔준다.
 * 4. answer를 count로 바꿔주고 return answer
 */
