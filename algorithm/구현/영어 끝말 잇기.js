function solution(n, words) {
  const checkedWords = new Set()
  for (let i = 0; i < words.length; i++) {
    const round = Math.ceil((i + 1) / n)
    const player = (i % n) + 1

    if (words[i].length <= 1) {
      return [player, round]
    }

    if (i !== 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return [player, round]
    }

    if (checkedWords.has(words[i])) {
      return [player, round]
    }

    checkedWords.add(words[i])
  }

  return [0, 0]
}

console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']),
)

/**
 * 계획
 * 1. words 배열의 for문을 돌면서 조건을 체크해준다.
 *    + 단어가 한자리일 때 해당 번호 탈락
 *    1.1. 만약 words의 앞에서 사용된 단어가 있다면 해당 번호가 탈락이다.
 *    1.2. 만약 이전 단어의 끝말과 현재 단어의 첫말이 일치하지 않으면 해당 번호가 탈락이다.
 * 2. 해당 번호는 포인트 변수를 만들어서 for문을 돌면서 바꿔주면서 체크한다.
 * 3. 해당 위치는 words의 i번째와 사람 수인 n을 나누고, 해당 값의 ceil값을 반환한다.
 *
 * 시간&공간 복잡도
 * O(n^2)
 *
 * 예상 유형
 * 구현 / 시뮬레이션
 *
 * 정리
 * 1. 중복은 Set 활용
 * 2. break, return 차이
 * 3. for문과 forEach 차이
 *    => forEach에서는 return을 해도 끝이 나지 않는다. -> 알아보기
 */
