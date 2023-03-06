import MinHeap from '../practice/힙/minHeap'

/**
 * 첫번째 풀이
 * - 키워드
 * #인접리스트 #다익스트라 #우선순위큐 #힙
 * 1. 인접 리스트로 그래프 구현
 * 2. 다익스트라 구현을 위해 거리를 무한대로 초기값 설정
 * 3. road 배열 돌면서 그래프 완성
 * 4. 첫번째 노드부터 우선순위 큐에 넣고 첫번째 노드의 거리 0으로 설정
 * 5. 우선순위 큐 배열이 비어있을 때까지 while문 반복
 * 6. while문 내에서 우선순위 큐의 가장 첫번째 값을 빼서 조건에 맞는 경우 거리를 초기화하고, 우선순위 큐에 노드를 넣어줌
 * 7. 조건은 graph의 각 연결 리스트를 for문으로 돌면서 비용 합계를 계산해주고, 비용 합계가 거리에 저장된 값보다 작을 때, 거리를 비용 합계로 바꾸고 해당 노드를 우선순위 큐에 push.
 */
function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []) // 인접 리스트로 그래프 구현
  const dist = Array(N + 1).fill(Infinity) // 거리를 무한대 값으로 초기화

  // 그래프 구성
  for (const [a, b, c] of road) {
    graph[a].push({ to: b, cost: c })
    graph[b].push({ to: a, cost: c })
  }

  // 다익스트라 알고리즘
  const pq = [{ to: 1, cost: 0 }] // 시작점을 우선순위 큐에 넣어줌
  dist[1] = 0

  while (pq.length) {
    const { to, cost } = pq.shift()

    if (cost > K) continue // 음식 배달이 가능한 시간 K 이하인 정점만 처리

    for (const { to: next, cost: nextCost } of graph[to]) {
      const totalCost = cost + nextCost

      if (totalCost < dist[next]) {
        dist[next] = totalCost
        pq.push({ to: next, cost: totalCost })
      }
    }
  }

  return dist.filter((d) => d <= K).length // 음식 배달이 가능한 시간 K 이하인 정점의 개수를 반환
}

/**
 * 두번째 풀이 (첫번째 케이스와 접근법은 동일)
 */
function solution2(N, road, K) {
  const graph = new Array(N + 1).fill(null).map(() => new Array())

  for (const [a, b, c] of road) {
    graph[a].push({ to: b, cost: c })
    graph[b].push({ to: a, cost: c })
  }

  const visited = new Set([1])
  const heap = [{ to: 1, cost: 0 }]
  const dist = new Map([[1, 0]])

  while (heap.length > 0) {
    const { to, cost } = heap.shift()

    for (const { to: next, cost: nextCost } of graph[to]) {
      const totalCost = cost + nextCost

      if (!dist.has(next) || dist.get(next) > totalCost) {
        dist.set(next, totalCost)

        if (totalCost <= K) {
          visited.add(next)
          heap.push({ to: next, cost: totalCost })
        }
      }
    }
  }

  return visited.size
}

/**
 * 세번째 풀이 (최소힙, 다익스트라 제대로 사용해서 시간 복잡도까지 고려한 케이스)
 */
function dijkstra(road, N) {
  const heap = new MinHeap() // 우선순위 큐(힙)
  heap.push({ node: 1, cost: 0 }) // 1번 마을부터 시작

  const dist = [...Array(N + 1)].map(() => Infinity) // 계산하기 편하도록 N+1 길이만큼 리스트 생성
  dist[1] = 0 // 1번 마을은 무조건 거리가 0

  while (!heap.isEmpty()) {
    // heap이 비어있지 않다면
    // cost가 가장 낮은 정점을 뽑는다.
    const { node: current, cost: currentCost } = heap.pop()

    for (const [src, dest, cost] of road) {
      // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
      const nextCost = cost + currentCost // 비용

      // 양방향을 고려하여 작성
      if (src === current && nextCost < dist[dest]) {
        // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[dest] = nextCost // 거리를 갱신한다.
        heap.push({ node: dest, cost: nextCost }) // push
      } else if (dest == current && nextCost < dist[src]) {
        // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[src] = nextCost // 거리를 갱신한다.
        heap.push({ node: src, cost: nextCost }) // push
      }
    }
  }

  return dist // 1번 마을부터 각 마을까지의 최단 거리
}

function solution3(N, road, K) {
  const dist = dijkstra(road, N)
  return dist.filter((x) => x <= K).length
}

const n = 5
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
]
const k = 3

console.log(solution(n, road, k))

/**
 * 리뷰
 * 1. solution1,2와 3의 차이는 우선순위 큐의 구현 세부사항
 * 2. solution1,2의 시간 복잡도는 O(VE), solution3의 시간 복잡도는 O(ElogV) (E는 간선의 개수, V는 정점의 개수)
 * 3. 왜냐하면 힙은 완전이진트리이고, 정점의 추가와 제거는 O(logN)인 반면, shift는 O(N)이기 때문
 */
