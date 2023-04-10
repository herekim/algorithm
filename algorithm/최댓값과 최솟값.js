// 첫번째 풀이

/*
1. min,max 변수 선언
2. 문자열을 for문으로 순회
3. 빈 문자열이 아닌 경우 Number로 바꾸고 min,max와 비교해 치환
4. 템플릿 리터럴로 반환 형식에 맞게 반환
*/

function solution(s) {
  let max = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' || s[i] === '-') {
      continue
    }

    const currentNumber = s[i - 1] === '-' ? Number(s[i]) * -1 : Number(s[i])
    if (currentNumber >= max) {
      max = currentNumber
    }
    if (currentNumber <= min) {
      min = currentNumber
    }
  }
  return `${min} ${max}`
}

// 두번째 풀이

/*
- 첫번째 방식으로 푸니까 코드실행은 통과하지만 채점에서 실패함.
- 이유는 숫자가 2자리 이상일 경우를 고려하지 않았기 때문.

1. 문자열을 공백 기준으로 split한 뒤, map으로 숫자로 변경
2. Math.min, Math.max를 사용해 최소, 최대값을 구해서 반환
*/
function solution2(s) {
  const numbers = s.split(' ').map((number) => Number(number))
  return `${Math.min(...numbers)} ${Math.max(...numbers)}`
}

console.log(solution('-1 -2 -3 -4'))

/*

시간 복잡도
O(n)

예상 유형

배운 점
*/
