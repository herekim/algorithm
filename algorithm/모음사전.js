function solution(word) {
  let answer = 0
  const alphabets = ['', 'A', 'E', 'I', 'O', 'U']
  const dictionary = []

  const recursion = (n, str) => {
    if (n === 0) {
      dictionary.push(str)
      return
    }
    for (const alphabet of alphabets) {
      recursion(n - 1, `${str}${alphabet}`)
    }
  }

  recursion(5, '')

  return [...new Set(dictionary)].sort().indexOf(word)
}

console.log(solution('AAAE'))

/*
계획
1. 전체 사전을 만든다.
2. 순서대로 sort한다.
3. index를 구한다.

시간/공간 복잡도
6^O(n) - 지수시간복잡도

예상 유형
완전탐색

배운 점
- 조건을 보고 완전 탐색으로 접근할 수 있을지 체크할 수 있다.
*/
