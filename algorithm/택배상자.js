function solution(order) {
  let answer = 0

  order.reverse()
  const belt = order.slice().sort((a, b) => b - a)
  const subBeltStack = []

  while (belt.length > 0) {
    if (belt[belt.length - 1] === order[order.length - 1]) {
      answer++
      belt.pop()
      order.pop()
      continue
    }

    if (belt[belt.length - 1] !== order[order.length - 1]) {
      if (subBeltStack.length === 0) {
        subBeltStack.push(belt.pop())
        continue
      }

      if (subBeltStack[subBeltStack.length - 1] === order[order.length - 1]) {
        answer++
        subBeltStack.pop()
        order.pop()
      }

      if (subBeltStack[subBeltStack.length - 1] !== order[order.length - 1]) {
        subBeltStack.push(belt.pop())
      }
    }
  }

  while (subBeltStack.length > 0) {
    if (subBeltStack[subBeltStack.length - 1] === order[order.length - 1]) {
      answer++
      subBeltStack.pop()
      order.pop()
    }
    if (subBeltStack[subBeltStack.length - 1] !== order[order.length - 1]) {
      break
    }
  }

  return answer
}

console.log(solution([5, 4, 3, 2, 1]))

/**
 * 계획
 * 1. 벨트, 보조벨트, order 스택으로 만들어주기
 * 2. 벨트와 order 비교하면서 answer 증가시켜주기
 * 3. 보조벨트와 order 비교하면서 answer 증가시켜주기
 *
 * 1. 내림차순으로 벨트를 만들고, order의 순서를 뒤집어준다. (스택으로 만들기 위함)
 * 2. 벨트와 order의 마지막 스택이 같다면 answer+1, 기본벨트 pop
 * 3. 벨트와 order의 마지막 스택이 다르고 보조벨트의 마지막 스택과 다르다면 기본벨트 pop, 보조벨트로 push
 * 4. 벨트와 order의 마지막 스택이 다른데 보조벨트의 마지막 스택과 같다면 answer+1, 보조벨트 pop
 * 5. 보조벨트와 order의 마지막 스택이 같다면 보조벨트와 order pop, answer+1
 * 6. 보조벨트와 order의 마지막 스택이 다르다면 더이상 추가할 수 없으므로 break
 *
 * 시간&공간 복잡도
 * O(n log n)
 * -> sort의 시간 복잡도가 O(n log n)
 * -> reverse는 O(n)
 * -> 각 스택의 길이만큼 while문을 도는 횟수가 정해지고, pop, push 메서드는 O(1)이므로 O(n)
 *
 * 예상 유형
 * 스택
 */
