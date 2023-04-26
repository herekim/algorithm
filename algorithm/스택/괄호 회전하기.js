const isOpenBracket = (bracket) =>
  bracket === '[' || bracket === '(' || bracket === '{'

const matchBracket = (stack, bracket, openBracket, closeBracket) => {
  if (bracket === closeBracket) {
    stack[stack.length - 1] === openBracket ? stack.pop() : stack.push(bracket)
  }
}

function isRightBracket(s) {
  const stack = []

  for (const bracket of s) {
    if (isOpenBracket(bracket)) {
      stack.push(bracket)
    }
    matchBracket(stack, bracket, '[', ']')
    matchBracket(stack, bracket, '{', '}')
    matchBracket(stack, bracket, '(', ')')
  }

  return stack.length > 0 ? false : true
}

function solution(s) {
  var answer = 0
  for (const bracket of s) {
    if (isRightBracket(s)) {
      answer++
    }
    s = s.substring(1).concat(s.substring(0, 1))
  }
  return answer
}

console.log(solution('[](){}'))

/*
https://school.programmers.co.kr/learn/courses/30/lessons/76502

계획
1. 들어온 문자열이 올바른 괄호인지 확인하는 isRightBracket 함수를 만든다.
  1.1. 빈 배열로 스택을 만든다.
  1.2. 여는 괄호의 경우 스택에 넣어준다.
  1.3. 닫는 괄호의 경우 스택의 요소와 비교한다.
    1.3.1. 스택의 마지막 요소와 현재 괄호가 올바른 괄호라면 마지막 요소를 제거해준다.
    1.3.2. 스택의 마지막 요소와 현재 괄호가 올바르지 않은 괄호라면 스택에 현재 괄호를 넣어준다.
  1.4. for문을 다 돌고나서 스택의 길이가 0보다 크면 false를, 0이면 true를 반환한다. 
2. for문을 돌면서 s의 첫 string을 맨 뒤로 보내는 것을 s.length만큼 반복하면서 올바른 괄호라면 answer++

시간/공간 복잡도 : O(n^2)

예상 유형 : 스택

배운 점
- 올바른 괄호처럼 짝이 맞는지 확인할 때는 스택을 고려할 수 있다.
*/
