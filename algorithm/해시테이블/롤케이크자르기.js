function solution(topping) {
  let answer = 0
  const ob = new Map()
  const yb = new Map()

  for (const item of topping) {
    if (ob.has(item)) ob.set(item, ob.get(item) + 1)
    else ob.set(item, 1)
  }

  for (const item of topping) {
    if (yb.has(item)) yb.set(item, yb.get(item) + 1)
    else yb.set(item, 1)

    if (ob.get(item)) {
      ob.set(item, ob.get(item) - 1)
      if (ob.get(item) === 0) ob.delete(item)
    }

    if (yb.size === ob.size) answer++
  }

  return answer
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]))

/*
계획
- 토핑 길이 제한이 백만이므로, 이중 for문이나 재귀는 안된다.
- 결국 O(n)으로 끝내야 함.

1. 형의 토핑 Map, 동생의 토핑 Map을 만들고, 각 토핑 key - 토핑 개수 value를 만든다.
2. 우선 형에게 토핑을 몰아준다.
3. 토핑 배열을 돌면서 동생에게 토핑을 추가해주고 형에겐 토핑을 빼앗는다.
4. 형의 토핑 개수와 동생의 토핑 개수가 같을 때 answer++

시간/공간 복잡도
O(n)

예상 유형
- 해시

배운 점
*/
