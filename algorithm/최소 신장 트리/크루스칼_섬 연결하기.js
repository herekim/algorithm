/**
 * 문제 링크
 * - https://school.programmers.co.kr/learn/courses/30/lessons/42861
 *
 * 풀이 방법
 * 1. 비용을 기준으로 costs배열을 오름차순 정렬 (그리디로 만들기 위해)
 * 2. Union-Find 집합 만들기
 *    1. 루트값 배열
 *    2. 부모를 찾는 재귀함수
 *    2. 두 섬의 부모 값이 더 작은 부모 하나로 합쳐주는 함수
 *    3. 두 섬의 부모를 찾아 부모가 같으면 true, 다르면 false 반환하는 함수
 * 3. costs 배열을 돌면서 두 섬의 부모가 다르면 부모를 합쳐주고 cost를 추가하는 for문
 *
 * 정리
 * 1. Union-Find 집합을 트리로 만드는 것이 중요하다.
 * 2. 루트값 배열, 부모를 찾는 재귀함수, 부모를 합치는 함수, 부모가 같은지 여부를 반환하는 함수가 필요하다.
 * 3. 비용이 낮은 순서대로 배열이 정렬되었으니, costs를 돌면서 부모가 다른 경우에 cost를 answer에 합쳐주면 자연스레 부모가 같은 경우는 걸러진다.
 *
 * 풀이 횟수 - 1
 * 이해도 - 3/5 - 원리는 이해했지만 정답을 보고 이해한거라 백지 상태에서 Union-Find를 다시 구현하라고 하면 풀 수 있을지 모르겠다..
 */

function solution(n, costs) {
  let answer = 0
  const parent = []
  for (let i = 0; i < n; i++) parent.push(i)

  costs.sort((a, b) => a[2] - b[2])

  const getParent = (parent, x) => {
    if (parent[x] === x) return x
    return (parent[x] = getParent(parent, parent[x]))
  }

  const unionParent = (parent, x, y) => {
    const n1 = getParent(parent, x)
    const n2 = getParent(parent, y)
    if (n1 < n2) return (parent[n2] = n1)
    else return (parent[n1] = n2)
  }

  const findParent = (parent, x, y) => {
    const n1 = getParent(parent, x)
    const n2 = getParent(parent, y)
    if (n1 === n2) return true
    else return false
  }

  for (const cost of costs) {
    if (!findParent(parent, cost[0], cost[1])) {
      answer += cost[2]
      unionParent(parent, cost[0], cost[1])
    }
  }

  return answer
}

const n = 4
const costs = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 5],
  [1, 3, 1],
  [2, 3, 8],
]
console.log(solution(n, costs))
