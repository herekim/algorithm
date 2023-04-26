function solution(k, dungeons) {
  let answer = 0
  const dfs = (k, dungeons, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      const [minFatigue, expendedFatigue] = dungeons[i]
      if (minFatigue === 0 || minFatigue > k) {
        continue
      }
      const dungeonsCopy = [...dungeons]
      dungeonsCopy[i] = [0, 0]
      dfs(k - expendedFatigue, dungeonsCopy, count + 1)
    }
    return (answer = Math.max(answer, count))
  }
  dfs(k, dungeons, 0)
  return answer
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
)

/*
계획
// 실패한 계획
1. 던전을 소모 피로도가 작은 순서로 sort, 최소 피로도가 큰 순서로 sort를 한다.
2. sort한 던전 배열을 for문을 돌며 최대 던전수를 체크한다.
    2.1. 최소 피로도보다 k가 크다면 answer++, k-소모피로도
        2.1.1. k-소모 피로도가 0보다 작다면 continue
        2.1.2. k-소모 피로도가 0과 같거나 크다면 answer++, k-소모피로도
    2.2. 최소 피로도보다 k가 작다면 continue

// 다음 계획
1. dfs를 이용해 탐색을 한다
2. 인자로는 남은 k, 방문한 던전을 방문처리한 던전배열, 방문횟수를 넘겨준다.
3. 만약 최소피로도가 0이거나(방문을 했거나), 최소피로도가 남은 k보다 크다면 continue
4. 그렇지 않다면 해당 위치의 던전을 방문처리하고, dfs를 재귀함수로 돌려준다.
5. 그렇게 모든 경우의 수를 비교하면서 count가 answer보다 크면 answer를 교체한다.

시간/공간 복잡도
O(n^2)

예상 유형
dfs

배운 점
- 주어진 조건이 배열의 길이가 최대 8이었다. 그러므로 완전 탐색을 해도 괜찮은 배열의 길이다. 이런 조건을 보고 풀이 방법에 접근할수도 있을듯.
*/
