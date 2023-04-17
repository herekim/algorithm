function solution(s) {
  var answer = ''

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      answer += s[i].toUpperCase()
      continue
    }
    if (s[i - 1] === ' ' && s[i]) {
      answer += s[i].toUpperCase()
    } else {
      answer += s[i].toLowerCase()
    }
  }
  return answer
}

/*
https://school.programmers.co.kr/learn/courses/30/lessons/12951

완전탐색
1. 문자열 전체를 돌면서 첫 문자는 대문자로 바꿔주고, 나머지 문자는 소문자로 바꿔준다.
  1.1. 문장의 첫 단어는 항상 대문자로 바꿔준다.
  1.2. 문자열의 앞이 공백이면 대문자로 바꿔준다.
  1.3. 문자열의 앞이 공백이 아니면 소문자로 바꿔준다.
*/

/*
계획
1. 문자열 전체를 돌면서 첫 문자는 대문자로 바꿔주고, 나머지 문자는 소문자로 바꿔준다.
  1.1. 문장의 첫 단어는 항상 대문자로 바꿔준다.
  1.2. 문자열의 앞이 공백이면 대문자로 바꿔준다.
  1.3. 문자열의 앞이 공백이 아니면 소문자로 바꿔준다.
  
시간/공간 복잡도
O(n)

예상 유형
문자열처리

배운 점
*/
