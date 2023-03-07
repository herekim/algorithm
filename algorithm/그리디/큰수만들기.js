/**
 * 1. 스택을 만든다.
 * 2. 카운트 변수를 만든다.
 * 3. number를 순회하면서 재귀함수로 count가 k보다 작은 경우, 스택의 최상단 수가 아이템보다 작은 경우에는 스택을 pop하고 카운트를 증가한다.
 * 4. 스택에 해당 아이템을 push 한다.
 * 5. '98765'와 같이 조건에 부합하지 않아 count를 증가시킬 수 없는 경우엔 재귀함수를 k번 만큼 돌면서 stack을 pop한다. (어차피 가장 작은 수부터 최상단에 존재할테니까)
 * ---------------------------------------
 * 생각해낸 것
 * 1. 그리디를 사용해서 자신보다 다음 수가 자신보다 크면 자신을 삭제하는 것
 * 2. 이 과정에서 재귀함수를 사용하는 것
 * 생각해야 하는 것
 * 1. 재귀함수 안에서 for문을 돌리는 방식으로 풀었지만, for문 내에서 재귀함수를 돌릴 수도 있다는 것
 * 2. 스택을 사용해서 조건에 부합하는 아이템을 넣고 빼는 방식으로 완성할 수 있다는 것. (꼭 문자열이 아니어도 된다. 반환할 때 문자열로 만들어주면 되니까)
 */
function solution(number, k) {
  const stack = []
  let count = 0

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop()
      count++
    }
    stack.push(item)
  }

  while (count < k) {
    stack.pop()
    count++
  }

  return stack.join('')
}

const number = '98765'
const k = 2
console.log(solution(number, k))
