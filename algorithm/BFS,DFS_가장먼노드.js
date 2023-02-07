/**
 * 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하는 문제
 * n은 노드의 갯수, edge는 연결된 노드 정보
 *
 * 1. map으로 노드와 간선의 그래프를 만든다. 그래프 정보에는 연결된 노드와 1부터 적립된 간선의 갯수가 저장되어 있다.
 * 2. 적립된 간선 중 가장 높은 수를 뽑아낸다.
 * 3. 해당 수와 같은 적립된 간선 수를 가진 노드의 갯수를 뽑아낸다.
 */
function solution(n, edge) {
  const graph = new Map()
  for (const [src, dest] of edge) {
    if (graph.has(src)) {
      graph.set(src, [...graph.get(src), dest])
    } else {
      graph.set(src, [dest])
    }
    if (graph.has(dest)) {
      graph.set(dest, [...graph.get(dest), src])
    } else {
      graph.set(dest, [src])
    }
  }

  const distance = Array(n + 1).fill(0)
  distance[1] = 1

  const queue = [1]
  while (queue.length !== 0) {
    const src = queue.shift()
    for (const dest of graph.get(src)) {
      if (distance[dest] === 0) {
        queue.push(dest)
        distance[dest] = distance[src] + 1
      }
    }
  }

  const max = Math.max(...distance)
  return distance.filter((node) => node === max).length
}

const n = 6
const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]

console.log(solution(n, edge))

/**
 * 1. 인접 리스트를 이용해서 그래프를 만듦 (map을 이용해서 만든 것과 차이)
 * 2. edge 배열을 돌면서 각 노드들의 출발지(src)와 도착지(dest)를 넣어줌
 * 3. 이 그래프를 바탕으로 거리를 담은 배열을 만들어줌 (이 생각까지는 동일했는데 방법이 떠오르지 않았음)
 * 4. queue를 만들어주고, bfs를 돌면서 distance의 길이를 담은 배열을 배출해줌 ⭐️ => 이 구간이 가장 핵심
 * 5. 해당 배열에서 최댓값을 구하고, 최댓값과 같은 노드의 개수를 return
 */
function solution2(n, edge) {
  const graph = Array.from(Array(n + 1), () => [])

  for (const [src, dest] of edge) {
    graph[src].push(dest)
    graph[dest].push(src)
  }

  const distance = Array(n + 1).fill(0)
  distance[1] = 1

  //BFS
  const queue = [1]
  while (queue.length > 0) {
    const src = queue.shift()
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest)
        distance[dest] = distance[src] + 1
      }
    }
  }

  const max = Math.max(...distance)
  return distance.filter((node) => node === max).length
}

const n2 = 6
const edge2 = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]

console.log(solution2(n2, edge2))
