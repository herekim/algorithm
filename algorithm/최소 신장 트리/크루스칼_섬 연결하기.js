// (RE): 크루스칼과 유니언파인드 알고리즘에 대한 이해가 부족함

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
 * 
 * 크루스칼 알고리즘이란?
 * 1. 최소 신장 트리를 구하기 위한 알고리즘입니다.
 * 2. 최소 신장 트리에 앞서 신장 트리에 대한 이해가 있어야 하는데, 신장 트리란 그래프의 최소 연결 부분 그래프를 의미합니다. 그래프가 연결되는 최소한의 연결을 가진 트리입니다. 특징으로는 사이클이 존재하면 안됩니다.
 * 3. 최소 신장 트리는 여러 신장 트리 중 연결된 간선들의 가중치 합이 최소인 트리를 의미합니다.
 * 4. 크루스칼 알고리즘은 그래프 간선들의 가중치를 오름차순으로 정렬하고, 사이클을 형성하지 않도록 순서대로 간선을 선택하고, 선택된 간선들을 최소 신장 트리 집합에 추가하는 순서로 구현할 수 있습니다.
 * 5. 그래프 간선들의 가중치를 오름차순으로 정렬해서 가장 낮은 간선부터 선택하는 것은 그리디 알고리즘을 사용할 수 있습니다.
 * 6. 사이클의 형성 여부를 판단할 때 사용하는 방법은 Uninon-Find 알고리즘입니다.
 * 
 * 유니언 파인드 알고리즘이란?
 * 1. Union-Find 알고리즘은 서로소 집합 자료구조를 표현하는 알고리즘입니다.
 * 2. 서로소 집합 자료구조란 서로 중복되지 않는 부분 집합들로 나눠진 원소들의 정보를 저장하고 조작하는 자료구조입니다.
 * 3. 크루스칼 알고리즘에서 사이클을 판단할 때 등 전체 집합이 있고 구성 원소들이 겹치지 않도록 분할하는 데 자주 사용됩니다.
 * 4. make-set(x) : x를 유일한 원소로 하는 새로운 집합 만듭니다.
 * 5. union(x,y) : x가 속한 집합과 y가 속한 집합을 합칩니다.
 * 6. finx(x) : x가 속한 집합의 대표값(루트 노드 값)을 반환합니다. x가 어떤 집합에 속해 있는지 찾을 수 있습니다.

관련자료
- https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html
 */
