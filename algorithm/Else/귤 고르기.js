/**
 * 1. 해시테이블을 만들어서 귤 크기별 개수를 넣어준다
 * 2. 개수가 가장 많은 것부터 k개를 채울 때까지 answer를 증가한다
 */

function solution(k, tangerine) {
  let answer = 0
  let cart = 0

  const sizeMap = new Map()

  tangerine.forEach((item) => {
    if (sizeMap.has(item)) {
      sizeMap.set(item, sizeMap.get(item) + 1)
    } else {
      sizeMap.set(item, 1)
    }
  })

  const sortedMap = new Map([...sizeMap.entries()].sort((a, b) => b[1] - a[1]))

  for (const [key, value] of sizeMap) {
    if (cart < k) {
      answer++
      cart = cart + value
    }
  }

  return answer
}

const k = 2
const tangerine = [1, 1, 1, 1, 2, 2, 2, 3]

console.log(solution(k, tangerine))

/**
 * 추가 궁금증
 * 1. 자료구조 Map은 어떻게 이터러블한가?
 * : Map Map은 해시테이블로 구현되어 있다고 알고 있습니다. 다만 해시테이블은 이터러블하지 않지만 Map은 이터러블 해야하므로 결정론적 해시 테이블이라는 알고리즘을 사용합니다.
 * 이 알고리즘을 dataTable이라는 배열을 소유하는데, 이는 체인의 형태로 Map 내부 정보들이 저장되게 됩니다. 이렇게 순서체에서 삽입 순서가 구현되는 것을 보장할 수 있습니다.
 *
 * 2. .entries()메서드를 사용하는 기준은 무엇인가?
 * : 이터러블한 객체임과 동시에 해당 객체의 각 요소가 key-value 쌍으로 구성되어 있어야 합니다.
 *
 * 3. iterable 객체란 무엇인가?
 * : Symbol.iterator라는 특별한 메서드를 구현하고 있는 객체입니다. 다음값을 반환하는 next()메서드를 포함하고, 이를 통해 반복 가능한 객체에서 값을 하나씩 순회할 수 있습니다.
 * for...of 루프, spread 연산자, Array.from()등과 같은 반복문 처리 구문에서 사용할 수 있습니다.
 *
 * 4. 객체는 iterable 객체가 아닌데 어떻게 entries()메서드를 사용할 수 있는가?
 * : ES2017(ES8)부터 Object.entries(), Object.keys()와 같은 메서드를 제공합니다.
 *
 * 계획, 시간&공간 복잡도, 문제 유형
 *
 * 문제 링크
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 */
